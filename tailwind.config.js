module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      "red-400": theme("colors.red.400"),
      "red-100": theme("colors.red.100"),
    }),
    screens: {
      xs: "500px",

      sm: "640px",

      md: "850px",

      lg: "1050px",

      xl: "1150px",
    },

    listStyleType: {
      pointer: "url('images/portfolio-hero3.png')",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('images/portfolio-hero3.png')",
      }),
      zIndex: ["hover", "active"],

      colors: {
        red: {
          450: "#E05256",
        },
        indigo: {
          450: "#A89CC8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
