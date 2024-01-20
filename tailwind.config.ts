import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        tooltip_show: {
          '50%' : {  opacity: '20'},
          '75%' : {  opacity: '75'},
          '100%' : {  opacity: '100'},
        }
      },
      animation: {
        tooltip_show: 'tooltip_show 3s ease forwards',
      }
    },
  },
  plugins: [],
};
export default config;
