const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["JetBrains Mono NL"],
    },
  },
  plugins: [typography],
};
