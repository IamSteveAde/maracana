/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark-bg':'hsl(0 0% 30% / 0.25)',
        'back-bg':'hsl(0 0% 0% / 0.25)',
        "custom-red": "rgb(255, 208, 0)",
        "custom-wine": "rgba(255, 0, 0, 0.564)"

      }
    },
    backgroundImage:{
      'hero-image':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../../src/images/bg_image.jpg")',
      // 'fanzone-image':'linear-gradient(rgba(72.5, 11, 11, 0.6),rgba(72.5, 11, 11, 0.6)), url("../../src/images/football-player-wearing-number-10-jersey.jpg")',
      'fanzone-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/AB7651F4-19FA-458F-B5D0-0C1E9E4EED33.JPG")',
      'store-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai.jpg")',
      'store1-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/top-view-bottles-alcohol-assortment.jpg")',
      'store2-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/front-view-glasses-beer-with-wheat.jpg")',
      'store3-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/front-view-different-drinks-colorful-inside-bottles.jpg")',
     
      'store4-image':'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url("../../src/images/baked-chicken-wings-asian-style.jpg")',
      'contact-image':'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url("../../src/images/AB7651F4-19FA-458F-B5D0-0C1E9E4EED33.JPG")',
      'about-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/abt.png")',
      'contact-image-two': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../src/images/petr-machacek-BeVGrXEktIk-unsplash.jpg")'

    },
    fontFamily:{
      "garamond":[ "Cormorant Garamond, serif"],
      "montserrat":[ 'Montserrat', 'sans-serif'],
      "serif": ['sans-serif']
    }
  },
  plugins: [],
}
