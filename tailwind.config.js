// tailwind.config.js (CORRECT FOR v4)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define 'sans' with your Inter font variable and a fallback stack.
        // You provide the fallback fonts yourself now.
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],

        // Define your custom 'grotesk' utility with its variable and a fallback stack.
        grotesk: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
  // plugins: [require("tailwindcss-animate")],
};
