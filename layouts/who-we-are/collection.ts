import { TeamPage } from '../team/collection';

export const WhoWeAreCollection = {
  name: 'who-we-are',
  label: 'Who we are',
  files: [
    {
      name: 'who-we-are',
      label: 'Who we are',
      file: 'content/who-we-are/_index.en.md',
      fields: [
        { label: 'Title', name: 'title', widget: 'string', default: 'Who we are' },
        { label: 'Opener', name: 'opener', widget: 'string' },
        { label: 'Intro', name: 'intro', widget: 'text' },
        {
          label: 'Mission and history',
          name: 'missionandhistory',
          widget: 'object',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Intro', name: 'intro', widget: 'text' },
            { label: 'Description', name: 'description', widget: 'text' },
          ],
        },
        {
          label: 'Communication manager',
          name: 'communicationmanager',
          widget: 'object',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Role', name: 'role', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'text' },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
              public_folder: '/images/whoweare',
              media_folder: '/assets/images/whoweare',
              required: false,
            },
          ],
        },
      ],
    },
    TeamPage,
  ],
};
