const image = (name = 'image', folder = '/images') => ({
  label: 'Image',
  name,
  widget: 'image',
  public_folder: folder,
  media_folder: `/assets${folder}`,
  required: false,
});

const imageBlock = (label: string, name: string) => ({
  label,
  name,
  widget: 'object',
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    image(),
    { label: 'Image alt text', name: 'alt', widget: 'string', required: false },
    { label: 'Description', name: 'description', widget: 'text' },
  ],
});

const titleDescription = (label: string, name: string) => ({
  label,
  name,
  widget: 'object',
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Description', name: 'description', widget: 'text' },
  ],
});

const labelLink = (label: string, name: string) => ({
  label,
  name,
  widget: 'object',
  fields: [
    { label: 'Label', name: 'label', widget: 'string' },
    { label: 'Link', name: 'link', widget: 'string' },
  ],
});

export const ContributeCollection = {
  name: 'contribute',
  label: 'Contribute',
  files: [
    {
      name: 'contribute',
      label: 'Contribute',
      file: 'content/contribute/_index.en.md',
      fields: [
        {
          label: 'Aliases',
          name: 'aliases',
          widget: 'list',
          required: false,
          field: { label: 'Path', name: 'alias', widget: 'string' },
        },
        { label: 'Title', name: 'title', widget: 'string', default: 'Contribute' },
        { label: 'Opener', name: 'opener', widget: 'string' },
        { label: 'Intro', name: 'intro', widget: 'text' },
        imageBlock('Become a volunteer', 'becomevolunteer'),
        imageBlock('Become a partner', 'becomepartner'),
        titleDescription('Appreciate', 'appreciate'),
        {
          label: 'Donate SUPP',
          name: 'donatesupp',
          widget: 'object',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'text' },
            {
              label: 'Value links',
              label_singular: 'Value link',
              name: 'links',
              widget: 'list',
              max: 3,
              fields: [
                { label: 'Label', name: 'label', widget: 'string' },
                { label: 'Link', name: 'link', widget: 'string' },
              ],
            },
            { label: 'Custom amount link', name: 'customlink', widget: 'string' },
          ],
        },
        labelLink('Donate PayPal', 'donatepaypal'),
        labelLink('Donate bank transfer', 'donatebanktransfer'),
        {
          label: 'Donations register',
          label_singular: 'Donation',
          name: 'donations',
          widget: 'list',
          fields: [
            { label: 'Date', name: 'date', widget: 'datetime', format: 'YYYY-MM-DDTHH:mm:ssZ' },
            { label: 'Amount', name: 'amount', widget: 'string', hint: 'Include currency symbol' },
            { label: 'By', name: 'by', widget: 'string' },
          ],
        },
      ],
    },
    {
      name: 'partners',
      label: 'Become a partner',
      file: 'content/contribute/partners/_index.en.md',
      fields: [
        { name: 'type', widget: 'hidden', default: 'partners' },
        { label: 'Title', name: 'title', widget: 'string', default: 'Become a partner' },
        { label: 'Opener', name: 'opener', widget: 'string' },
        { label: 'Intro', name: 'intro', widget: 'text' },
        { label: 'Sponsordeck link', name: 'sponsordeck', widget: 'string' },
        { label: 'Partners title', name: 'partnerstitle', widget: 'string' },
        { label: 'Partners intro', name: 'partnersintro', widget: 'text' },
        {
          label: 'Partner quote',
          name: 'partnerquote',
          widget: 'object',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Website', name: 'website', widget: 'string' },
            { label: 'Role', name: 'role', widget: 'string' },
            { label: 'Quote', name: 'quote', widget: 'text' },
            { ...image('image', '/images/partners'), required: true },
          ],
        },
        {
          label: 'Partners',
          label_singular: 'Partner',
          name: 'partnerlist',
          widget: 'list',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'text' },
            { label: 'Website', name: 'website', widget: 'string' },
            image('image', '/images/partners'),
          ],
        },
      ],
    },
    {
      name: 'volunteers',
      label: 'Volunteers',
      file: 'content/contribute/volunteers/_index.en.md',
      fields: [
        { name: 'type', widget: 'hidden', default: 'volunteers' },
        { label: 'Title', name: 'title', widget: 'string', default: 'Become a volunteer' },
        { label: 'Opener', name: 'opener', widget: 'string' },
        { label: 'Intro', name: 'intro', widget: 'text' },
        { label: 'Core values title', name: 'corevaluestitle', widget: 'string' },
        {
          label: 'Core values',
          label_singular: 'Core value',
          name: 'corevalues',
          widget: 'list',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'text' },
          ],
        },
      ],
    },
  ],
};
