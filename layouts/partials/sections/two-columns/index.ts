import { TextColumn } from '../../columns/text';

const columnTypes = [TextColumn];

const sharedColumnProperties = {
  widget: 'list',
  min: 1,
  max: 1,
  types: columnTypes,
};

export const TwoColumnsSection = {
  label: 'Two Columns Section',
  required: false,
  name: 'two-columns',
  widget: 'object',
  fields: [
    {
      label: 'Left/upper column',
      name: 'left',
      ...sharedColumnProperties,
    },
    {
      label: 'Right/lower column',
      name: 'right',
      ...sharedColumnProperties,
    },
    {
      label: 'Background',
      name: 'background',
      widget: 'boolean',
    },
    { label: 'Type', name: 'type', widget: 'hidden', default: 'two-columns' },
  ],
};
