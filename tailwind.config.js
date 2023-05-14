/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff0fe',
          100: '#e1e3fe',
          200: '#c9cbfc',
          300: '#a8a9f9',
          400: '#8d85f4',
          500: '#7a68ec',
          600: '#6c4cdf',
          700: '#5e3ec5',
          800: '#4c349f',
          900: '#40317e',
          950: '#271d49',
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
