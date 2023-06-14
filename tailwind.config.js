/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arab: ["arab", "sans-serif"],
      },
      backgroundImage: {
        masjid: "url('/src/assets/mosque.jpg')",
        masjid2: "url('/src/assets/masjid.jpg')",
        masjid3: "url('/src/assets/mekkah.jpg')",
      },
    },
  },
  plugins: [],
};
