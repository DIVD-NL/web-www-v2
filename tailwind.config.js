/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    container: {
      center: true,
      screens: {
        desktop: '1200px',
      },
    },
    screens: {
      desktop: '1280px',
    },
    extend: {
      colors: {
        'light-black': '#1D1D1D',
        'dark-gray': '#545454',
        gray: '#D1D1D1',
        'light-gray': '#F2F2F2',
        'DIVD-yellow': '#FFD736',
        'DIVD-turquoise': '#3DDCEB',
      },
    },
  },
  plugins: [],
};
