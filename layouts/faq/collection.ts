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

// The fixed FAQ page is a single file; extra FAQ pages are created from this folder collection.
export const FaqCollection = {
  name: 'faq',
  label: 'FAQ',
  files: [
    {
      name: 'fixedfaq',
      label: 'Fixed FAQ',
      file: 'content/faq/_index.en.md',
      fields: [...pageHeader('faq'), faqGroups],
    },
  ],
};

export const DynamicFaqCollection = {
  name: 'dynamicfaq',
  label: 'Dynamic FAQ',
  folder: 'content/faq',
  create: true,
  i18n: true,
  slug: '\x7b\x7bslug\x7d\x7d',
  fields: [
    ...pageHeader('faq'),
    { label: 'Button text', name: 'button_text', widget: 'string', required: false },
    { label: 'Button url', name: 'button_url', widget: 'string', required: false },
    faqGroups,
  ],
};
