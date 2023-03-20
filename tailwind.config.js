const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sofia-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
