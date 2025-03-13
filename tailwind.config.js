// tailwind.config.js

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#FFFFFF",
          secondary: "#6e757c",
          accent: "#869a9a",
        },
      }
    },  
    plugins: [],
  }