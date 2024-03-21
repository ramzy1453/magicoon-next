import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import daisyuiTheming from "daisyui/src/theming/themes";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      tablet: "750px",
      laptop: "900px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyuiTheming["[data-theme=light]"],
          primary: "#25314C",
          "primary-content": "#F8F9FB",
          secondary: "#8B97B4",
          info: "#396CE8",
          success: "#7360DF",
        },
      },
    ],
  },
};
export default config;
