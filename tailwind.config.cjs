/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#405de6",
        majorelleBlue: "#5851db",
        mianBlue: "#4db5f9",
        grape: "#833ab4",
        mediumRedViolet: "#c13584",
        cerise: "#e1306c",
        IGRed: "#fd1d1d",
        orangeSoda: "#f56040",
        IGOrange: "#f77737",
        yellowOrange: "#fcaf45",
        jasmine: "#ffdc80",
        dark: "#242424",
        light: "#fafafa"
      }
    },
  },
  plugins: [],
}
