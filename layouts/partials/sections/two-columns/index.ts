export const TwoColumnsSection = {
  label: 'Two Columns Section',
  required: false,
  name: 'two-columns',
  widget: 'object',
  fields: [
    {
      label: 'Left/upper column',
      name: 'left',
      widget: 'list',
      types: [],
      min: 1,
      max: 1,
    },
    {
      label: 'Right/lower column',
      name: 'right',
      widget: 'list',
      types: [],
      min: 1,
      max: 1,
    },
  ],
};
