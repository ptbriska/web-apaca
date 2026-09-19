import './globals.css';
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
    <html lang="id" className="scroll-smooth bg-[#0b0f19]">
      <body className="bg-[#0b0f19] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
