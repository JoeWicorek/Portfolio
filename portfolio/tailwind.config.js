/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {keyframes: {
      typewriter: {
          '0%': { width: '0%' },
          '70%': { width: '100%' },
          '100%': { width: '100%' }
      },
      blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
      },
  },
  animation: {
      
      blink: 'blink 0.7s step-end infinite',
  },
},
  },
  plugins: [],
}

