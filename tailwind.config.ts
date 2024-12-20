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
        area: ["var(--font-area)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        als: ["var(--font-als)", "sans-serif"],
        anth: ["var(--font-anth)", "sans-serif"],
        circular: ["var(--font-circular)", "sans-serif"],
        areaExtended: ["var(--font-area-extended)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
