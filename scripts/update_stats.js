import axios from 'axios';
import { readFileSync, writeFileSync } from 'fs';
import matter from 'gray-matter';

async function updateMarkdown() {
  try {
    // Fetch the data from the endpoint
    const response = await axios.get('https://csirt.divd.nl/csv/stats.json');
    const { data } = response;

    // Initialize totals
    const totalMembers = 189; // Data ia hardcoded as not correct in the API
    let totalCases = 0;
    let totalIps = 0;

    // Aggregate data from each year using Object.entries
    Object.entries(data).forEach(([, stats]) => {
      // TODO: undo the comment after the data is fixed in the API
      // totalMembers += stats.cases;
      totalCases += stats.cases;
      totalIps += stats.ips;
    });

    ['en', 'nl'].forEach((lang) => {
      // Read the existing markdown file
      const filePath = `content/block/_index.${lang}.md`;
      const fileContent = readFileSync(filePath, 'utf8');

      // Parse the front matter
      const parsed = matter(fileContent);
      const frontMatter = parsed.data;

      // Update the front matter with the aggregated data
      frontMatter.mission.members = totalMembers.toLocaleString('nl-NL');
      frontMatter.mission.totalcases = totalCases.toLocaleString('nl-NL');
      frontMatter.mission.ips = totalIps.toLocaleString('nl-NL');

      // Convert back to markdown with updated front matter
      const newContent = matter.stringify(parsed.content, frontMatter);

      // Write the updated content back to the file
      writeFileSync(filePath, newContent, 'utf8');

      console.log(`${lang} file updated successfully!`);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Run the function
updateMarkdown();
