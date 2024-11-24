import button from '../../components/button';

export const Faq = {
  label: 'FAQ',
  required: false,
  name: 'faq',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Enable FAQ', // < hier
      name: 'faq_enabled',
      widget: 'boolean',
      default: false,
    },
    {
      label: 'FAQ Title',
      name: 'title',
      widget: 'string',
      default: 'faq',
      required: false,
      i18n: true,
    },
    {
      label: 'FAQ Opener',
      name: 'opener',
      widget: 'string',
      required: false,
      i18n: true,
    },
    {
      label: 'FAQ Intro',
      name: 'intro',
      widget: 'text',
      required: false,
      i18n: true,
    },
    {
      ...button,
      label: 'Left button',
      name: 'leftButton',
    },
    {
      ...button,
      label: 'Right button',
      name: 'rightButton',
    },
    {
      label: 'FAQ groups',
      name: 'faqgroups',
      widget: 'list',
      i18n: true,
      required: false,
      fields: [
        {
          label: 'heading',
          name: 'heading',
          widget: 'string',
          required: false,
          i18n: true,
        },
        {
          label: 'FAQs',
          name: 'faqs',
          widget: 'list',
          i18n: true,
          required: false,
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
              required: false,
              i18n: true,
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'markdown',
              required: false,
              i18n: true,
            },
          ],
        },
      ],
    },
  ],
};
