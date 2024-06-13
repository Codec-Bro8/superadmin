import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#FFA500',
      black: '#0C0C0C',
      shade: {
        1: '#242424',
        2: '#505050',
        3: '#1C1B1B'
      },
      white: '#FFFFFF',
      grey: '#CBCBCB',
      icon: {
        1: '#BDBDBD',
      }
    }
  },
  plugins: [],
};
export default config;
