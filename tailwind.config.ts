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
        "ivy-headline": ["var(--font-ivy-headline)", "serif"],
        ivy: ["var(--font-ivy-headline)", "serif"],
        "vvds-rashfield": ["var(--font-vvds-rashfield)", "sans-serif"],
        "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
        "ivypresto": ['"ivypresto-display"', "serif"],
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
