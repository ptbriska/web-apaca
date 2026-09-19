import '@/styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'APACA Consulting | Asesmen Tepat, Sertifikasi Tepat',
  description: 'Pusat Asesmen, Profiling, Sertifikasi, dan Konsultasi Pendidikan Terintegrasi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* CDN Tailwind agar tampilan langsung cantik saat di-preview */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    apaca: {
                      redPrimary: '#991B1B',
                      redDark: '#7F1D1D',
                      redBright: '#DC2626',
                      redLight: '#FEE2E2',
                      dark: '#0F172A',
                    }
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className="bg-slate-100 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
