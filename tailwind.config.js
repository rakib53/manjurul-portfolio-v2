/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray50: "#F0F1F3",
        gray100: "#D0D3D9",
        gray600: "#5D6679",
        gray700: "#48505E",
        gray800: "#383E49",
        gray900: "#2B2F38",
        dark: "#231E1E",
        dark2: "#383E49",
        success600: "#10A760",
        orange: "#FA6444",
      },
      backgroundColor: {
        orange: "#FA6444",
        dark: "#231E1E",
        white: "#FFFFFF",
        secondaryWhite: "#F6F8FA",
        gray: "#D9D9D9",
      },
      fontFamily: {
        rocGroteskBold: "rocGroteskBold, sans-serif",
        rocGroteskMid: "rocGroteskMid, sans-serif",
        rocGroteskReg: "rocGroteskReg, sans-serif",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "300px",
        sm: "540px",
        md: "768px",
        lg: "1024px",
        elg: "1100px",
        xl: "1266px",
        xxl: "1660px",
      },
    },
  },
  plugins: [],
};
