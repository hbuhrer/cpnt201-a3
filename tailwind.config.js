/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'custom' : ['"Questrial"', 'sans-serif']
      },

      width: {
        '76': ['"18.75rem"'],
      },
    },
  },
  plugins: [],
}