const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/*.{html,js,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: colors.white,
        gray: '#A9A9A9',
        light: '#F1F1F4',
      },
    },
    fontSize: {
      xs: '.65rem',
    },
    maxWidth: {
      xs: '16rem',
    },
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  variants: {
  },
};
