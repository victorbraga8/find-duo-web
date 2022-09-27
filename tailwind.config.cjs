/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage:{
        background: "url('/fundo.png')",
        'nlw-gradient':'linear-gradient(84.86deg, #9572FC 21.08%, #43E7AD 49.94%, #E1D55D 91.57%);',
        'game-gradient':'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);'
      },
    },
  },
  plugins: [],
}
