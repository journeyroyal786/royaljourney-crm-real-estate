/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          dark: '#1a1412',
          card: '#241b18',
          border: '#3d2e2a',
          gold: '#f59e0b',
          goldLight: '#fbbf24',
          goldDark: '#d97706',
        }
      }
    },
  },
  plugins: [],
}