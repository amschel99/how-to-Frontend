/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
    
   

extend: {

    
    colors:{
        "primary":"#180018",
        "secondary":"#301860",
    "basic":"#7890a8",
    "dark":"#000000",
    "dark-light":"#737373",
    "dodger":"#248fed",
    "sea":{
        100:"#006466",
        200:"#065A60",
        300:"#0B525B",
        400:"#144552",
        500:"#1B3A4B"
      },
      "haven":{
        100:"#212F45",
        200: "#272640",
        300:"#312244",
        400:"#3E1F47",
        500:"#4D194D"
      },
      "crimson":{
        100:"#590D22",
        200:"#800F2F",
        300:"#A4133C",
        400:"#C9184A",
        500:"#FF4D6D"
      },

      "pink":{
        100:"#FF758F",
        200:"#FF8FA3",
        300:"#FFB3C1",
        400:"#FFCCD5",
        500:"#FFF0F3"

      }




    },
      fontFamily:{
      "heading":['Playfair Display SC', 'serif'],
      "lato":['Lato', 'sans-serif']
    }
},
},
plugins: [],
}