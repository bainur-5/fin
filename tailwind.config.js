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
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

