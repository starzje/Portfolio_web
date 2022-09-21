/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern2": "url('./assets/background_svg.svg')",
        "section-pattern": "url('./assets/background_2ndsection.png')",
        "floor-pattern": "url('./assets/floor.svg')",
      },
    },
  },
  plugins: [],
};
