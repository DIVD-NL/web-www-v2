import type {} from 'vite/client';
import collections from './collections';

export default {
  backend: {
    name: 'github',
    repo: 'DIVD-NL/web-www-v2',
    branch: import.meta.env.VITE_CMS_BRANCH,
  },
  load_config_file: false,
  local_backend: true,
  // Content files are named `*.en.md`, so the locale suffix must be known to get clean slugs.
  i18n: {
    structure: 'multiple_files',
    locales: ['en'],
    default_locale: 'en',
  },
  media_folder: '/assets/images',
  public_folder: '/images',
  site_url: 'https://divd.nl',
  collections,
};
