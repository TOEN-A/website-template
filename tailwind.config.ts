import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "icons-color": "#4c5773",
        "icons-light-color": "#4c577341",
        "icons-bg-color": "#e2e6e9",
        "shadow-dark-color": "#d3dae7",
        "bg-shadow-dark-color": "#d3dae745",
        "shadow-light-color": "#fff",
        "main-bg-color": "#ecf0f3",
      },
      fontFamily: {
        notojp: ["var(--font-notojp)"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-tap-highlighting": {
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        },
      });
    }),
  ],
};
export default config;
