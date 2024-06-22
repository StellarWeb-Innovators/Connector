/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors for light mode
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#1a202c',
        },
        // Custom colors for dark mode
        dark: {
          background: '#1a202c',
          text: '#ffffff',
          primary: '#f6e05e',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

