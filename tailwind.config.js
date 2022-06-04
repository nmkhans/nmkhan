module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5e2ced",
          secondary: "#263b5e",
          accent: "#f7fdfc",
          neutral: "#6a7695",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
