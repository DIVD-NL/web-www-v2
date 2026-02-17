export const HomeCollection = {
  name: '_index',
  label: 'Home page',
  slug: '_index',
  folder: 'content',
  create: false,
  path: '_index',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'home',
    },
    {
      label: 'Opener',
      name: 'opener',
      widget: 'string',
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'text',
    },
    {
      label: 'fold',
      name: 'fold',

      widget: 'object',
      fields: [
        {
          label: 'Showcase',
          name: 'showcase',
          widget: 'relation',
          collection: 'articles',
          search_fields: ['title', 'case.caseid'],
          value_field: '/newsroom/articles/{{slug}}',
          display_fields: ['title', 'case.caseid'],

          multiple: false,
        },
        {
          label: 'Received an email',
          name: 'received',
          widget: 'string',
        },
        {
          name: 'received_alt',
          label: 'Alt text for received image',
          widget: 'string',
        },
        {
          label: 'Family',
          name: 'family',
          widget: 'string',
        },
        {
          name: 'family_alt',
          label: 'Alt text for family image',
          widget: 'string',
        },
      ],
    },
    {
      name: 'whatwedo',
      label: 'What we do',
      widget: 'object',
      collapsed: true,

      fields: [
        {
          label: 'title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 't1',
          name: 't1',
          widget: 'string',
        },
        {
          label: 't1_Image',
          name: 't1_image',
          widget: 'image',
          public_folder: '/images/',
          media_folder: '/assets/images/',
          required: true,
        },
        {
          label: 't1_alt',
          name: 'alt_text_for_t1_image',
          widget: 'string',
        },
        {
          label: 't2',
          name: 't2',
          widget: 'string',
        },
        {
          label: 't2_Image',
          name: 't2_image',
          widget: 'image',
          public_folder: '/images/',
          media_folder: '/assets/images/',
          required: true,
        },
        {
          label: 't2_alt',
          name: 'alt_text_for_t2_image',
          widget: 'string',
        },
        {
          label: 't3',
          name: 't3',
          widget: 'string',
        },
        {
          label: 't3_Image',
          name: 't3_image',
          widget: 'image',
          public_folder: '/images/',
          media_folder: '/assets/images/',
          required: true,
        },
        {
          label: 't3_alt',
          name: 'alt_text_for_t3_image',
          widget: 'string',
        },
      ],
    },
    {
      name: 'helpushelpyou',
      label: 'Help us, help you',
      widget: 'object',
      collapsed: true,

      fields: [
        {
          label: 'title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'description',
          name: 'description',
          widget: 'text',
        },
      ],
    },
    {
      label: 'Volunteer',
      name: 'volunteer',
      widget: 'object',
      collapsed: true,

      fields: [
        {
          label: 'title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'checklist',
          name: 'checklist',
          widget: 'list',
          allow_add: true,

          fields: [
            {
              label: 'Item',
              name: 'item',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
};
