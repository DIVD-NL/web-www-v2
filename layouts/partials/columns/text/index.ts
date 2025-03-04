import { Button } from '../../components/button';

export const TextColumn = {
  label: 'Text Column',
  name: 'text-column',
  widget: 'object',
  fields: [
    {
      label: 'Contents',
      name: 'content',
      widget: 'markdown',
    },
    {
      ...Button,
      label: 'Call to Action',
      name: 'cta',
    },
  ],
};
