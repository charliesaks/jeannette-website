/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "0.5rem",
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Merienda", "Courgette", ...defaultTheme.fontFamily.sans],
        serif: ["Inter", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// container: {
//   padding: {
//     DEFAULT: "1rem",
//     sm: "2rem",
//     lg: "4rem",
//     xl: "5rem",
//     "2xl": "6rem",
//   },
// },
