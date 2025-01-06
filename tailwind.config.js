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
      fontSize: {
        'heading-1': ['5rem', { lineHeight: '5.25rem', letterSpacing: '0.1rem', fontWeight: '900' }],
        'heading-2': ['3.5rem', { lineHeight: '4.125rem', letterSpacing: '0.07rem', fontWeight: '900' }],
        'heading-3': ['2rem', { lineHeight: '5.25rem', letterSpacing: '0.04rem', fontWeight: '700' }],
        'heading-4': ['1.55rem', { lineHeight: '5.25rem', letterSpacing: '0.031rem', fontWeight: '700' }],
        'subheading-1': ['2rem', { lineHeight: '2.75rem', letterSpacing: '0.04rem', fontWeight: '400' }],
        body: ['1.25rem', { lineHeight: '2rem', letterSpacing: '0.025rem', fontWeight: '400' }],
      },
      fontFamily: {
        heading: ['Source Sans 3, sans-serif'],
        body: ['Open Sans, sans-serif'],
      },
    },
  },
  plugins: [],
};
