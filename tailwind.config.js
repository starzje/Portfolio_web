/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
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
        // "section-pattern2": "url('./assets/background_2ndsection.png')",
        // "section-pattern": "url('./assets/background_2ndsection.svg')",
        // "section-pattern3": "url('./assets/background_2ndsection2.svg')",
        // "floor-pattern": "url('./assets/floor.svg')",
        // "section-3-pattern": "url('./assets/bg_3.jpg')",
        "footer-pattern": "url('./assets/footer_bg.svg')",
        "stars-pattern": "url('./assets/stars.svg')",
      },
    },
  },
  plugins: [],
};
