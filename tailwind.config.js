/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#312085",
          "purple-light": "#856cc1",
          "purple-dark": "#211a4f",
          yellow: "#eccb51",
          "yellow-dark": "#c9a820",
          cyan: "#856cc1",
          "cyan-dark": "#312085",
          pink: "#9c7dd4",
          orange: "#eccb51",
        },
      },
      fontFamily: {
        display: ["'Bagel Fat One'", "cursive"],
        body: ["'Avenir Next'", "Avenir", "'Century Gothic'", "'Trebuchet MS'", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};
