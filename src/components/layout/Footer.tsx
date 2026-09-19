import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-apaca-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Kolom 1: Branding & Deskripsi */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                APACA<span className="text-apaca-redBright">.</span>
              </span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mt-1">
                Integrated Assessment & Certification
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Peta akurat untuk potensi, karir, dan ekosistem sekolah Anda. Solusi terintegrasi assessment, sertifikasi, dan advokasi berkelanjutan.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-slate-800 text-apaca-redBright text-xs font-semibold rounded-full border border-apaca-redPrimary/30">
                Tagline: Asesmen Tepat, Sertifikasi Tepat
              </span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Layanan Utama</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/produk-layanan/assessment" className="hover:text-apaca-redBright transition-colors">
                  Assessment & Profiling Diagnostik
                </a>
              </li>
              <li>
                <a href="/produk-layanan/certification" className="hover:text-apaca-redBright transition-colors">
                  Sertifikasi Resmi HIMPSI & BNSP
                </a>
              </li>
              <li>
                <a href="/produk-layanan/advocacy" className="hover:text-apaca-redBright transition-colors">
                  Advocacy & Coaching Karir
                </a>
              </li>
              <li>
                <a href="/produk-layanan/audit" className="hover:text-apaca-redBright transition-colors">
                  Audit Ekosistem Sekolah (Soon)
                </a>
              </li>
              <li>
                <a href="/paket-bundling" className="hover:text-apaca-redBright transition-colors">
                  Paket Bundling B2C & B2B
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak CS & Operasional */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Kontak & Layanan</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-apaca-redBright flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="block font-medium text-white">Hotline / WA CS:</span>
                  <a href="https://wa.me/6282268118842" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-apaca-redBright">
                    082268118842
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-apaca-redBright flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block font-medium text-white">Email Resmi:</span>
                  <a href="mailto:admin@briska.co.id" className="text-slate-300 hover:text-apaca-redBright">
                    admin@briska.co.id
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-apaca-redBright flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block font-medium text-white">Waktu Operasional:</span>
                  <span className="text-slate-400">Senin - Jumat | 08.00 - 16.00 WITA</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Alamat Makassar */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Alamat Operasional</h3>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <svg className="w-5 h-5 text-apaca-redBright flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                Jalan Racing Center, Perum. Mustika Mulia Blok B5, No.8, Panakukkang, Makassar, Sulawesi Selatan.
              </span>
            </div>
            <div className="pt-2">
              <a 
                href="https://instagram.com/apacaconsulting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-apaca-redBright bg-slate-800 px-3 py-2 rounded-lg transition-colors border border-slate-700"
              >
                <span>Follow Instagram @apacaconsulting</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 APACA Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/tentang-kami" className="hover:text-slate-400">Etika Profesional</a>
            <a href="/kontak" className="hover:text-slate-400">Kerjasama B2B</a>
            <a href="https://pats.apacaconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Portal PATS</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
