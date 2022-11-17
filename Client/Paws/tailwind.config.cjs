/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      colors: {
        'backblue': '#1F232C',
        'newpink' : '#FC5C65',
        'newblue' : '#3A6AD4'
      },
      backgroundImage: {
        'dog': "url('./src/assets/backdog.jpg')",
      },
     },
   },
   plugins: [],
 };