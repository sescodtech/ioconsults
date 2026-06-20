import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1530",
        forest: "#2D1B69",
        bone: "#FFFFFF",
        mist: "#F7F6FB",
        brass: "#5533B5",
        "brass-light": "#C4A8FF",
        "brass-deep": "#3D2490",
        slate: "#4A4560",
        "slate-light": "#8080A0",
        line: "#E2DFF0",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #2D1B69 0%, #3D2490 40%, #4E2DA8 70%, #6B3FCE 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #2D1B69 0%, #3D2490 60%, #4E2DA8 100%)",
        "brand-button": "linear-gradient(135deg, #3D2490, #5533B5)",
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
