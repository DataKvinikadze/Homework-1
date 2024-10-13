/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "380px",
      md: "1440px",
      lg: "1902px",
    },
  },
  plugins: [],
};
