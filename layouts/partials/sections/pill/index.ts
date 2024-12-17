import button from '../../components/button';

export const Pill = {
  name: 'pill',
  label: 'Pill',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      i18n: true,
    },
    button,
  ],
};
