import { google } from 'googleapis';
import { Config, PersonData, FormFieldMapping, TeamName } from './types';
import { downloadImage } from './imageDownloader';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export class FormProcessor {
  private headerRow: string[] = [];
  private headerIndices: Map<string, number> = new Map();

  constructor(private formMapping: FormFieldMapping) {
    console.log('FormProcessor initialized with field mappings');
  }

  async processResponses(auth: any, config: Config): Promise<Map<string, PersonData>> {
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
      if (personData.profilePicture) {
        try {
          const fullImagePath = path.join(config.imagesDir, baseFileName);
          const savedPath = await downloadImage(personData.profilePicture, fullImagePath);
          localImagePath = path.join('images', 'people', 'profile-pictures', path.basename(savedPath));
          console.log(`Profile picture processed: ${localImagePath}`);
        } catch (error) {
          console.error(`Failed to download image for ${firstName} ${lastName}:`, error);
          localImagePath = defaultProfilePictures[Math.floor(Math.random() * defaultProfilePictures.length)];
        }
      } else {
        localImagePath = defaultProfilePictures[Math.floor(Math.random() * defaultProfilePictures.length)];
      }

      const frontMatter = {
        type: 'people',
        title: `${firstName} ${lastName}`,
        image: localImagePath ? `${localImagePath}` : '',
        role: personData.role || 'Volunteer',
        intro: personData.about,
        links: Object.entries(personData.socialLinks)
          .filter(([_, url]) => url)
          .map(([platform, url]) => ({
            platform: platform as keyof typeof personData.socialLinks,
            url: url as string,
          })),
        csirt_cases: [],
        csirt_posts: [],
        cve_records: [],
        description: personData.about,
      };

      const markdown = matter.stringify('', frontMatter);
      const filename = `${baseFileName}.md`;
      await fs.writeFile(path.join(config.outputDir, filename), markdown);

      updatedPeople.set(filename.replace('.md', ''), personData);
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

    const getValue = (key: keyof typeof this.formMapping.headerNames): string => {
      const index = this.headerIndices.get(key);
      return index !== undefined ? row[index] || '' : '';
    };

    const teamsValue = getValue('teams');
    const teams = this.processTeams(teamsValue);

    const personData: PersonData = {
      timestamp: getValue('timestamp'),
      email: getValue('email'),
      consent: consentValue,
      firstName: getValue('firstName').trim(),
      lastName: getValue('lastName').trim(),
      about: getValue('about'),
      role: getValue('role').trim() || 'Volunteer',
      teams,
      socialLinks: {
        linkedin: getValue('linkedin'),
        twitter: getValue('twitter'),
        facebook: getValue('facebook'),
        website: getValue('website'),
      },
      profilePicture: getValue('profilePicture'),
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
