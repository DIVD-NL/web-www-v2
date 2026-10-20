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
  media_folder: '/assets/images',
  public_folder: '/images',
  site_url: 'https://divd.nl',
  collections,
};
