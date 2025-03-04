export const ArticleCardsSection = {
  name: 'article-cards-section',
  label: 'Article Cards Section',
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
      label: 'Selected Articles',
      name: 'articles',
      widget: 'relation',
      collection: 'articles',
      search_fields: ['title', 'case.caseid'],
      value_field: '/newsroom/articles/{{slug}}',
      display_fields: ['title', 'case.caseid'],
      multiple: true,
    },
  ],
};
