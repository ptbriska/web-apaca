import './globals.css';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
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
      <body className="bg-slate-100 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
