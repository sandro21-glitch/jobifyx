/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0057A0", // A brighter blue for primary buttons and navigation
        secondary: "#20C997", // A more vibrant teal for secondary buttons and highlights
        accent: "#FF8C00", // A brighter orange for attention-grabbing elements
        background: "#FFFFFF", // Pure white for a clean and bright background
      },
    },
  },
  plugins: [],
};
