import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PersonData } from '../types';
import { CsirtPersonData } from './CsirtDataService';

/**
 * Service for handling file operations
 */
export class FileService {
  /**
   * Create necessary directories
   * @param outputDir Directory for output files
   * @param imagesDir Directory for images
   */
  async createDirectories(outputDir: string, imagesDir: string): Promise<void> {
    console.log('Creating output directories...');
    await fs.mkdir(outputDir, { recursive: true });
    await fs.mkdir(imagesDir, { recursive: true });
  }

  /**
   * Get existing person files
   * @param outputDir Directory containing person files
   * @returns Set of filenames
   */
  async getExistingFiles(outputDir: string): Promise<Set<string>> {
    const existingFiles = await fs.readdir(outputDir);
    return new Set(existingFiles.filter((file) => file.endsWith('.en.md')));
  }

  /**
   * Generate a markdown file for a person
   * @param personData Person data
   * @param imagePath Path to the person's image
   * @param csirtData CSIRT data for the person
   * @param outputDir Directory to write the file to
   * @returns Filename of the generated file
   */
  async generateMarkdownFile(
    personData: PersonData,
    imagePath: string,
    csirtData: CsirtPersonData,
    outputDir: string,
  ): Promise<string> {
    const { firstName, lastName } = personData;
    const fullName = `${firstName} ${lastName}`;

    // Handle spaces in first and last name correctly by replacing them with hyphens in the filename
    const baseFileName = `${firstName.toLowerCase().replace(/\s+/g, '-')}-${lastName.toLowerCase().replace(/\s+/g, '-')}`;
    const filename = `${baseFileName}.en.md`;

    const frontMatter = {
      type: 'people',
      title: fullName,
      image: imagePath,
      role: personData.role || 'Volunteer',
      intro: personData.about,
      links: Object.entries(personData.socialLinks)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, url]) => url)
        .map(([platform, url]) => ({
          name: platform as keyof typeof personData.socialLinks,
          link: url as string,
        })),
      csirt_cases: csirtData.csirt_cases || [],
      csirt_posts: csirtData.csirt_posts || [],
      cve_records: csirtData.cve_records || [],
    };

    const markdown = matter.stringify('', frontMatter);
    await fs.writeFile(path.join(outputDir, filename), markdown);

    console.log(`Generated markdown file: ${filename}`);
    return filename;
  }

  /**
   * Remove files for people who have revoked consent
   * @param existingFiles Set of existing files
   * @param processedFiles Set of files that were processed
   * @param outputDir Directory containing the files
   */
  async removeRevokedConsentFiles(
    existingFiles: Set<string>,
    processedFiles: Set<string>,
    outputDir: string,
  ): Promise<void> {
    console.log('\nChecking for revoked consent or removed entries...');

    for (const existingFile of Array.from(existingFiles)) {
      if (!processedFiles.has(existingFile)) {
        console.log(`Removing ${existingFile} - consent revoked or entry removed from spreadsheet`);
        await fs.unlink(path.join(outputDir, existingFile));
      }
    }
  }
}
