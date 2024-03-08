/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        reenie: ['Reenie Beanie', 'system-ui'],
        sanchez: ['Sanchez', 'system-ui'],
        elite: ['Special Elite', 'system-ui'],
        osvald: ['osvald', 'system-ui'],
      },
      backgroundImage: {
        craft: "url('/src/assets/craft.webp')",
      },
      container: {
        padding: '7%',
      },
      scale: {
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
