/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-A": "var(--button-A)",
        "button-B": "var(--button-B)",
        "button-C": "var(--button-C)",
      },
    },
  },
  plugins: [],
};
