import { defineConfig } from 'vite';

export default defineConfig({
  root: 'cms', // Set the root to `cms` since `index.html` is there
  base: './', // Set the base to `./` so paths are relative
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
