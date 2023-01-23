/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px"
    } ,
    extend: {
      backgroundImage: {
        'hero-pattern-mb': "url('/src/assets/images/bg-intro-mobile.svg')",
        'hero-pattern-des': "url('/src/assets/images/bg-intro-desktop.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)" ,
        brighCyan: "hsl(192, 70%, 51%)",
        grayishBlue:" hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        nav: "bg-gradient-to-r from-limeGreen to-brighCyan"
      }
    },
  },
  plugins: [],
}
