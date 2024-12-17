import button from '../button';

export const CardHorizontal = {
  name: 'cardHorizontal',
  label: 'Horizontal Card',
  widget: 'object',
  fields: [
    {
      label: 'Category',
      name: 'category',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'text',
      i18n: true,
    },
    button,
  ],
};
