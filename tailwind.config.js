/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#00F5F5',
        'dark-blue': '#00BEBE',
        'gray': '#1B263B',
        'black-custom': '#0D1B2A',
        'brown-exec': '#A67758',
        'brown-exec-op': 'rgb(166 119 88 / 0.8)',
        'white-exec': '#F9F5F2',
      }
    },
  },
  plugins: [],
}
