export const Intro = {
  name: 'intro',
  label: 'Intro',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
      i18n: true,
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'text',
      i18n: true,
    },
  ],
};
