import caseWidget from '../partials/components/case-researchers-widget';
import { articleSections } from '../partials/sections';

export const Collection = {
  label: 'Newsroom articles',
  name: 'articles',
  folder: 'content/newsroom/articles',
  public_folder: '/images/articles',
  media_folder: '/assets/images/articles',
  create: true,
  slug: '{{ .Title | urlize }}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
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
      label: 'alt_tag_for_image',
      name: 'alt',
      widget: 'string',

      required: false,
    },
    {
      ...caseWidget,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
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
