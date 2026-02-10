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

        loader: {
          bg: "var(--color-bg-loader)",
          active: "var(--color-active-loader)",
          muted: "var(--color-muted-loader)",
        },

        text: {
          header: "var(--color-text-header)",
          body: "var(--color-text-body)",
          brand: "var(--color-text-brand)",
          productCard: "var(--color-text-productCard)",
        },

        button: {
          textPimary: "var(--color-text-primary)",
          textSecondary: "var(--color-text-secondary)",
          textFocused: "var(--color-text-focused)",
          textOutline: "var(--color-text-outline)",
          textDisabled: "var(--color-text-disabled)",
          primary: "var(--color-button-primary)",
          secondary: "var(--color-button-secondary)",
          focused: "var(--color-button-focused)",
          outline: "var(--color-button-outline)",
          disabled: "var(--color-button-disabled)",
        },

        bg: {
          main: "var(--color-bg-main)",
          sidebar: "var(--color-bg-sidebar)",
        },
      },
    },
  },
  plugins: [],
};
