const plugin = require('tailwindcss/plugin')

function hideScrollbars({ addBase }) {
  addBase({
    '*::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari, Opera,
    '*': {
      '-ms-overflow-style': 'none', // IE and Edge
      'scrollbar-width': 'none', // Firefox
    },
  })
}

const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    plugin(hideScrollbars),
  ],
  theme: {
    extend: {}
  },
};

module.exports = config;