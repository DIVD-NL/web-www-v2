import { getConfig } from './config';
import { getAuthClient } from './auth';
import { FormProcessor } from './formProcessor';
import { updateTeamsIndex } from './teamUpdater';

async function main() {
  try {
    console.log('Starting form response processing...');
    const config = await getConfig();
    const auth = await getAuthClient();
    const formProcessor = new FormProcessor(config.formMapping);

    // Fetch and process form responses
    const updatedPeople = await formProcessor.processResponses(auth, config);

    // Update teams index
    await updateTeamsIndex(config, updatedPeople);
    console.log('\nScript execution completed successfully');
  } catch (error) {
    console.error('Error processing form responses:', error);
    process.exit(1);
  }
}

main();
