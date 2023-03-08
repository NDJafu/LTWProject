/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/cover/cover-2023.webp')",
      },
    },
  },
  plugins: [],
};
