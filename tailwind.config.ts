import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",
        navy: "#2C3E50"
      },
      boxShadow: {
        header: "0 10px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;


