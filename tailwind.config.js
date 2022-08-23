/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
        'RoslindaleText' :['RoslindaleText'],
        'IBMPlex':['IBM Plex Sans'],
        'IBMPlexMono':['IBM Plex Mono']
      },
      extend: {
        colors: {
          'bgorange': '#F06A4D',
          'boxgb' : '#FCF0E7',
        },
        boxShadow: {
          '3xl': '6px 6px 0px rgba(28, 26, 22, 0.8)',
        },
      },
  },
  plugins: [],
}
