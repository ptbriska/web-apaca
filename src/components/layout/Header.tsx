import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO APACA */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-wider text-white">
              APACA<span className="text-amber-400">.</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
              Consulting
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Beranda
            </Link>
            <Link href="/tentang-kami" className="hover:text-amber-400 transition-colors">
              Tentang Kami
            </Link>

            {/* DROPDOWN PRODUK & LAYANAN */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-amber-400 transition-colors py-2">
                Produk & Layanan ▾
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 glass-card rounded-xl p-2 border border-white/15 shadow-2xl backdrop-blur-2xl">
                  <Link href="/produk-layanan/assessment" className="block px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-amber-400/10 hover:text-amber-300 transition-all">
                    Assessment & Profiling
                  </Link>
                  <Link href="/produk-layanan/certification" className="block px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-amber-400/10 hover:text-amber-300 transition-all">
                    Certification (BNSP & HIMPSI)
                  </Link>
                  <Link href="/produk-layanan/advocacy" className="block px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-amber-400/10 hover:text-amber-300 transition-all">
                    Advocacy & Konsultasi
                  </Link>
                  <Link href="/produk-layanan/audit" className="block px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-amber-400/10 hover:text-amber-300 transition-all">
                    Audit Ekosistem (Coming Soon)
                  </Link>
                </div>
              )}
            </div>

            <Link href="/paket-bundling" className="hover:text-amber-400 transition-colors">
              Paket Bundling
            </Link>
            <Link href="/artikel" className="hover:text-amber-400 transition-colors">
              Artikel & Edukasi
            </Link>
            <Link href="/kontak" className="hover:text-amber-400 transition-colors">
              Kontak
            </Link>
          </nav>

          {/* TOMBOL LOGIN PATS */}
          <div className="hidden md:flex items-center">
            <a
              href="https://pats.apacaconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs tracking-wide shadow-md shadow-red-600/20 border border-red-500/50 transition-all"
            >
              🔑 Login Portal PATS
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10 px-4 pt-4 pb-6 space-y-3 text-sm font-semibold">
          <Link href="/" className="block py-2 text-slate-200 hover:text-amber-400">Beranda</Link>
          <Link href="/tentang-kami" className="block py-2 text-slate-200 hover:text-amber-400">Tentang Kami</Link>
          <Link href="/produk-layanan/assessment" className="block py-2 pl-4 text-xs text-slate-400 hover:text-amber-400">• Assessment & Profiling</Link>
          <Link href="/produk-layanan/certification" className="block py-2 pl-4 text-xs text-slate-400 hover:text-amber-400">• Certification</Link>
          <Link href="/produk-layanan/advocacy" className="block py-2 pl-4 text-xs text-slate-400 hover:text-amber-400">• Advocacy</Link>
          <Link href="/paket-bundling" className="block py-2 text-slate-200 hover:text-amber-400">Paket Bundling</Link>
          <Link href="/artikel" className="block py-2 text-slate-200 hover:text-amber-400">Artikel & Edukasi</Link>
          <Link href="/kontak" className="block py-2 text-slate-200 hover:text-amber-400">Kontak</Link>
          <a
            href="https://pats.apacaconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 mt-4 rounded-lg bg-red-600 text-white font-bold"
          >
            🔑 Login Portal PATS
          </a>
        </div>
      )}
    </header>
  );
}
