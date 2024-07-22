/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#D1FAE5', // Light green
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Default green
          600: '#059669',
          700: '#047857',
          800: '#065F46'  // Thick green
        },
        secondary: {
          100: '#DBEAFE', // Light blue
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Default blue
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF'  // Thick blue
        }
      }
    },
  },
  plugins: [],
}
