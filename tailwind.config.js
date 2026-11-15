/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apaca: {
          // Palet Warna Utama: Gradasi Merah Premium
          darkest: "#1f0303",      // Background paling gelap (untuk selang-seling section)
          baseDark: "#2a0404",     // Background merah tua utama
          cardDark: "#3f0909",     // Warna dasar untuk glass-card
          
          // Merah Standar
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
