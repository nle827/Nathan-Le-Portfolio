/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    safelist: [
    "parallelogram",
    "text-metallic",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
