/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // screens: {
    //   sm: '375px',
    //   md: '640px',
    //   lg: '1024px',
    //   xl: '1440px',
    // },
    colors: {
      White: 'hsl(0, 0%, 100%)',
      Black: 'hsl(0, 0%, 0%)',
      DarkGray: 'hsl(0, 0%, 55%)',
      VeryDarkGray: 'hsl(0, 0%, 41%)',
    },
    fontFamily: {
      alata: ['"Alata"', ...defaultTheme.fontFamily.serif],
      josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('src/assets/images/mobile/image-hero.jpg')",
        'desktop-hero-image': "url('src/assets/images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
