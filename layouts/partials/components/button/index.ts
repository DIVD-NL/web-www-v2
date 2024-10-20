export default {
  label: 'Button',
  name: 'button',
  required: false,
  widget: 'object',
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
      label: 'External link',
      name: 'external',
      widget: 'boolean',
      required: false,
      default: 'false',
      i18n: true,
    },
  ],
};
