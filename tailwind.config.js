/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        sciFiBg: '#1A1A2E',
        sciFiAccent: '#FF4C60',
        sciFiText: '#EAEAEA',
      },
    },
  },
  plugins: [],
};
