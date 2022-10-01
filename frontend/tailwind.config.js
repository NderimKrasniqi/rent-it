/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px'],
      xl: ['24px', '32px'],
    },
    extend: {
      colors: {
        light: '#f8f4f4',
        medium: '#6e6969',
        dark: '#0c0c0c',
        danger: '#ff5252',
        primaryTint: '#70917e',
        secondaryTint: '#3a3735',
        primary: {
          50: '#f5f8f6',
          100: '#dfe8e2',
          200: '#bed1c4',
          300: '#96b2a1',
          400: '#70917e',
          500: '#557763',
          600: '#425d4e',
          700: '#384d41',
          800: '#303f37',
          900: '#2b3631',
        },
        secondary: {
          50: '#f7f6f6',
          100: '#e5e2e2',
          200: '#cac6c5',
          300: '#a8a2a0',
          400: '#867c7b',
          500: '#6b6361',
          600: '#554e4c',
          700: '#46403f',
          800: '#3a3735',
          900: '#363332',
        },
      },
    },
  },
  plugins: [],
};
