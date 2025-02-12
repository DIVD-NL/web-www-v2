import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { getAuthClient } from './auth';

export async function downloadImage(url: string, outputPath: string): Promise<string> {
  console.log(`\nProcessing image from URL: ${url}`);

  const fileId = url.match(/\/d\/([^/]+)/)?.[1] || url.match(/id=([^&]+)/)?.[1];

  if (!fileId) {
    throw new Error(`Invalid Google Drive URL: ${url}`);
  }

  console.log(`Extracted file ID: ${fileId}`);

  const auth = await getAuthClient();
  const drive = google.drive({ version: 'v3', auth });

  console.log('Fetching file metadata...');
  const metadata = await drive.files.get({ fileId: fileId, fields: 'name,mimeType' });

  console.log('Downloading file content...');
  const response = await drive.files.get({ fileId: fileId, alt: 'media' }, { responseType: 'arraybuffer' });

  if (!response.data) {
    throw new Error('No data received from Google Drive');
  }

  const buffer = Buffer.from(response.data as WithImplicitCoercion<string>);
  console.log(`Downloaded file size: ${buffer.length} bytes`);

  const contentHash = createHash('sha256').update(buffer).digest('hex');
  console.log(`Generated content hash: ${contentHash}`);

  const originalExt = path.extname(metadata.data.name || '') || '.jpg';
  const dir = path.dirname(outputPath);
  const nameBase = path.basename(outputPath, path.extname(outputPath));
  const finalPath = path.join(dir, `${nameBase}-${contentHash}${originalExt}`);

  console.log(`Saving image to: ${finalPath}`);
  await fs.writeFile(finalPath, buffer);

  return finalPath;
}
