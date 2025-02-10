import { Button } from '../../components/button';

export const HeroSection = {
  label: 'Hero Section',
  required: false,
  name: 'hero-section',
  widget: 'object',
  fields: [
    {
      label: 'Page title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Page lead text',
      name: 'lead',
      widget: 'text',
    },
    {
      ...Button,
      required: true,
      name: 'cta',
      label: 'Call to Action',
    },
    {
      label: 'Hero image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Hero image accessibility description',
      name: 'imageDescription',
      widget: 'string',
    },
    { label: 'Type', name: 'type', widget: 'hidden', default: 'hero' },
  ],
};
