export const ImageColumn = {
  label: 'Image Column',
  name: 'image-column',
  widget: 'object',
  fields: [
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Image accessibility description',
      name: 'description',
      widget: 'string',
    },
    {
      label: 'Round left side',
      name: 'rounded',
      widget: 'boolean',
    },
  ],
};
