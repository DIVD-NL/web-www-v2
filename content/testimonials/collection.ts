export const TestimonialsCollection = {
  label: 'Testimonials',
  name: 'testimonials',
  folder: 'content/testimonials',
  slug: '_index',
  i18n: true,
  create: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Testimonials',
      name: 'testimonials',
      widget: 'list',
      i18n: true,
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'role',
          name: 'role',
          widget: 'string',
          i18n: true,
        },
        {
          label: 'Quote',
          name: 'quote',
          widget: 'text',
          i18n: true,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          public_folder: '/images/testimonials',
          media_folder: '/assets/images/testimonials',
          required: false,
        },
      ],
    },
  ],
};
