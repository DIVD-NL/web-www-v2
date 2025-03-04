import { google } from 'googleapis';
import { Config, PersonData, FormFieldMapping, TeamName } from './types';
import { downloadImage } from './imageDownloader';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GoogleAuth } from 'google-auth-library';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';

export class FormProcessor {
  private headerRow: string[] = [];
  private headerIndices: Map<string, number> = new Map();

  constructor(private formMapping: FormFieldMapping) {
    console.log('FormProcessor initialized with field mappings');
  }

  async processResponses(auth: GoogleAuth<JSONClient>, config: Config): Promise<Map<string, PersonData>> {
    const sheets = google.sheets({ version: 'v4', auth });

    console.log('Fetching spreadsheet metadata...');
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId: config.spreadsheetId,
      ranges: [],
      includeGridData: false,
    });

    const firstSheet = metadata.data.sheets?.[0];
    if (!firstSheet?.properties?.title) {
      throw new Error('Could not determine sheet title');
    }

    console.log(`Using sheet: ${firstSheet.properties.title}`);

    console.log('Fetching form responses...');
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: config.spreadsheetId,
      range: `${firstSheet.properties.title}!A:Z`,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) {
      throw new Error('Sheet appears to be empty or contains insufficient data');
    }

    console.log(`Found ${rows.length - 1} form responses`);
    this.initializeHeaders(rows[0]);

    const missingFields = this.validateHeaders();
    if (missingFields.length > 0) {
      throw new Error(`Missing required form fields: ${missingFields.join(', ')}`);
    }

    console.log('Creating output directories...');
    await fs.mkdir(config.outputDir, { recursive: true });
    await fs.mkdir(config.imagesDir, { recursive: true });

    const updatedPeople = new Map<string, PersonData>();
    console.log('\nProcessing individual responses...');

    for (const row of rows.slice(1)) {
      const personData = this.processRow(row);
      if (!personData) continue;

      const { firstName, lastName } = personData;
      if (!firstName || !lastName) {
        console.log('Skipping response: Missing first or last name');
        continue;
      }

      const baseFileName = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
      console.log(`\nProcessing entry for: ${firstName} ${lastName}`);

      const defaultProfilePictures = [
        '/images/divd-profilepicture-volunteer1.svg',
        '/images/divd-profilepicture-volunteer2.svg',
        '/images/divd-profilepicture-volunteer3.svg',
        '/images/divd-profilepicture-volunteer4.svg',
      ];

      let localImagePath = '';

      // Get the picture preference and placeholder choice
      const picturePreference = this.getValue(row, 'picturePreference');
      const placeholderChoice = this.getValue(row, 'placeholderChoice');

      if (picturePreference === 'I want to use one of the placeholders') {
        // Map placeholder choice to the corresponding image
        if (placeholderChoice.startsWith('Option ')) {
          const optionNumber = parseInt(placeholderChoice.replace('Option ', ''), 10);
          if (optionNumber >= 1 && optionNumber <= 4) {
            localImagePath = defaultProfilePictures[optionNumber - 1];
            console.log(`Using placeholder image: ${localImagePath}`);
          } else {
            // Fallback to random placeholder if option number is invalid
            localImagePath = defaultProfilePictures[Math.floor(Math.random() * defaultProfilePictures.length)];
            console.log(`Invalid placeholder option, using random placeholder: ${localImagePath}`);
          }
        } else {
          // Fallback to random placeholder if option format is invalid
          localImagePath = defaultProfilePictures[Math.floor(Math.random() * defaultProfilePictures.length)];
          console.log(`Invalid placeholder format, using random placeholder: ${localImagePath}`);
        }
      } else if (personData.profilePicture) {
        // User wants to upload their own picture
        try {
          const fullImagePath = path.join(config.imagesDir, baseFileName);
          const savedPath = await downloadImage(personData.profilePicture, fullImagePath);
          localImagePath = `/images/people/profile-pictures/${path.basename(savedPath)}`;
          console.log(`Profile picture processed: ${localImagePath}`);
        } catch (error) {
          console.error(`Failed to download image for ${firstName} ${lastName}:`, error);
          localImagePath = defaultProfilePictures[Math.floor(Math.random() * defaultProfilePictures.length)];
        }
      } else {
        // Fallback to random placeholder if no preference or profile picture
        localImagePath = defaultProfilePictures[Math.floor(Math.random() * defaultProfilePictures.length)];
      }

      const frontMatter = {
        type: 'people',
        title: `${firstName} ${lastName}`,
        image: localImagePath,
        role: personData.role || 'Volunteer',
        intro: personData.about,
        links: Object.entries(personData.socialLinks)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, url]) => url)
          .map(([platform, url]) => ({
            name: platform as keyof typeof personData.socialLinks,
            link: url as string,
          })),
        csirt_cases: [],
        csirt_posts: [],
        cve_records: [],
      };

      const markdown = matter.stringify('', frontMatter);
      const filename = `${baseFileName}.en.md`;
      await fs.writeFile(path.join(config.outputDir, filename), markdown);

      updatedPeople.set(filename, personData);
      console.log(`Generated markdown file: ${filename}`);
    }

    return updatedPeople;
  }

  initializeHeaders(headers: string[]): void {
    console.log('Initializing headers from spreadsheet...');
    this.headerRow = headers;
    this.headerIndices.clear();

    Object.entries(this.formMapping.headerNames).forEach(([key, headerName]) => {
      const index = this.headerRow.findIndex((h) => h === headerName);
      if (index !== -1) {
        this.headerIndices.set(key, index);
        console.log(`Mapped field "${key}" to column ${index + 1} (${headerName})`);
      } else {
        console.warn(`Warning: Could not find column for "${headerName}"`);
      }
    });
  }

  validateHeaders(): string[] {
    console.log('Validating required headers...');
    const missingFields: string[] = [];
    Object.entries(this.formMapping.headerNames).forEach(([key, headerName]) => {
      if (!this.headerIndices.has(key)) {
        missingFields.push(headerName);
        console.warn(`Missing required field: ${headerName}`);
      }
    });
    return missingFields;
  }

  getValue(row: string[], key: keyof typeof this.formMapping.headerNames): string {
    const index = this.headerIndices.get(key);
    return index !== undefined ? row[index] || '' : '';
  }

  processRow(row: string[]): PersonData | null {
    console.log('\nProcessing new form response...');

    const consentIndex = this.headerIndices.get('consent');
    if (consentIndex === undefined || !row[consentIndex]) {
      console.log('Skipping row: No consent value found');
      return null;
    }

    const consentValue =
      this.formMapping.validation.consent.transform?.(row[consentIndex]) ?? row[consentIndex].toLowerCase();
    if (!this.formMapping.validation.consent.validValues.some((valid) => consentValue.includes(valid))) {
      console.log(`Skipping row: Invalid consent value "${consentValue}"`);
      return null;
    }

    const teamsValue = this.getValue(row, 'teams');
    const teams = this.processTeams(teamsValue);

    const personData: PersonData = {
      timestamp: this.getValue(row, 'timestamp'),
      email: this.getValue(row, 'email'),
      consent: consentValue,
      firstName: this.getValue(row, 'firstName').trim(),
      lastName: this.getValue(row, 'lastName').trim(),
      about: this.getValue(row, 'about'),
      role: this.getValue(row, 'role').trim() || 'Volunteer',
      teams,
      socialLinks: {
        LinkedIn: this.getValue(row, 'linkedin'),
        Twitter: this.getValue(row, 'twitter'),
        Facebook: this.getValue(row, 'facebook'),
        Website: this.getValue(row, 'website'),
      },
      profilePicture: this.getValue(row, 'profilePicture'),
      picturePreference: this.getValue(row, 'picturePreference'),
      placeholderChoice: this.getValue(row, 'placeholderChoice'),
    };

    console.log(`Processed data for ${personData.firstName} ${personData.lastName}`);
    console.log(`Teams assigned: ${teams.join(', ') || 'None'}`);

    return personData;
  }

  processTeams(teamsString: string): TeamName[] {
    if (!teamsString) return [];

    const teams = teamsString
      .split(this.formMapping.validation.teams.separator)
      .map((team) => team.trim())
      .filter((team): team is TeamName => this.formMapping.validation.teams.validValues.includes(team));

    console.log(`Processed teams: ${teams.join(', ')}`);
    return teams;
  }
}
