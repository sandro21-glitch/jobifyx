/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002E5D", // Navy for primary buttons and navigation
        secondary: "#17A2B8", // Teal for secondary buttons and highlights
        accent: "#FF6F00", // Orange for attention-grabbing elements
        background: "#F8F9FA", // Light Gray for backgrounds
      },
    },
  },
  plugins: [],
};
