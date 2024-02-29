/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        smythe: ['smythe', 'system-ui'],
        poiret: ['poiret one', 'system-ui'],
        reenie: ['Reenie Beanie', 'system-ui'],
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
    },
    plugins: [],
  },
};
