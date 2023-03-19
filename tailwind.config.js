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
        "poppins-bold": ["Poppins Bold", ...defaultTheme.fontFamily.sans],
        "poppins-semi-bold": ["Poppins SemiBold", ...defaultTheme.fontFamily.sans],
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
