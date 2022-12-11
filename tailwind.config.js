/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        webPlayerBg : '#282828' , 
        sideBarBg : '#040404' , 
        Btns : '#1ed15c' , 
      } , 
      backgroundImage : {
        bodyBg : 'linear-gradient(rgb(91 , 87, 115) , rgba(0 , 0 ,0 , 1))' 
      }
    },
  },
  plugins: [],
}
