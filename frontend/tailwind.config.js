/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-green": "var(--color-green)",
        "c-l-green": "var(--color-l-green)",
      }
    },
  },
  plugins: [require("daisyui")],
}