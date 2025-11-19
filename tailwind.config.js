/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#06b6d4",
        bg: "#0b1120",
        card: "#0f1724"
      },
      borderRadius: {
        xl: "14px"
      }
    }
  },
  plugins: []
}
