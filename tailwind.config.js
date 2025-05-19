/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          dark: "hsl(10, 79%, 65%)",
          light: "hsl(26, 66%, 93%)",
        },
        blue: "hsl(186, 34%, 65%)",
        brown: {
          dark: "hsl(25, 47%, 15%)",
          light: "hsl(28, 10%, 53%)",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
