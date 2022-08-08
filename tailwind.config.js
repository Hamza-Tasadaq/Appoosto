/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Vivid Red-Tangelo": "#D85C27",
        "Medium-Electric-Blue": "#085394",
        Black: "#000000",
        White: "#FFFFFF",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
