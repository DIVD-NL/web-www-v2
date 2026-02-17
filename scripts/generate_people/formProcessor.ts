import { GoogleAuth } from 'google-auth-library';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { Config, PersonData, FormFieldMapping } from './types';
import { CsirtDataService } from './services/CsirtDataService';
import { ImageService } from './services/ImageService';
import { SpreadsheetService } from './services/SpreadsheetService';
import { FileService } from './services/FileService';

/**
 * Main processor for form data
 */
export class FormProcessor {
  private csirtDataService: CsirtDataService;
  private imageService: ImageService;
  private spreadsheetService: SpreadsheetService;
  private fileService: FileService;

  constructor(formMapping: FormFieldMapping) {
    this.csirtDataService = new CsirtDataService();
    this.imageService = new ImageService();
    this.spreadsheetService = new SpreadsheetService(formMapping);
    this.fileService = new FileService();

    console.log('FormProcessor initialized with services');
  }

  /**
   * Process form responses and generate markdown files
   * @param auth Google Auth client
   * @param config Configuration
   * @returns Map of filenames to person data
   */
  async processResponses(auth: GoogleAuth<JSONClient>, config: Config): Promise<Map<string, PersonData>> {
    // Fetch CSIRT data if URL is provided
    if (config.csirtDataUrl) {
      await this.csirtDataService.fetchData(config.csirtDataUrl);
    }

    // Fetch form responses
    const rows = await this.spreadsheetService.fetchResponses(auth, config.spreadsheetId);

    // Validate headers
    const missingFields = this.spreadsheetService.validateHeaders();
    if (missingFields.length > 0) {
      throw new Error(`Missing required form fields: ${missingFields.join(', ')}`);
    }

    // Create directories
    await this.fileService.createDirectories(config.outputDir, config.imagesDir);

    // Get existing files to check for consent revocation
    const existingPeople = await this.fileService.getExistingFiles(config.outputDir);
    const processedPeople = new Set<string>();
    const updatedPeople = new Map<string, PersonData>();

    console.log('\nProcessing individual responses...');

    // Process each row
    for (const row of rows.slice(1)) {
      const personData = this.spreadsheetService.processRow(row);

      // Skip if no data was returned (invalid consent or missing required fields)
      if (!personData) continue;

      const { firstName, lastName } = personData;
      if (!firstName || !lastName) {
        console.log('Skipping response: Missing first or last name');
        continue;
      }

      // Handle spaces in first and last name correctly by replacing them with hyphens in the filename
      const baseFileName = `${firstName.toLowerCase().replace(/\s+/g, '-')}-${lastName.toLowerCase().replace(/\s+/g, '-')}`;
      const fullName = `${firstName} ${lastName}`;

      console.log(`\nProcessing entry for: ${fullName}`);

      // Process profile image
      const localImagePath = await this.imageService.processProfileImage(
        personData.picturePreference || '',
        personData.placeholderChoice || '',
        personData.profilePicture,
        baseFileName,
        config.imagesDir,
        fullName,
      );

      // Overwrite profilePicture with the local image path for JSON output
      personData.profilePicture = localImagePath;

      // Get CSIRT data for this person
      const csirtPersonData = this.csirtDataService.getDataForPerson(fullName);
      this.csirtDataService.logPersonData(fullName, csirtPersonData);

      // Generate markdown file
      const filename = await this.fileService.generateMarkdownFile(
        personData,
        localImagePath,
        csirtPersonData,
        config.outputDir,
      );

      processedPeople.add(filename);
      updatedPeople.set(filename, personData);
    }

    // Remove files for people who have revoked consent
    await this.fileService.removeRevokedConsentFiles(existingPeople, processedPeople, config.outputDir);

    return updatedPeople;
  }
}
