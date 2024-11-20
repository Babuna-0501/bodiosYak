/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant-Medium', 'serif'],
        githera:['Githera', 'serif']
      },
      colors: {
        customBg: '#EDEBE8',
      },
      lineHeight: {
        '24': '24px',
      },
    },
  },
  plugins: [],
};
