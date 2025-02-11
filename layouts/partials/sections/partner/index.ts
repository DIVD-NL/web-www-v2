export const PartnerSection = {
  label: 'Partner Section',
  required: false,
  name: 'partner-section',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      name: 'partners',
      label: 'Partners',
      label_singular: 'Partner',
      widget: 'list',
      collapsed: true,
      fields: [
        {
          label: 'Partner Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Partner Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Partner Site URL',
          name: 'url',
          widget: 'string',
        },
        {
          label: 'Partner Logo',
          name: 'logo',
          widget: 'image',
        },
      ],
    },
  ],
};
