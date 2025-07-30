import { google, Auth } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';

let authClient: Auth.GoogleAuth | null = null;

async function loadServiceAccount(): Promise<string> {
  console.log('Loading Google service account credentials...');

  if (process.env.GOOGLE_SERVICE_ACCOUNT) {
    console.log('Using service account from environment variable');
    return process.env.GOOGLE_SERVICE_ACCOUNT;
  }

  try {
    const serviceAccountPath = path.join(process.cwd(), 'service-account.json');
    console.log(`Attempting to load service account from: ${serviceAccountPath}`);
    return await fs.readFile(serviceAccountPath, 'utf-8');
  } catch {
    throw new Error(
      'No service account credentials found. Please set GOOGLE_SERVICE_ACCOUNT environment variable or create service-account.json',
    );
  }
}

export async function getAuthClient() {
  if (authClient) {
    return authClient;
  }

  console.log('Initializing Google Auth client...');
  const serviceAccountJson = await loadServiceAccount();
  authClient = new google.auth.GoogleAuth({
    credentials: JSON.parse(serviceAccountJson),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/drive.readonly'],
  });
  return authClient;
}
