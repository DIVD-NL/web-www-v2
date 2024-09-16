export default {
	label: 'Hero',
	name: 'hero',
	widget: 'object',
	collapsed: false,
	fields: [
		{
			label: 'Title',
			name: 'title',
			widget: 'string',
			required: false,
		},
		{
			label: 'Subtitle',
			name: 'subtitle',
			widget: 'string',
			required: false,
		},
		{
			label: 'Content',
			name: 'content',
			widget: 'markdown',
			required: false,
		},
	],
};
