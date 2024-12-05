/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rust-brown": "#A25D34",    // Rust or Chestnut Brown
        "sand-tan": "#D0A380",      // Sand or Beige
        "charcoal-gray": "#353634", // Charcoal Gray
        "jet-black": "#1A1A19",     // Jet Black
      },
    },
  },
  plugins: [],
}


