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
        dark: "#231E1E",
        dark2: "#383E49",
      },
      backgroundColor: {
        orange: "#FA6444",
        dark: "#231E1E",
        white: "#FFFFFF",
        secondaryWhite: "#F6F8FA",
        gray: "#D9D9D9",
      },
      fontFamily: {
        rocGrotesk: "rocGroteskBold, sans-serif",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
