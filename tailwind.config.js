/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ["./files/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-blue": "#00BAFF",
        "custom-purple": "#6336FA",
      },
    },
    fontFamily: {
      Roboto: ["Roboto"]
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
