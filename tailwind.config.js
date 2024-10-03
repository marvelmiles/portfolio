/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        110: "110px",
        300: "300px",
        col3: "31.8%",
        col2: "48.4%",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
