const faqGroups = {
  label: 'FAQ groups',
  label_singular: 'FAQ group',
  name: 'faqgroups',
  widget: 'list',
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    {
      label: 'FAQs',
      label_singular: 'FAQ',
      name: 'faqs',
      widget: 'list',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'markdown' },
      ],
    },
  ],
};

const pageHeader = (defaultTitle: string) => [
  { label: 'Title', name: 'title', widget: 'string', default: defaultTitle },
  { label: 'Opener', name: 'opener', widget: 'string' },
  { label: 'Intro', name: 'intro', widget: 'text' },
];

export const FaqCollection = {
  name: 'faq',
  label: 'FAQ',
  folder: 'content/faq',
  create: true,
  i18n: true,
  slug: '\x7b\x7bslug\x7d\x7d',
  // Registering `_index.en.md` separately as a file entry makes the editor crash when opened from this list.
  index_file: {
    name: '_index',
    label: 'Fixed FAQ',
    fields: [...pageHeader('faq'), faqGroups],
  },
  fields: [
    ...pageHeader('faq'),
    { label: 'Button text', name: 'button_text', widget: 'string', required: false },
    { label: 'Button url', name: 'button_url', widget: 'string', required: false },
    faqGroups,
  ],
};
