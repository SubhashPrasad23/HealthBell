/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
 fontFamily: {
        SourGummy: ["Sour Gummy", 'serif'], // Add custom font
      },
      colors: {
        primary: "#4CAF50", // Replace with your desired color
      },
    },
  },
  plugins: [],
};
