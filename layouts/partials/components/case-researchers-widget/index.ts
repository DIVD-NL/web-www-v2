import { Button } from '../button';

export default {
  label: 'case',
  required: false,
  name: 'case',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Case ID',
      name: 'caseid',
      widget: 'string',
      required: false,
    },
    {
      label: 'Case closed',
      name: 'closed',
      widget: 'boolean',
      required: false,
    },
    {
      ...Button,
      label: 'Case link',
      name: 'link',
      required: false,
    },
    {
      label: 'Case lead',
      name: 'lead',
      widget: 'string',
      required: false,
    },
    {
      ...Button,
      label: 'Case lead Link',
      name: 'leadlink',
      required: false,
    },
    {
      label: 'Researchers',
      name: 'researchers',
      widget: 'list',
      fields: [
        {
          label: 'Label',
          name: 'label',
          widget: 'string',
        },
        {
          label: 'Link',
          name: 'link',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Researchers (linked)',
      name: 'researchers_people',
      widget: 'relation',
      collection: 'people',
      value_field: '/who-we-are/team/people/{{ .Title | urlize }}',
      display_fields: ['title'],
      search_fields: ['title'],
      multiple: true,
      required: false,
    },
  ],
};
