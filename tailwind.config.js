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
        'brown-exec': '#B99772',
        'brown-exec-op': '#E4CDB4',
        'white-exec': '#F9F5F2',
      },
      spacing: {
        '176': '44rem',
        '200': '50rem',
        '312': '78rem',
        '352': '88rem',
        '452': '113rem',
        '508': '127rem',
      }
    },
  },
  plugins: [],
}
