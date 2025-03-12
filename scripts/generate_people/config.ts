import { promises as fs } from 'fs';
import path from 'path';
import { DEFAULT_FORM_MAPPING, Config } from './types';

export async function getConfig(): Promise<Config> {
  console.log('Loading configuration...');

  try {
    const envPath = path.join(process.cwd(), '.env');
    console.log(`Checking for .env file at: ${envPath}`);
    const envContent = await fs.readFile(envPath, 'utf-8');
    envContent.split('\n').forEach((line) => {
      const [key, value] = line.split('=');
      if (key && value) {
        process.env[key.trim()] = value.trim();
        console.log(`Loaded environment variable: ${key.trim()}`);
      }
    });
  } catch {
    console.log('No .env file found, continuing with environment variables');
  }

  let formMapping = DEFAULT_FORM_MAPPING;
  try {
    const mappingPath = path.join(process.cwd(), 'form-mapping.json');
    console.log(`Checking for form mapping configuration at: ${mappingPath}`);
    const mappingContent = await fs.readFile(mappingPath, 'utf-8');
    formMapping = { ...DEFAULT_FORM_MAPPING, ...JSON.parse(mappingContent) };
    console.log('Custom form mapping loaded successfully');
  } catch {
    console.log('Using default form field mapping');
  }

  const config: Config = {
    spreadsheetId: process.env.GOOGLE_SHEET_ID || '',
    outputDir: path.join(process.cwd(), 'content', 'who-we-are', 'team', 'people'),
    imagesDir: path.join(process.cwd(), 'assets', 'images', 'people', 'profile-pictures'),
    teamsIndexPath: path.join(process.cwd(), 'content', 'who-we-are', 'team', '_index.en.md'),
    csirtDataUrl: 'https://csirt.divd.nl/csv/publications.json',
    formMapping,
  };

  if (!config.spreadsheetId) {
    throw new Error('Missing required environment variable: GOOGLE_SHEET_ID');
  }

  console.log('Configuration loaded successfully');
  console.log(`Output directory: ${config.outputDir}`);
  console.log(`Images directory: ${config.imagesDir}`);
  console.log(`Teams index path: ${config.teamsIndexPath}`);

  return config;
}
