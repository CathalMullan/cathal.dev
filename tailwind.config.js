module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        code_light: "#e3eaf2",
        code_dark: "#111b27",
      },
    },
    fontFamily: {
      mono: ["JetBrains Mono NL"],
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
}
