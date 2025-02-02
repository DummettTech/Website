module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "orange-t": "#ffa500",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(purple|pink|orange|yellow|green|black|gray|neutral|red|blue|white)/,
    },
  ],
};
