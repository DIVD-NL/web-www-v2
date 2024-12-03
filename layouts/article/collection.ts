import caseWidget from '../partials/components/case-researchers-widget';
import { articleSections } from '../partials/sections';

export const Collection = {
  label: 'Articles',
  name: 'articles',
  i18n: {
    structure: 'multiple_files',
  },
  folder: 'content/newsroom/articles',
  create: true,
  slug: '{{ .Title | urlize }}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime',
      format: 'YYYY-MM-DDTHH:mm:ssZ',
    },
    {
      label: 'Author(s)',
      name: 'author',
      widget: 'relation',
      collection: 'people',
      value_field: '/who-we-are/team/people/{{ .Title | urlize }}',
      display_fields: ['title'],
      search_fields: ['title'],
      required: false,
      multiple: true,
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'select',
      options: ['case', 'news', 'updates', 'culture'],
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'text',
      i18n: true,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      public_folder: '/images/articles',
      media_folder: '/assets/images/articles',
      required: false,
    },
    {
      label: 'alt',
      name: 'Alt tag for image',
      widget: 'string',
      i18n: true,
      required: false,
    },
    {
      ...caseWidget
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      i18n: true,
    },
    {
      label: 'Bottom sections',
      label_singular: 'Bottom section',
      name: 'sections',
      widget: 'list',
      types: articleSections,
    },
  ],
};
