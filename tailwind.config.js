/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '240px',
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
          dark: "#212121",
        },
        secondary: {
          DEFAULT: "#fc6d20",
          dark: "#fc6d20"
        },
        primaryText: {
          DEFAULT: "#1e1e1e",
          dark: "#eaeaea",
        },
        grayText: {
          DEFAULT: "#b7b7b7",
          dark: "#777777",
        },
        lightGray: {
          DEFAULT: "rgba(166,166,166,0.3)",
          hover: "rgba(129,129,129,0.3)",
          dark: "rgba(69,69,69,0.3)",
        }
      },
    },
    plugins: [
      // require('@headlessui/tailwindcss')
    ],
  }
}
