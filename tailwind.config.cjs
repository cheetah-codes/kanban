/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#F4F7FD",
          main: "#635FC71A",
          hover: "#635FC740",
          dark: "#2B2C37",
          "very-dark": "#20212C",
          medium: "#828FA3",
        },
        red: {
          destroy: "#EA5555",
          "destroy-hover": "#FF9898",
        },
        purple: {
          primary: "#635FC7",
          hover: "#A8A4FF",
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
