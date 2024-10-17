/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mm: "480px",
      md: "820px",
      lg: "1440px",
    },
  },
  plugins: [],
};
