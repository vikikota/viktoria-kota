/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        elite: ['Special Elite', 'system-ui'],
        unica: ['Unica One', 'system-ui'],
      },
      backgroundImage: {
        craft: "url('/src/assets/craft.webp')",
        paper: "url('/src/assets/torn-paper.png')",
        paperw: "url('/src/assets/torn-paper-wide.png')",
      },
      container: {
        padding: '7%',
      },
      scale: {
        102: '1.02',
        110: '1.1',
      },
      screens: {
        xs: '475px',
      },
      fill: ['hover', 'focus'],
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
