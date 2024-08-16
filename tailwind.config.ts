import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": 'url("/images/fuselogo1.png")',
      },

      colors: {
        gh: "#0E1117", //aka github dark
        herocol: "9C022D",
        footercol: "#251A2D",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FFFFFF",
              foreground: "#000",
            },
          },
        },
        dark: {
          colors: {
            background: "#000",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#000",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
export default config;
