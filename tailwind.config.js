/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      toke: "url('./assets/toke.svg')",
      ayo: "url('./assets/ayo.svg')",
      david: "url('./assets/david.svg')",
      ebube: "url('./assets/ebube.svg')",
      falz2: "url('./assets/falz-2.svg')",
    },

    extend: {
      colors: {
        background: "#1A161F",
        loginButton: "#4C3F97",
        white: "#ffffff",
        box: "#5c26a0",
        green: "#33d4b1",
        darkGreen: "#08a180",
        purple: " #5C26A0",
        black: "#000000",
        ash: "#D1D1D1",
        darkAsh: "#868686",
        gray: "#272727",
        lightPurple: "#CCA4FF",
        lightGray: "#C9C9C9",
        newGray: "#7A7A7A",
        placeHolder: "#585858",
        darkGray: "#505050",
        palePurple: "#8E7EA1",
        darkPurple: "#4C3F97",
      },
      boxShadow: {
        "3xl": "11px 7px 23px #3F1B6C",
      },
    },
  },
  plugins: [],
};
