import { sections } from '../partials/sections';

export const WhyOurWorkMatters = {
  label: 'Why our work matters',
  folder: 'content/why-our-work-matters',
  slug: '_index',
  create: false,
  i18n: true,
  fields: [
    {
      label: 'Sections',
      label_singular: 'Section',
      name: 'sections',
      widget: 'list',
      types: sections,
    },
  ],
};
