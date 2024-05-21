/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Vazirmatn FD'],
      },
      colors: {
        '-bg--primary': '#f4f4f4',
      }
    },
    plugins: [],
  },
}