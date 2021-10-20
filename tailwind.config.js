const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const generateSwatch = (name) =>
  Object.fromEntries(
    Array.from(
      {
        length: 9,
      },
      (_, i) => [(i + 1) * 100, `var(--color-${name}-${(i + 1) * 100})`]
    )
  );

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      gray: colors.gray,
      black: '#0F0E0E',
    },
    extend: {
      colors: {
        primary: generateSwatch('primary'),
        secondary: generateSwatch('secondary'),
        accent: generateSwatch('accent'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
