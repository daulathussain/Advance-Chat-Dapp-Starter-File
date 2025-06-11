// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: "#eff6ff",
        //   500: "#3b82f6",
        //   600: "#2563eb",
        //   700: "#1d4ed8",
        // },
      },
      // animation: {
      //   "fade-in": "fadeIn 0.3s ease-in-out",
      //   "slide-up": "slideUp 0.3s ease-in-out",
      //   "message-enter": "messageEnter 0.3s ease-in-out",
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
