/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:{
        sm:'10px',
        md:'640px'
      }
    },
    extend: {
      spacing:{
        '36':'36rem',
        '97':'97%'
      },
      colors:{
        'black':'#000000'
      }
    },
  },
  plugins: [],
}