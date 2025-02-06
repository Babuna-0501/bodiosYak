/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        githera: ['Githera', 'serif'],
        libreFranklin: ['"Libre Franklin Light"', 'sans-serif'],
      },
      colors: {
        customBg: '#F7F4EF',
      },
      lineHeight: {
        '24': '24px',
      },
      spacing: {
        100: '100px',
      },
    },
  },
  plugins: [],
};
