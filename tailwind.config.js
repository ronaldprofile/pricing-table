module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pricingTable: {
          yellow: "#ffcc29",
          blue: "#1d539e",
          gray: "#828799",
          priceColor: " #1E2338",

          background: "#f9fbfc"
        }
      }
    }
  },
  plugins: []
};
