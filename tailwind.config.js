/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['YourCustomFont', 'sans-serif'],
        serif: ['YourSerifFont', 'serif'],
        europa: ['Europa-Regular', 'sans-serif'],
        nuova: ['EuropaNuova-Bold', 'sans-serif'],
        regular: ['europa', 'Regular'],
      },
    },
  },
  plugins: [],
}