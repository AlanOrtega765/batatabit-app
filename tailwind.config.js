/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "24px",
      "4xl": "40px",
    },
    extend: {
      colors: {
        "bitcoin-orange": "#F7931A",
        "soft-orange": "#FFE9D5",
        "secondary-blue": "#1A9AF7",
        "soft-blue": "#E7F5FF",
        "warm-black-primary": "#201E1C",
        "warm-black-secondary": "#282623",
        "off-grey": "#BABABA",
        "just-grey": "#757575",
        "dark-grey": "#363636",
        "off-white": "#FAF8F7",
        "just-white": "#FFFFFF",
      },
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(207.8deg, #201E1C 16.69%, #F7931A 100%)",
      },
      dropShadow: {
        1: "0 4px 8px rgba(89, 73, 30, 0.16)",
        2: "0px 4px 8px rgba(0, 0, 0, 0.16)"
      },
    },
  },
  plugins: [],
};
