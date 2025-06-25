/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  safelist: ['flicker'], // 👈 Add this line to prevent purge
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
