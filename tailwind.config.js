/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slow: 'moveRight 36s linear infinite',
        fast: 'moveRight 5s linear infinite',
      },
     
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}
