/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter", "sans-serif"]
      },
      colors: {
        newBlack: "#1C1B1B",
        newBlue: "#2F80ED"
      }
    },
  },
  plugins: [require("daisyui")],
}

