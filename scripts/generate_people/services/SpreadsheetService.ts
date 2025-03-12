import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { FormFieldMapping, PersonData, TeamName } from '../types';

/**
 * Service for handling spreadsheet operations
 */
export class SpreadsheetService {
  private headerRow: string[] = [];
  private headerIndices: Map<string, number> = new Map();

  constructor(private formMapping: FormFieldMapping) {
    console.log('SpreadsheetService initialized with field mappings');
  }

  /**
   * Fetch form responses from a Google Spreadsheet
   * @param auth Google Auth client
   * @param spreadsheetId ID of the spreadsheet
   * @returns Array of rows from the spreadsheet
   */
  async fetchResponses(auth: GoogleAuth<JSONClient>, spreadsheetId: string): Promise<string[][]> {
    const sheets = google.sheets({ version: 'v4', auth });

    console.log('Fetching spreadsheet metadata...');
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId,
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
      spreadsheetId,
      range: `${firstSheet.properties.title}!A:Z`,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) {
      throw new Error('Sheet appears to be empty or contains insufficient data');
    }

    console.log(`Found ${rows.length - 1} form responses`);
    this.initializeHeaders(rows[0]);

    return rows;
  }

  /**
   * Initialize header indices from the header row
   * @param headers Array of header names
   */
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

  /**
   * Validate that all required headers are present
   * @returns Array of missing field names
   */
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

  /**
   * Get a value from a row by field key
   * @param row Row of data
   * @param key Field key
   * @returns Value from the row
   */
  getValue(row: string[], key: keyof typeof this.formMapping.headerNames): string {
    const index = this.headerIndices.get(key);
    return index !== undefined ? row[index] || '' : '';
  }

  /**
   * Process a row of data into a PersonData object
   * @param row Row of data
   * @returns PersonData object or null if invalid
   */
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

  /**
   * Process a teams string into an array of TeamNames
   * @param teamsString Comma-separated string of team names
   * @returns Array of TeamNames
   */
  private processTeams(teamsString: string): TeamName[] {
    if (!teamsString) return [];

    const teams = teamsString
      .split(this.formMapping.validation.teams.separator)
      .map((team) => team.trim())
      .filter((team): team is TeamName => this.formMapping.validation.teams.validValues.includes(team));

    console.log(`Processed teams: ${teams.join(', ')}`);
    return teams;
  }
}
