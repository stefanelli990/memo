/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': {
          light: '#D158E5',
          DEFAULT: '#E64BFF',
          dark: '#B32EC9',
        },
        'darkColor': {
          DEFAULT: '#232323'
        },
        'lightYellow': '#FFFFCC',
        'lightBlue': '#ADD8E6 ',
        'lightPink': '#FFEBEB',
        'lightGreen': '#98FB98',
        'lightLavander': '#E6E6FA'
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

