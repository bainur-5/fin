/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors:{
        'primary-green': '#35736E',
        'primary-white': '#EFF2F1',
        'primary-yellow': '#FFD748',
        'primary-gray': '#CACACA'
      },
      fontFamily: {
        'logo': ['Post No Bills Colombo', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['DM Serif Text', 'serif']
      },
      boxShadow:{
        'custom' : '3px 5px 4px rgba(0, 0, 0, 0.2)',
        'menu' : '-3px 5px 2px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

