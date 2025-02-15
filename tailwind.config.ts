import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        // primary: "#58A6A6", // Verde Oceano
        background: {
          DEFAULT: "#F8F9FA", // Light Mode Background
          dark: "#0A1A1F", // Dark Mode Background
        },
        secondary: {
          DEFAULT: "#1B2A2F", // Light Mode
          dark: "#142022", // Dark Mode
        },
      },
    },
  },
};
