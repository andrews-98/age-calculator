/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
  ],
  theme: {
    extend: {
      margin: {
        '-2.2rem': '-2.2rem',
      }
    },
    screens: {
      'mobile': '600px'
    }
  },
  plugins: [],
}

