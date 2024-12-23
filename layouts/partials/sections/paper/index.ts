export const Paper = {
  name: 'paper',
  label: 'Paper',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      i18n: true,
    },
    {
      label: 'Background enabled',
      name: 'hasBackground',
      required: false,
      default: false,
      widget: 'boolean',
    },
  ],
};
