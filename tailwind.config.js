import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
const config = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      'white': '#FAFAFA',
      'black': '#1B1B1B',
      'dark': '#5C68D6',
      'light': '#C2CAFF',
      'contrast': '#FF7738',
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