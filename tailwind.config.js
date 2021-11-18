// tailwind.config.js
module.exports = {
  future: {},
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "montserrat",
          "Helvetica",
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
        ],
        serif: ["montserrat", "Helvetica", "Open Sans", "ui-serif", "Georgia"],
      },
      colors: {
        "sadi-blue": {
          DEFAULT: "#06719E",
          50: "#63CCF9",
          100: "#4FC6F8",
          200: "#28B9F7",
          300: "#09A9ED",
          400: "#078DC5",
          500: "#06719E",
          600: "#044A68",
          700: "#022432",
          800: "#000000",
          900: "#000000",
        },
        "sadi-red": {
          DEFAULT: "#B20929",
          50: "#F87A92",
          100: "#F76782",
          200: "#F54062",
          300: "#F31943",
          400: "#D90B32",
          500: "#B20929",
          600: "#7D061D",
          700: "#470410",
          800: "#120104",
          900: "#000000",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
