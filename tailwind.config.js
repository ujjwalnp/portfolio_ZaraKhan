module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': '800px', 
 
      'lg': '1050px',  

      'xl': '1150px', 
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('images/portfolio-hero3.png')",
      }),
     
      colors: {
        red: {
          450: '#E05256'
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}