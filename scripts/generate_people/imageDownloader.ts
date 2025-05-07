import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { getAuthClient } from './auth';
import sharp from 'sharp';
import heicConvert from 'heic-convert';

export async function downloadImage(url: string, outputPath: string): Promise<string> {
  console.log(`\nProcessing image from URL`);

  const fileId = url.match(/\/d\/([^/]+)/)?.[1] || url.match(/id=([^&]+)/)?.[1];

  if (!fileId) {
    throw new Error(`Invalid Google Drive URL: ${url}`);
  }

  console.log(`Extracted file ID`);

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

  // Convert HEIC to JPG and strip EXIF data
  if (originalExt.toLowerCase() === '.heic') {
    const jpgPath = finalPath.toLowerCase().replace('.heic', '.jpg');
    await heicConvert({
      buffer,
      format: 'JPEG',
      quality: 0.9,
    }).then((jpgBuffer) => {
      return sharp(jpgBuffer).withMetadata({}).toFile(jpgPath);
    });
    console.log(`Converted HEIC to JPG: ${jpgPath}`);
    return jpgPath;
  } else {
    // Strip EXIF data for non-HEIC images
    await sharp(buffer).withMetadata({}).toFile(finalPath);
    console.log(`Stripped EXIF data from image: ${finalPath}`);
    return finalPath;
  }
}
