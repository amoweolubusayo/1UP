const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Space Grotesk", ...defaultTheme.fontFamily.serif],
      },
      // colors: {
      //   // blue: colors.blue,
      //   // cyan: colors.cyan,
      // },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
