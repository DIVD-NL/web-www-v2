export const Button = {
  label: 'Button',
  name: 'button',
  required: false,
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Label',
      name: 'label',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
      //   pattern: [
      //     'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)',
      //     'Provide a valid HTTPS url',
      //   ],
    },
    {
      label: 'Inverted colors',
      name: 'invertedColors',
      widget: 'boolean',
      required: false,
      default: false,
    },
    {
      label: 'External link',
      name: 'external',
      widget: 'boolean',
      required: false,
      default: 'false',
    },
    {
      label: 'Download link',
      name: 'download',
      widget: 'boolean',
      required: false,
      default: 'false',
    },
  ],
};
