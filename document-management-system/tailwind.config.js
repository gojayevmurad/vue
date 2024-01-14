/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "dashboard-layout": "1fr 3fr 1fr",
      },
      colors: {
        "primary-text": "#495057",
        "secondary-gray": "#EFF2F7",
        "secondary-text": "#74788D",
      },
    },
  },
  plugins: [],
};
