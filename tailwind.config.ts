import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "purple-1000": "#7C5DFA",
        "purple-1050": "#9277FF",
        "blue-1000": "#1E2139",
        "blue-1050": "#252945",
        "blue-2000": "#141625",
        "indigo-1000": "#DFE3FA",
        "indigo-1050": "#7E88C3",
        "indigo-2000": "#888EB0",
        "black-1000": "#0C0E16",
        "red-1000": "#EC5757",
        "red-1050": "#FF9797",
        "white-1000": "#F8F8FB",
        "gray-1000": "#494E6E",
        "gray-1050": "#373B53",
        "green-1000": "#33D69F",
        "orange-1000": "#FF8F00",
        "gray-2000": "#777F98",
        "ghost-white": "#F9FAFE",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
