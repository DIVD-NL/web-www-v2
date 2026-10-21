export default {
  plugins: {
    // Hugo handles minification; Tailwind still needs to transform and prefix CSS.
    '@tailwindcss/postcss': { optimize: { minify: false } },
  },
};
