/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      fontFamily: {
        poiret: ['"Poiret One"', 'cursive'], // Adds Poiret One as a custom font
      },
    }
  },
  plugins: []
};
