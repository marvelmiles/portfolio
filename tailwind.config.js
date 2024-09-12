/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      md: "20px",
      mdl: "24px",
      lg: "35px",
      xl: "50px",
      xs: "0.8rem",
      base: "16px",
    },

    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      dark: {
        primary: "#000",
        light: "#333",
        dialog: "rgba(0,0,0,.75)",
        chip: "rgba(255, 255, 255)",
      },
      green: {
        primary: "#28a745",
      },
      white: {
        primary: "#fff",
        light: "rgba(255,255,255,.8)",
        milk: "rgba(255,255,255,.8)",
        divider: "rgba(255, 255, 255, 0.2)",
        paper: "rgba(255, 255, 255, 0.1)",
      },
    },
    extend: {
      maxWidth: {
        80: "80%",
        150: "150px",
        300: "300px",
      },
      width: {
        col3: "31.8%",
        col2: "48.4%",
        300: "300px",
        110: "110px",
        auto: "auto",
      },
      scale: {
        101: "1.01",
      },
      borderWidth: {
        20: "20px",
      },
      screens: {
        xs: "0px",
        s200: "200px",
        s280: "280px",
        s320: "320px",
        s360: "360px",
        s412: "412px",
        sm: "576px",
        md: "768px",
        mdl: "1024px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
