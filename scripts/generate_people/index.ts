import { getConfig } from './config';
import { getAuthClient } from './auth';
import { FormProcessor } from './formProcessor';
import { updateTeamsIndex } from './teamUpdater';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  try {
    console.log('Starting form response processing...');
    const config = await getConfig();
    const auth = await getAuthClient();
    const formProcessor = new FormProcessor(config.formMapping);

    // Fetch and process form responses
    const updatedPeople = await formProcessor.processResponses(auth, config);

    // Write updatedPeople to the configured peopleJsonPath as an array
    const peopleArray = Array.from(updatedPeople.values());
    const outputDir = path.dirname(config.peopleJsonPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(config.peopleJsonPath, JSON.stringify(peopleArray, null, 2), 'utf-8');
    console.log(`People JSON written to ${config.peopleJsonPath}`);

    // Update teams index
    await updateTeamsIndex(config, updatedPeople);
    console.log('\nScript execution completed successfully');
  } catch (error) {
    console.error('Error processing form responses:', error);
    process.exit(1);
  }
}

main();
