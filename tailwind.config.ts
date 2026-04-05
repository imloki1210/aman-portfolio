import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      gridTemplateColumns: {
        bento: "repeat(2, 1fr)",
      },
      backdropBlur: {
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};
export default config;
