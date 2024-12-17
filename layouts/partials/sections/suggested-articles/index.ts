import { CardHorizontal } from '../../components/card-horizontal';

export const SuggestedArticles = {
  name: 'suggestedArticles',
  label: 'Suggested articles section',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'Suggested Articles',
      i18n: true,
    },
    { ...CardHorizontal, name: 'leftArticle', label: 'Left article' },
    { ...CardHorizontal, name: 'rightArticle', label: 'Right article' },
  ],
};
