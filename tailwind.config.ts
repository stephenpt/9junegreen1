import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#FFF8FA",
          100: "#FDF0F4",
          200: "#FCE0E8",
          300: "#EDD5DB",
          400: "#D65A7F",
          500: "#C44A6E",
          600: "#B33E60",
          700: "#9E3254",
        },
        burgundy: {
          DEFAULT: "#2D1B22",
          light: "#4A2F38",
        },
        mauve: {
          DEFAULT: "#7A5B65",
          light: "#9A7B85",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;