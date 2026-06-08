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
          purple: "#7C3AED",
          "purple-light": "#A78BFA",
          "purple-dark": "#5B21B6",
          yellow: "#FCD34D",
          "yellow-dark": "#F59E0B",
          cyan: "#06B6D4",
          "cyan-dark": "#0891B2",
          pink: "#EC4899",
          orange: "#F97316",
        },
      },
      fontFamily: {
        display: ["var(--font-nunito)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
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
