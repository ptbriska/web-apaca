/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Memaksa Next.js menghasilkan HTML/CSS statis untuk GitHub Pages
  images: {
    unoptimized: true, // Diperlukan agar gambar dari public/ bisa dibaca di GitHub Pages
  },
};

module.exports = nextConfig;
