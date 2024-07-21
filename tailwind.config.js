module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Prata", "serif"],
      },
    },
  },
  plugins: [],
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
