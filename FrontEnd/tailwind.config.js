module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // If you're using React.js and TypeScript
    "./public/index.html", // For your HTML files
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px", // Custom breakpoint for extra small devices
        sm: "640px", // Small devices (default)
        md: "768px", // Medium devices (default)
        lg: "1024px", // Large devices (default)
        xl: "1280px", // Extra large devices (default)
        "2xl": "1536px", // 2X large devices (default)
        "custom-lg": "1440px", // Custom large breakpoint
      },
      outline: {
        customouline: "3px solid rgb(0,174,255)",
      },
    },
  },
  plugins: [],
};
