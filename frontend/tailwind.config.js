/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosa: {
          100: '#D92399',
          200: '#590F3F',
        },
        cinza: {
          100: '#EFEFEF',
          900: '#353535',
        },
        azul: {
          500: "#235FD9",
          900: "#233259",
        }
      },
      fontFamily: {
        highlight: ['Major Mono Display', 'monospace'],
        default: ['PT Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

