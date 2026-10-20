export const TeamPage = {
  name: 'team',
  label: 'Team',
  file: 'content/who-we-are/team/_index.en.md',
  fields: [
    {
      label: 'type',
      name: 'type',
      widget: 'hidden',
      default: 'team',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'The Team',
    },
    {
      label: 'Opener',
      name: 'opener',
      widget: 'string',
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'markdown',
    },
    {
      label: 'In Progress',
      name: 'in_progress',
      widget: 'boolean',
      default: false,
    },
    {
      label: 'Teams',
      label_singular: 'Team',
      name: 'teams',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'type',
          name: 'type',
          widget: 'hidden',
          default: 'team',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'markdown',
          required: false,
        },
        {
          label: 'Members',
          label_singular: 'Member',
          name: 'members',
          widget: 'list',
          required: false,
          // People files are generated and gitignored, so a relation cannot resolve; store page paths as gen-people does.
          hint: 'Maintained by gen-people. Page path of a person, e.g. /who-we-are/team/people/jane-doe',
          field: { label: 'Person page path', name: 'member', widget: 'string' },
        },
      ],
    },
  ],
};
