/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat':['Montserrat'],
        'Poppins':['Poppins'],
        'Lato':['Lato'],
        'Protest riot':['Protest+Riot']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}

