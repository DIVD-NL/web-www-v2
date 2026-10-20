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
  slug: '\x7b\x7bslug\x7d\x7d',
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
      value_field: '/who-we-are/team/people/\x7b\x7bslug\x7d\x7d',
      display_fields: ['title'],
      search_fields: ['title'],
      required: false,
      multiple: true,
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'select',
      options: ['case', 'news', 'updates', 'culture', 'hacked'],
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
    { label: 'Card image alt text', name: 'image_alt', widget: 'string', required: false },
    {
      label: 'Custom URL',
      name: 'url',
      widget: 'string',
      required: false,
      hint: 'Overrides the default article path, e.g. /operation-endgame-3',
    },
    {
      label: 'Aliases',
      name: 'aliases',
      widget: 'list',
      required: false,
      hint: 'Old paths that redirect to this article',
      field: { label: 'Path', name: 'alias', widget: 'string' },
    },
    {
      ...caseWidget,
    },
    { label: 'Enable FAQ', name: 'faq_enabled', widget: 'boolean', required: false, default: false },
    {
      label: 'FAQ',
      name: 'faq',
      widget: 'object',
      required: false,
      collapsed: true,
      fields: [
        { label: 'FAQ title', name: 'title', widget: 'string', required: false },
        { label: 'FAQ opener', name: 'opener', widget: 'string', required: false },
        { label: 'FAQ intro', name: 'intro', widget: 'text', required: false },
        { label: 'All FAQ URL', name: 'url', widget: 'string', required: false },
        {
          label: 'FAQ groups',
          label_singular: 'FAQ group',
          name: 'faqgroups',
          widget: 'list',
          required: false,
          fields: [
            { label: 'Heading', name: 'heading', widget: 'string', required: false },
            {
              label: 'FAQs',
              label_singular: 'FAQ',
              name: 'faqs',
              widget: 'list',
              required: false,
              fields: [
                { label: 'Title', name: 'title', widget: 'string', required: false },
                { label: 'Description', name: 'description', widget: 'markdown', required: false },
              ],
            },
          ],
        },
      ],
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
      required: false,
      types: articleSections,
    },
  ],
};
