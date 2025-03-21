/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.187)',
      }
    },
    container: {
      padding: '0px 10px',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1400px'
      }
    },
  },
  plugins: [],
}