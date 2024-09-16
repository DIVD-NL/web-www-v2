import collections from './collections';

export default {
	backend: {
		name: 'github',
		repo: 'DIVD-NL/web-www-v2',
	},
	i18n: {
		structure: 'multiple_files',
		locales: ['en', 'nl'],
		default_locale: 'en',
	},
	load_config_file: false,
	local_backend: true,
	media_folder: '/assets/images',
	public_folder: '/images',
	collections,
};
