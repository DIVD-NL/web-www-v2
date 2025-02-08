import { landingPageSections } from '../../layouts/partials/sections';

export const ProjectEnergyCollection = {
  name: 'ProjectEnergy',
  label: 'Project Energy',
  folder: 'content/energy',
  slug: '_index',
  path: '_index',
  create: true,
  i18n: true,
  fields: [
    { label: 'Page title', name: 'title', widget: 'string', default: 'Project energy' },
    {
      label: 'Sections',
      label_singular: 'Section',
      name: 'sections',
      widget: 'list',
      types: landingPageSections,
    },
    { label: 'Type', name: 'type', widget: 'hidden', default: 'landing-page' },
  ],
};
