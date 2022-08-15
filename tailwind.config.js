/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      white: "white",
      none: "none",
    },
    borderWidth: {
      1: "1px",
    },
    // fontFamily: {
    // quicksand: ["Quicksand", "sans-serif"],
  },
  // },
  // plugins: [],
};
