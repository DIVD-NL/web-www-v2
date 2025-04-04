import axios from 'axios';
import { CsirtCase, CsirtPost, CveRecord } from '../types';

/**
 * Interface for CSIRT data associated with a person
 */
export interface CsirtPersonData {
  csirt_cases?: CsirtCase[];
  csirt_posts?: CsirtPost[];
  cve_records?: CveRecord[];
}

/**
 * Service for fetching and managing CSIRT data
 */
export class CsirtDataService {
  private csirtData: Record<string, CsirtPersonData> = {};

  /**
   * Fetch CSIRT data from the specified URL
   * @param url The URL to fetch CSIRT data from
   */
  async fetchData(url: string): Promise<void> {
    try {
      console.log(`Fetching CSIRT data from ${url}...`);
      const response = await axios.get(url);
      this.csirtData = response.data;
      console.log(`Successfully fetched CSIRT data for ${Object.keys(this.csirtData).length} people`);
    } catch (error) {
      console.error('Failed to fetch CSIRT data:', error);
      this.csirtData = {};
    }
  }

  /**
   * Get CSIRT data for a specific person
   * @param fullName The full name of the person
   * @returns CSIRT data for the person, or an empty object if none exists
   */
  getDataForPerson(fullName: string): CsirtPersonData {
    return this.csirtData[fullName] || {};
  }

  /**
   * Log CSIRT data found for a person
   * @param fullName The full name of the person
   * @param data The CSIRT data for the person
   */
  logPersonData(fullName: string, data: CsirtPersonData): void {
    if (data.csirt_cases?.length || data.csirt_posts?.length || data.cve_records?.length) {
      console.log(`Found CSIRT data for ${fullName}:`);
      if (data.csirt_cases?.length) {
        console.log(`  - ${data.csirt_cases.length} CSIRT cases`);
      }
      if (data.csirt_posts?.length) {
        console.log(`  - ${data.csirt_posts.length} CSIRT posts`);
      }
      if (data.cve_records?.length) {
        console.log(`  - ${data.cve_records.length} CVE records`);
      }
    } else {
      console.log(`No CSIRT data found for ${fullName}`);
    }
  }
}
