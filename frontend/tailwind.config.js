/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px'],
        base: ['16px'],
        lg: ['20px'],
        xl: ['24px'],
        '2xl': ['1.5rem'],
        '3xl': ['1.875rem'],
      },
      colors: {
        light: '#f8f4f4',
        medium: '#A6A6A6',
        dark: '#262626',
        danger: '#ff5252',
        primaryTint: '#70917e',
        secondaryTint: '#3a3735',
        text: '#262626',
        primary: {
          400: '#70917e',
          500: '#557763',
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
