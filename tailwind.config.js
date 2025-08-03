/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'talkgov-blue': '#1e40af',
        'talkgov-light-blue': '#dbeafe',
        'talkgov-green': '#10b981',
        'talkgov-light-green': '#d1fae5',
        'talkgov-yellow': '#fbbf24',
        'talkgov-light-yellow': '#fef3c7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 