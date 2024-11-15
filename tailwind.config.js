/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant-Medium', 'serif'],
      },
      colors: {
        customBg: '#EDEBE8',
      },
    },
  },
  plugins: [],
};
