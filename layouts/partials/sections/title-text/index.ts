import button from '../../components/button';

export const TitleText = {
  name: 'titleText',
  label: 'Title with Text',
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
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      i18n: true,
    },
    button,
  ],
};
