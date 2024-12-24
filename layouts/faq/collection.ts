export const FaqCollection = {
  name: 'faq',
  label: 'FAQ',
  files: [
    {
      label: 'Fixed FAQ',
      name: 'fixedfaq',
      file: 'content/faq/_index.en.md',
      slug: '_index',
      create: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          default: 'faq',
          i18n: true,
        },
        {
          label: 'Opener',
          name: 'opener',
          widget: 'string',
          i18n: true,
        },
        {
          label: 'Intro',
          name: 'intro',
          widget: 'text',
          i18n: true,
        },
        {
          label: 'FAQ groups',
          name: 'faqgroups',
          widget: 'list',
          i18n: true,
          fields: [
            {
              label: 'heading',
              name: 'heading',
              widget: 'string',
              i18n: true,
            },
            {
              label: 'FAQs',
              name: 'faqs',
              widget: 'list',
              i18n: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  i18n: true,
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                  i18n: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const DynamicFaqCollection = {
  name: 'dynamicfaq',
  label: 'Dynamic FAQ',
  folder: 'content/faq',
  create: true,
  slug: '{{slug}}',
  i18n: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'faq',
      i18n: true,
    },
    {
      label: 'Opener',
      name: 'opener',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'text',
      i18n: true,
    },
    {
      label: 'Button text',
      name: 'button_text',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Button url',
      name: 'button_url',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'FAQ groups',
      name: 'faqgroups',
      widget: 'list',
      i18n: true,
      fields: [
        {
          label: 'heading',
          name: 'heading',
          widget: 'string',
          i18n: true,
        },
        {
          label: 'FAQs',
          name: 'faqs',
          widget: 'list',
          i18n: true,
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
              i18n: true,
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'markdown',
              i18n: true,
            },
          ],
        },
      ],
    },
  ],
};
