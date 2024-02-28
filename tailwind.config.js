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
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          md: '2rem',
          lg: '4rem',
          xl: '3rem',
          '2xl': '3rem',
        },
      },
      scale: {
        110: '1.1',
      },
    },
    plugins: [],
  },
};
