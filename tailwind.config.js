/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "PromIcon": "url(/src/assets/images/PromtIcon.png)",
        "TimerIcon": "url(/src/assets/images/TimerIcon.png)",
        "CardIcong": "url(/src/assets/images/CardIcon.png)",
        'promo-svg': "url('/src/assets/svg/svg.minus.svg')",
        "fourImages": "url('/src/assets/images/fourImages.jpg')",
      }
    },
  },
  plugins: [],
}

