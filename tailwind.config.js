const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      base: '#151515',
      pink: '#C8A1D6',
      white: '#F5F5F5',
      gray: '#1E1E1E',
      transparent: colors.transparent,
      darkWhite: '#eae9e9',
    },
    extend: {
      keyframes: {
        fade: {
          '0%': { transform: 'scale-0', delay: 300 },
          '100%': { transform: 'scale-1' },
        },
      },
      animation: {
        fade: 'fade 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
