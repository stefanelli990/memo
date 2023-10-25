/** @type {import('tailwindcss').Config} */
module.exports = {
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
        }
      }
    }
  },
  plugins: [],
}

