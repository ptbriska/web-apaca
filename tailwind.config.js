/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apaca: {
          // Palet Warna Utama: Gradasi Merah Pekat ke Merah Cerah
          redDark: "#7F1D1D",      // Merah Pekat (Deep Red/Maroon)
          redPrimary: "#DC2626",   // Merah Utama
          redBright: "#EF4444",    // Merah Cerah
          redLight: "#FEF2F2",     // Merah Sangat Muda
          // Warna Netral Pendukung
          dark: "#0F172A",         // Slate Gelap
          gray: "#475569",         // Gray
          lightBg: "#F8FAFC",      // Background terang
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
