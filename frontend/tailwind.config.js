/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "parallelogram",             // the main button class
    "parallelogram span",        // the text inside button
    "text-metallic",
    "text-cyberpunk-wave",
    "text-rgb-wave"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
