export const HighlightedCases = {
  name: 'highlighted-cases-section',
  label: 'Highlighted Cases Section',
  required: false,
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Highlights',
      name: 'highlights',
      widget: 'relation',
      collection: 'articles',
      search_fields: ['title', 'case.caseid'],
      value_field: '/newsroom/articles/{{slug}}',
      display_fields: ['title', 'case.caseid'],
      multiple: true,
      min: 3,
      max: 3,
    },
  ],
};
