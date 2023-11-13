/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        primary_text: "#FFFFFF",
      },
      backgroundImage: {
        home_desktop: "url('src/assets/home/background-home-desktop.jpg')",
        home_tablet: "url('src/assets/home/background-home-tablet.jpg')",
        home_mobile: "url('src/assets/home/background-home-mobile.jpg')",
      },
      screens: {
        sm: { max: "375px" },
        md: { max: "768px", min: "376px" },
      },
    },
  },
  plugins: [],
};
