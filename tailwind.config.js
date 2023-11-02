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
      },
      backgroundImage: {
        'auth-img': "linear-gradient(180deg, rgba(230, 75, 255, 0.50) 0%, rgba(230, 75, 255, 0.75) 100%), url('/src/assets/auth-img.jpg')"
      }
    }
  },
  plugins: [],
}

