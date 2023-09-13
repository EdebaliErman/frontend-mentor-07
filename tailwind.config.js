/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      bg:"#f2f2f2",
      orange:"#e28525",
      greenaqua:"#016972",
      green:"#00403f",
      text:"#e7f8f8",
      transtparan:"#fff0"
    },
    screens:{
      'sm': {'max': '1239px'},
     
    }
  },
  plugins: [],
}

