const titleDescription = (label: string, name: string, description: 'text' | 'markdown' = 'text') => ({
  label,
  name,
  widget: 'object',
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Description', name: 'description', widget: description },
  ],
});

const codePage = (name: string, label: string, file: string, type: string) => ({
  name,
  label,
  file,
  fields: [
    { name: 'type', widget: 'hidden', default: type },
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Body', name: 'body', widget: 'markdown' },
  ],
});

export const WhatWeDoCollection = {
  name: 'what-we-do',
  label: 'What we do',
  files: [
    {
      name: 'what-we-do',
      label: 'What we do',
      file: 'content/what-we-do/_index.en.md',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Opener', name: 'opener', widget: 'string' },
        { label: 'Intro', name: 'intro', widget: 'text' },
        titleDescription('What we do content', 'whatwedocontent', 'markdown'),
        titleDescription('Scouting', 'scouting'),
        titleDescription('Assessing', 'assessing'),
        titleDescription('Reporting', 'reporting'),
      ],
    },
    codePage('codeofconduct', 'Code of conduct', 'content/what-we-do/code-of-conduct/_index.en.md', 'codeofconduct'),
    codePage('codeofethics', 'Code of ethics', 'content/what-we-do/code-of-ethics/_index.en.md', 'codeofethics'),
  ],
};
