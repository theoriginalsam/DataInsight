/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    colors: {
      primary: "#0f172a",
      primarylight: "#0a315e",
      secondary: "#0066CC",
      white: "#FEFEFE",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sans: ['"Smooch Sans"', "sans-serif"],
        backgroundImage: {
          pattern:
            "url('https://media.istockphoto.com/vectors/abstract-gray-vector-background-vector-id1296403715?b=1&k=20&m=1296403715&s=170667a&w=0&h=ZC-3bnkPVpiryBP5xifNldNYzO9y4PWQgjL7NysoDJ0=')",
          "footer-texture": "url('/img/footer-texture.png')",
        },
        backgroundOpacity: {
          10: "0.1",
          20: "0.2",
          95: "0.95",
        },
      },
    },
  },
  plugins: [],
};
