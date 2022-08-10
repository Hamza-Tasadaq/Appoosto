/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Black-Leather-Jacket": "#2E382A",
        "Vivid-Red-Tangelo": "#D85C27",
        "Medium-Electric-Blue": "#085394",
        "Pastel-Violet": "#C397C5",
        "Spanish-Gray": "#979797",
        "Electric-Brown": "#B56362",
        "Yale-Blue": "#115F95",
        Apple: "#4CAF50",
        Platinum: "#E6E6E6",
        Black: "#000000",
        White: "#FFFFFF",
        Saffron:"#F7C531"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
