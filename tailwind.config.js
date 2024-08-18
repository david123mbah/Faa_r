/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor' : '#2a68ff' ,
        'greyIsh' : '#f1f4f8'  ,
        'textColor' :  '#252b36'  ,
      },
    },
  },
  plugins: [],
};
