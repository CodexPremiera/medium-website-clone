/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: "rgba(0, 0, 0, 0.8)",
        banner: "rgb(255, 192, 23)",
        Gray: "#6B6B6B",
        green_custom: "#1a8917",
      },
      fontFamily: {
        title: `gt-super, Georgia, Cambria,Times New Roman, Times, serif;`,
        texts: `sohne, Helvetica Neue, Helvetica, Arial, sans-serif`,
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(280px, 1fr))",
      }
    },
  },
  plugins: [],
}