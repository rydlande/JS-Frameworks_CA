import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
const config = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      'white': '#F0EFEA',
      'black': '##1B1B1B',
      'dark': '#283517',
      'light': '#B8B7A5',
      'gray': '#D4D4D4',
      'purple': {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
        950: '#3b0764',
      },
      'blue': {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
      },
      /* 'gray': {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
        950: '#09090b',
      }, */
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
      fontFamily: {
        main: ['"montserrat"', 'sans-serif'],
        'montserrat-alternates': ['"montserrat-alternates"', 'sans-serif'],
        'logo': ['"bely-display"', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        'card': '0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09)'
      },
    },
  },
  plugins: [],
});

export default config;