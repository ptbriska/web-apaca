/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apaca: {
          // Palet Warna Utama: Gradasi Merah Pekat ke Merah Cerah
          redDark: "#7F1D1D",      // Merah Pekat (Deep Red/Maroon) - untuk teks tegas/hero background
          redPrimary: "#DC2626",   // Merah Utama - untuk tombol & elemen fokus
          redBright: "#EF4444",    // Merah Cerah - untuk aksen & efek hover
          redLight: "#FEF2F2",     // Merah Sangat Muda - untuk background card/banner
          // Warna Netral Pendukung
          dark: "#0F172A",         // Slate Gelap untuk teks utama
          gray: "#475569",         // Gray untuk deskripsi/subtitle
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
