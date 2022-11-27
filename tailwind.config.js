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
        'brown-exec': '#D5B9A8',
        'brown-highlight':'#A67758',
        'brown-exec-op': '#E4CDB4',
        'white-exec': '#F9F5F2',
      },
      spacing: {
        '160': '40rem',
        '176': '44rem',
        '296': '74rem',
        '332': '83rem',
        '336': '84rem',
        '436': '109rem',
        '512': '128rem',
      }
    },
  },
  plugins: [],
}
