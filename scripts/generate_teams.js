import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { option } from 'yargs';
import { post } from 'axios';
import matter, { stringify } from 'gray-matter';

const { argv } = option('team-path', {
  describe: 'path of directory to create team md files',
  type: 'string',
  demandOption: true,
  default: './content/who-we-are/team',
})
  .option('create-teams', {
    describe: 'If set, will create the teams that are in TheOrg',
    type: 'boolean',
    demandOption: false,
    default: false,
  })
  .help()
  .alias('help', 'h');

const url = 'https://prod-graphql-api.theorg.com/graphql';
const headers = { 'Content-Type': 'application/json' };

const fetchTeamsAndMembers = async () => {
  const query = readFileSync(join(__dirname, 'queries/teamsByCompany.graphql'), 'utf8');

  const payload = {
    operationName: 'teamsByCompany',
    variables: {
      companySlug: 'dutch-institute-for-vulnerability-disclosure',
      membersLimit: 500,
      offset: 0,
      limit: 500,
    },
    query,
  };

  try {
    const response = await post(url, payload, { headers });
    console.log('Updating teams');

    const teamsFilePath = `${argv['team-path']}/_index.en.md`;
    let existingContent = '';
    let existingTeams = [];
    let existingFrontMatter = {};

    if (existsSync(teamsFilePath)) {
      const fileContent = readFileSync(teamsFilePath, 'utf8');
      const parsedContent = matter(fileContent);
      existingContent = parsedContent.content;
      existingTeams = parsedContent.data.teams || [];
      existingFrontMatter = parsedContent.data;
    }

    const fetchedTeams = response.data.data.teamsByCompany;

    // Merge existing and fetched team data
    existingTeams.forEach((existingTeam) => {
      process.stdout.write('.');
      const fetchedTeam = fetchedTeams.find((team) => team.name === existingTeam.title);
      if (fetchedTeam) {
        // Update members only if they are not already in existingTeam
        // eslint-disable-next-line no-param-reassign
        if (!existingTeam.members) existingTeam.members = [];

        const existingMemberSlugs = new Set(existingTeam.members?.map((member) => member.split('/').pop()));
        let foundWinko = false;

        fetchedTeam.members.forEach((member) => {
          const memberSlug = `/who-we-are/team/people/${member.slug}`;
          if (!existingMemberSlugs.has(member.slug)) {
            if (member.slug === 'winko') {
              foundWinko = memberSlug; // Store the slug if it is "winko"
            } else {
              existingTeam.members.push(memberSlug);
            }
          }
        });

        // Move "winko" to the front if found
        if (foundWinko) {
          // eslint-disable-next-line no-param-reassign
          existingTeam.members = [foundWinko, ...existingTeam.members];
        }
      }
    });

    // Add new teams from fetched data if they don't exist in existingTeams
    // This code is disabled by default since users can add new teams
    if (argv['create-teams']) {
      console.log('\nCreating new teams');
      fetchedTeams.forEach((fetchedTeam) => {
        process.stdout.write('.');
        if (!existingTeams.some((existingTeam) => existingTeam.title === fetchedTeam.name)) {
          existingTeams.push({
            title: fetchedTeam.name,
            description: '',
            members: fetchedTeam.members.map((member) => `/who-we-are/team/people/${member.slug}`),
          });
        }
      });
    }

    const fileData = {
      ...existingFrontMatter,
      teams: existingTeams,
    };

    const updatedContent = stringify(existingContent, fileData);
    writeFileSync(teamsFilePath, updatedContent);
    console.log('\ndone');
  } catch (error) {
    console.error('Failed to fetch teams and members:', error);
  }
};

const main = async () => {
  await fetchTeamsAndMembers();
};

main();
