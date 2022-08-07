/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "14px",
      sm: "16px",
      base: "28px",
      lg: "32px",
      xl: "56px",
      xxl: "100px",
      xxxl: "150px",
    },
    colors: {
      primary: "#0b0d17",
      secondary: "#d0d6f9",
      third: "#ffffff",
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow"],
        bellefair: ["Bellefair"],
      },
    },
  },
  plugins: [],
};
