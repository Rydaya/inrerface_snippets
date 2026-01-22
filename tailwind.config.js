/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        gothic: ["SpecialGothic", "sans-serif"],
      },
      colors: {
        accent: "var(--color-primary-accent)",
        focused: "var(--color-text-focused)",

        text: {
          main: "var(--color-text-main)",
          focused: "var(--color-text-focused)",
          sidebar: "var(--color-text-sidebar)",
        },

        bg: {
          main: "var(--color-bg-main)",
          accent: "var(--color-bg-accent)",
          sidebar: "var(--color-bg-sidebar)",
        },
      },
    },
  },
  plugins: [],
};
