import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        barlow: ['Barlow'],
        trebuchetMs: ['Trebuchet MS'],
      },
      colors: {
        traeGreen1: "#93e4c1",
        traeGreen2: "#3baea0",
        traeGreen3: "#118a7e",
      },
    },
    screens: {
      '2xs': '320px',   
      'xs': '480px', 
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;

/*
All screens are @media min-width
    */
