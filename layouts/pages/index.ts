export const Pages = {
	name: 'pages',
	label: 'Pages',
	editor: {
		preview: false,
	},
	folder: 'content/pages',
	slug: '{{slug}}',
	create: true,
	fields: [
		{
			label: 'Layout',
			name: 'layout',
			widget: 'hidden',
			default: 'page',
		},
		{
			label: 'Title',
			name: 'title',
			widget: 'string',
			required: true,
		},
		{
			label: 'Slug',
			name: 'slug',
			widget: 'string',
			required: true,
		},
		{
			label: 'Sections',
			name: 'sections',
			widget: 'list',
			types: [],
		},
	],
};
