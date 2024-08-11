/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./*.{html,js}"],
  important: true,
  theme: {
    extend: {
      padding: {
        "360px": "360px",
      },
      colors: {
        common: "#E9E9F1",
        bgColor: "#161616",
      },

      fontFamily: {
        Syne: "Syne",
      },
      keyframes: {
        first_animate_bg: {
          "0%, 100%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
          },
          "50%": {
            transform: "translate3d(-180px, 90px, 0px) rotate(-90deg)",
          },
        },
        second_animate_bg: {
          "0%, 100%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
          },
          "50%": {
            transform: "translate3d(-45px, -90px, 0px) rotate(180deg)",
          },
        },
        third_animate_bg: {
          "0%, 100%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
          },
          "50%": {
            transform: "translate3d(120px, -90px, 0px) rotate(-235deg)",
          },
        },
      },
      animation: {
        first_animate_bg: "first_animate_bg 15s linear infinite",
        second_animate_bg: "second_animate_bg 15s linear infinite",
        third_animate_bg: "third_animate_bg 15s linear infinite",
      },
      gridTemplateRows: {
        form: "repeat(2, 50%)",
        formAbout: "repeat(2, 620px)",
      },
      gridTemplateColumns: {
        form: "repeat(2, 50%)",
      },
      backgroundImage: {
        portfolio1: "url('/images/portfolio1.png')",
        portfolio2: "url('/images/portfolio2.png')",
        portfolio3: "url('/images/portfolio3.png')",
        portfolio4: "url('/images/portfolio4.png')",
        gradientAbout: "linear-gradient(15deg, #E1BAC5 0%, #CEC4EF 80%)",
      },
      background: {},
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".blur-bg": {
          filter: "blur(100px)",
        },
        ".blur-bg:nth-of-type(1)": {
          background: "#a287d5",
          top: "-10vh",
          right: "5vw",
        },
        ".blur-bg:nth-of-type(2)": {
          background: "#e4b8bf",
          top: "-5vh",
          right: "-20vw",
        },
        ".blur-bg:nth-of-type(3)": {
          background: "#8b6bc5",
          top: "-10vh",
          left: "-10vw",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
