/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        normalGray: '#2e3338',
        lightGray: '#eaeaea'
      }
    }
  },
  plugins: []
}
