import { execFileSync } from 'node:child_process';
import { defineConfig } from 'vite';

const cmsBranch =
  process.env.VITE_CMS_BRANCH ||
  process.env.GITHUB_HEAD_REF ||
  process.env.GITHUB_REF_NAME ||
  execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim() ||
  'main';

export default defineConfig({
  root: 'cms', // Set the root to `cms` since `index.html` is there
  base: './', // Set the base to `./` so paths are relative
  define: {
    'import.meta.env.VITE_CMS_BRANCH': JSON.stringify(cmsBranch),
  },
  build: {
    outDir: '../admin/new-cms', // Output directory for the build (relative to root)
    emptyOutDir: true, // Clear output directory before building
    sourcemap: true, // Enable sourcemaps
  },
  resolve: {
    alias: {
      '@': '/cms',
    },
  },
});
