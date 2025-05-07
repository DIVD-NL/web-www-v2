import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Config, PersonData, TeamsIndex, TeamData } from './types';

export async function updateTeamsIndex(config: Config, updatedPeople: Map<string, PersonData>): Promise<void> {
  console.log('\nUpdating teams index file...');

  const indexContent = await fs.readFile(config.teamsIndexPath, 'utf8');
  const { data: frontmatter } = matter(indexContent);

  const teamsIndex = frontmatter as TeamsIndex;

  // Helper function to strip language suffix from filename
  const stripLanguageSuffix = (filename: string): string => {
    return filename.replace(/\.(en|nl)(\.md)?$/, '');
  };

  console.log('Processing team assignments...');
  teamsIndex.teams = teamsIndex.teams.map((team: TeamData) => {
    console.log(`\nUpdating team: ${team.title}`);

    // Keep existing members that aren't in the updated list
    const existingMembers = team.members.filter((member: string) => {
      const personName = stripLanguageSuffix(path.basename(member));
      return !Array.from(updatedPeople.keys()).map(stripLanguageSuffix).includes(personName);
    });
    console.log(`Retained ${existingMembers.length} existing members`);

    // Add new members for this team
    const newMembers = Array.from(updatedPeople.entries())
      .filter(([, data]) => data.teams.includes(team.title))
      .map(([filename]) => `/who-we-are/team/people/${stripLanguageSuffix(filename)}`);
    console.log(`Adding ${newMembers.length} new members`);

    const sortedMembers = [...existingMembers, ...newMembers].sort((a, b) => {
      const isWinkoA = stripLanguageSuffix(path.basename(a)).toLowerCase().startsWith('winko');
      const isWinkoB = stripLanguageSuffix(path.basename(b)).toLowerCase().startsWith('winko');

      if (isWinkoA && !isWinkoB) return -1;
      if (!isWinkoA && isWinkoB) return 1;
      return a.localeCompare(b);
    });

    return { ...team, members: sortedMembers };
  });

  console.log('Writing updated teams index file...');
  const updatedContent = matter.stringify('', teamsIndex);
  await fs.writeFile(config.teamsIndexPath, updatedContent);
  console.log('Teams index file updated successfully');
}
