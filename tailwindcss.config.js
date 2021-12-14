module.exports = {
  mode: 'jit',
  purge: ['./src/*.{html,js,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      xs: '.65rem',
    },
    textColor: {
      white: '#FFF',
      black: '#000',
      gray: '#A9A9A9',
    },
    maxWidth: {
      xs: '16rem',
    },
  },
  variants: {
  },
};
