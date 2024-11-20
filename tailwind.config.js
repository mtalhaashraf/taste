/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      fontFamily: {
        poiret: ['"Poiret One"', 'cursive'], // Adds Poiret One as a custom font
      },

      colors: {

        'customGreen': 'rgb(96, 106, 72)',

        'light-blue': '#018374',
        'custom-dark-red': '#1F0D07',
        'custom-grey': '#6C7075',
        'custom-dark-brown': '#2A0B0B',
        'custom-dark': '#6C0B0D',
        'custom-dark-blue': '#080D15',
      },
    }
  },
  plugins: []
};
