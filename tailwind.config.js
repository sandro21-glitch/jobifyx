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
      fontSize: {
        "heading-lg": ["22px", { lineHeight: "1.5" }], // Large heading (h1)
        "heading-md": ["20px", { lineHeight: "1.4" }], // Medium heading (h2)
        "heading-sm": ["18px", { lineHeight: "1.4" }], // Small heading (h3)
        "heading-xs": ["16px", { lineHeight: "1.3" }], // Extra-small heading (h4)
        "heading-xxs": ["14px", { lineHeight: "1.3" }], // Extra-extra-small (h5)
        "heading-xxxs": ["13px", { lineHeight: "1.2" }], // Smallest heading (h6)
        "main-p": "12px",
      },
    },
  },
  plugins: [],
};
