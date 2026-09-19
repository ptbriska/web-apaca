import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070a12] text-slate-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* GLOW DEKORATIF DI BACKGROUND */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* KOLOM 1: BRANDING & DESKRIPSI */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                APACA<span className="text-red-500">.</span>
              </span>
              <span className="block text-xs font-bold uppercase tracking-widest text-amber-400/90 mt-1">
                Integrated Assessment & Certification
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Peta akurat untuk potensi, karir, dan ekosistem sekolah Anda. Solusi terintegrasi assessment, sertifikasi, dan advokasi berkelanjutan.
            </p>
            
            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 bg-red-500/10 text-red-400 text-xs font-extrabold rounded-full border border-red-500/20 shadow-sm">
                Asesmen Tepat, Sertifikasi Tepat
              </span>
            </div>
          </div>

          {/* KOLOM 2: LAYANAN UTAMA */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-3">
              Layanan Utama
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/produk-layanan/assessment" className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5">
                  Assessment & Profiling Diagnostik
                </Link>
              </li>
              <li>
                <Link href="/produk-layanan/certification" className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5">
                  Sertifikasi Resmi HIMPSI & BNSP
                </Link>
              </li>
              <li>
                <Link href="/produk-layanan/advocacy" className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5">
                  Advocacy & Coaching Karir
                </Link>
              </li>
              <li>
                <Link href="/produk-layanan/audit" className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5">
                  Audit Ekosistem Sekolah (Soon)
                </Link>
              </li>
              <li>
                <Link href="/paket-bundling" className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5">
                  Paket Bundling B2C & B2B
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: KONTAK CS & OPERASIONAL */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-red-500 pl-3">
              Kontak & Layanan
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Hotline / WA CS:</span>
                  <a href="https://wa.me/6282268118842" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-amber-400 transition-colors">
                    082268118842
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Email Resmi:</span>
                  <a href="mailto:admin@briska.co.id" className="font-bold text-white hover:text-amber-400 transition-colors">
                    admin@briska.co.id
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Waktu Operasional:</span>
                  <span className="text-xs text-slate-300 font-medium">Senin - Jumat | 08.00 - 16.00 WITA</span>
                </div>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: ALAMAT MAKASSAR */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-3">
              Alamat Operasional
            </h3>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs text-slate-300 leading-relaxed">
                Jalan Racing Center, Perum. Mustika Mulia Blok B5, No.8, Panakukkang, Makassar, Sulawesi Selatan.
              </span>
            </div>
            
            <div className="pt-2">
              <a 
                href="https://instagram.com/apacaconsulting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-sweep inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 hover:border-amber-400/50 transition-all shadow-md"
              >
                <span>📸</span> Follow @apacaconsulting
              </a>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM / COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 APACA Consulting. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 font-medium">
            <Link href="/tentang-kami" className="hover:text-amber-400 transition-colors">Etika Profesional</Link>
            <Link href="/kontak" className="hover:text-amber-400 transition-colors">Kerjasama B2B</Link>
            <a href="https://pats.apacaconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Portal PATS</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
