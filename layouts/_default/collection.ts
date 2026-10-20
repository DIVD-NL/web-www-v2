import { NewsroomPage } from '../newsroom/collection';

const markdownPage = (name: string, label: string, file: string) => ({
  name,
  label,
  file,
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Body', name: 'body', widget: 'markdown' },
  ],
});

export const LegalCollection = {
  name: 'legal',
  label: 'Legal pages',
  files: [
    markdownPage('termsandconditions', 'Terms and conditions', 'content/toc/_index.en.md'),
    markdownPage('privacy', 'Privacy', 'content/privacy/_index.en.md'),
    markdownPage('anbi', 'ANBI', 'content/anbi/_index.en.md'),
    markdownPage('security', 'Coordinated Vulnerability Disclosure', 'content/security/_index.en.md'),
  ],
};

const header = (defaultTitle: string, intro: 'text' | 'markdown' = 'text') => [
  { label: 'Title', name: 'title', widget: 'string', default: defaultTitle },
  { label: 'Opener', name: 'opener', widget: 'string' },
  { label: 'Intro', name: 'intro', widget: intro },
];

const step = (n: number) => [
  { label: `Step ${n} title`, name: `step${n}title`, widget: 'string' },
  { label: `Step ${n} description`, name: `step${n}description`, widget: 'string' },
];

const articleRelation = (label: string, name: string, multiple: boolean) => ({
  label,
  name,
  widget: 'relation',
  collection: 'articles',
  search_fields: ['title', 'case.caseid'],
  value_field: '/newsroom/articles/\x7b\x7bslug\x7d\x7d',
  display_fields: ['title', 'case.caseid'],
  required: false,
  multiple,
});

const titleIntro = (label: string, name: string, extra: object[] = [], required = true) => ({
  label,
  name,
  widget: 'object',
  required,
  fields: [
    { label: 'Title', name: 'title', widget: 'string', required },
    { label: 'Description', name: 'intro', widget: 'text', required },
    ...extra,
  ],
});

export const PagesCollection = {
  name: 'pages',
  label: 'Other pages',
  files: [
    NewsroomPage,
    {
      name: 'contact',
      label: 'Contact',
      file: 'content/contact/_index.en.md',
      fields: [
        ...header('Contact'),
        {
          label: 'Form',
          name: 'form',
          widget: 'object',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'markdown' },
          ],
        },
      ],
    },
    {
      name: 'warningemail',
      label: 'Warning email',
      file: 'content/warningemail/_index.en.md',
      fields: [
        ...header('Warning e-mail', 'markdown'),
        {
          label: 'CSIRT',
          name: 'csirt',
          widget: 'object',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'markdown' },
            { label: 'Link', name: 'link', widget: 'string' },
          ],
        },
        {
          label: 'Step by step',
          name: 'stepbystep',
          widget: 'object',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'text' },
            { label: 'Link', name: 'link', widget: 'string' },
            {
              label: 'Steps',
              name: 'steps',
              widget: 'object',
              fields: [
                ...step(1),
                ...step(2),
                ...step(3),
                ...step(4),
                { label: 'Step 4 link label', name: 'step4linklabel', widget: 'string' },
                { label: 'Step 4 link', name: 'step4link', widget: 'string' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      file: 'content/testimonials/_index.en.md',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        {
          label: 'Testimonials',
          label_singular: 'Testimonial',
          name: 'testimonials',
          widget: 'list',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Role', name: 'role', widget: 'string' },
            { label: 'Quote', name: 'quote', widget: 'text' },
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
    },
    {
      name: 'why-our-work-matters',
      label: 'Why our work matters',
      file: 'content/why-our-work-matters/_index.en.md',
      fields: [
        { label: 'Title', name: 'title', widget: 'string', default: 'Why our work matters', required: false },
        { label: 'Opener', name: 'opener', widget: 'markdown', required: false },
        { label: 'Intro', name: 'intro', widget: 'markdown', required: false },
        ...(['leftblock', 'rightblock'] as const).map((name) => ({
          label: name === 'leftblock' ? 'Left content block' : 'Right content block',
          name,
          widget: 'object',
          fields: [
            { label: 'Content', name: 'content', widget: 'markdown', required: false },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
              public_folder: '/images',
              media_folder: '/assets/images',
              required: false,
            },
            { label: 'Image alt text', name: 'alt', widget: 'string', required: false },
            { label: 'Learn more', name: 'learnmore', widget: 'string', required: false },
          ],
        })),
        { label: 'Content title', name: 'contenttitle', widget: 'markdown' },
        {
          label: 'Case highlight',
          name: 'casehighlight',
          widget: 'object',
          required: false,
          fields: [
            { label: 'Title', name: 'title', widget: 'markdown', required: false },
            { label: 'Content', name: 'content', widget: 'markdown', required: false },
          ],
        },
        { label: 'Body', name: 'body', widget: 'markdown' },
      ],
    },
    {
      name: 'dictionary',
      label: 'Dictionary',
      file: 'content/dictionary/_index.en.md',
      fields: [
        { label: 'Title', name: 'title', widget: 'string', default: 'Dictionary', required: false },
        { label: 'Intro', name: 'intro', widget: 'markdown', required: false },
        { label: 'Body', name: 'body', widget: 'markdown' },
      ],
    },
    {
      name: 'blocks',
      label: 'Blocks',
      file: 'content/block/_index.en.md',
      fields: [
        { label: 'Title', name: 'title', widget: 'string', default: 'Blocks', required: false },
        titleIntro('Ethics', 'ethics'),
        {
          label: 'Proudest work',
          name: 'proudestwork',
          widget: 'object',
          required: false,
          fields: [
            { label: 'Title', name: 'title', widget: 'string', required: false },
            articleRelation('Our proudest work', 'ourproudestwork', true),
          ],
        },
        {
          label: 'Our mission',
          name: 'mission',
          widget: 'object',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'text' },
            { label: 'Members', name: 'members', widget: 'string' },
            { label: 'Total cases', name: 'totalcases', widget: 'string' },
            { label: 'Vulnerable IPs', name: 'ips', widget: 'string' },
          ],
        },
        {
          label: 'The DIVD family',
          name: 'divdfamily',
          widget: 'object',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'text' },
            {
              label: 'Members',
              label_singular: 'Member',
              name: 'members',
              widget: 'list',
              fields: [
                { label: 'Name', name: 'name', widget: 'string' },
                { label: 'Description', name: 'description', widget: 'text' },
                { label: 'Link', name: 'link', widget: 'string' },
              ],
            },
          ],
        },
        titleIntro('Family CTA', 'familycta'),
        titleIntro('CSIRT', 'csirt', [{ label: 'Link', name: 'link', widget: 'string' }]),
        {
          label: 'Contact',
          name: 'contact',
          widget: 'object',
          required: false,
          fields: [
            { label: 'Title', name: 'title', widget: 'string', required: false },
            { label: 'Description', name: 'intro', widget: 'markdown', required: false },
            { label: 'To e-mail', name: 'email', widget: 'text', required: false },
          ],
        },
        titleIntro('Footer', 'footer'),
      ],
    },
  ],
};
