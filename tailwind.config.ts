import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4f0ea",
        ink: "#111111",
        stone: "#8d877f",
        shadow: "#1d1a17",
        clay: "#cbc2b7"
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        serif: ["var(--font-cormorant)"]
      },
      letterSpacing: {
        editorial: "0.18em"
      },
      boxShadow: {
        haze: "0 18px 60px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
