export const SliderSection = {
  label: 'Slider Section',
  required: false,
  name: 'slider-section',
  widget: 'object',
  fields: [
    {
      label: 'Section title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Section description',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Cards',
      name: 'cards',
      widget: 'list',
      fields: [
        {
          label: 'Card title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Card description',
          name: 'description',
          widget: 'markdown',
        },
        {
          label: 'Card image',
          name: 'image',
          widget: 'image',
        },
      ],
    },
  ],
};
