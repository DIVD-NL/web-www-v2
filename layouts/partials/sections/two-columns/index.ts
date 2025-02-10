import { CaptionColumn } from '../../columns/caption';
import { ImageColumn } from '../../columns/image';
import { TextColumn } from '../../columns/text';
import { Background } from '../../styling/background';

const columnTypes = [CaptionColumn, TextColumn];

const sharedColumnProperties = {
  widget: 'list',
  min: 1,
  max: 1,
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
      types: columnTypes,
      ...sharedColumnProperties,
    },
    {
      label: 'Right/lower column',
      name: 'right',
      types: [...columnTypes, ImageColumn],
      ...sharedColumnProperties,
    },
    Background,
    { label: 'Type', name: 'type', widget: 'hidden', default: 'two-columns' },
  ],
};
