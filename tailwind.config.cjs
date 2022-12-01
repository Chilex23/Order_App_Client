/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(fit-content, 1fr));",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tablet: "880px",
      sm2: { max: "480px" },
      myXl: "1150px",
      "2xl": "1350px",
    },
    fontFamily: {
      rubik: ["Rubik Distressed", "cursive"],
      karla: ["Karla", "sans-serif"]
    },
  },
  plugins: [],
};
