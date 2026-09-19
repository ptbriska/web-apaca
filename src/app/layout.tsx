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
      <body>{children}</body>
    </html>
  );
}
