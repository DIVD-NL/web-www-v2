import caseWidget from '../partials/components/case-researchers-widget';
import { articleSections } from '../partials/sections';

export const NewsroomPage = {
  name: 'newsroom',
  label: 'Newsroom',
  file: 'content/newsroom/_index.en.md',
  fields: [
    { label: 'Title', name: 'title', widget: 'string', default: 'Newsroom' },
    { label: 'Opener', name: 'opener', widget: 'string' },
    { label: 'Intro', name: 'intro', widget: 'text' },
    { label: 'Newsletter link', name: 'newsletter', widget: 'string' },
    {
      label: 'Starter',
      name: 'starter',
      widget: 'object',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
      ],
    },
    {
      label: 'Highlight',
      name: 'highlight',
      widget: 'relation',
      collection: 'articles',
      search_fields: ['title', 'case.caseid'],
      value_field: '/newsroom/articles/\x7b\x7bslug\x7d\x7d',
      display_fields: ['title', 'case.caseid'],
    },
  ],
};

export const Collection = {
  label: 'Newsroom articles',
  name: 'articles',
  folder: 'content/newsroom/articles',
  public_folder: '/images/articles',
  media_folder: '/assets/images/articles',
  create: true,
  i18n: true,
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
