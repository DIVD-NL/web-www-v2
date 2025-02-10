export const Background = {
  label: 'Background',
  name: 'background',
  required: false,
  widget: 'object',
  fields: [
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: [
        { label: 'Light Black', value: 'light-black' },
        { label: 'DIVD Yellow', value: 'divd-yellow' },
      ],
    },
  ],
};
