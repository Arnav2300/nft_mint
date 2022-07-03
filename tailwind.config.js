/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive1': ['Indie Flower'],
        'cursive2':['Pacifico'],
        'sans': ['Kdam Thmor Pro'],
        'poppins': ['Poppins'],

      },
      colors: {
        'sdb':'#26272E',
        'bgc':'#111315',
        'hovblu':'#3174DE',
        'hovbod':'#543CDE',
        'hovbg':'#2f2f39',
      },
    },
  },
  plugins: [],
}
