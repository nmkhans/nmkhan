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
          secondary: "#111215",
          accent: "#f7fdfc",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
