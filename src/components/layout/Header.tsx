"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Link Portal PATS Eksternal
  const PATS_PORTAL_URL = "https://pats.apacaconsulting.com"; 

  return (
    <>
      {/* 1. HEADER MELAYANG (FIXED) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19] border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo APACA */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-2xl font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  APACA<span className="text-amber-400">.</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-amber-400/10 text-amber-300 rounded-md border border-amber-400/20 hidden sm:inline-block">
                  Consulting
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors">
                Beranda
              </Link>
              <Link href="/tentang-kami" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors">
                Tentang Kami
              </Link>

              {/* Dropdown Produk & Layanan */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors py-2 focus:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Produk & Layanan</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Sub-menu Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-[#0f172a] rounded-2xl p-3 border border-slate-700/80 shadow-2xl shadow-black/80 mt-1 space-y-1 z-50">
                    <Link 
                      href="/produk-layanan/assessment" 
                      className="block px-4 py-3 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-white group-hover:text-amber-400">Assessment & Profiling</span>
                        <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-400/30">Diagnostik</span>
                      </div>
                      <span className="block text-xs text-slate-400 font-normal mt-0.5">Tes Diagnostik & Pemetaan Potensi</span>
                    </Link>

                    <Link 
                      href="/produk-layanan/certification" 
                      className="block px-4 py-3 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-white group-hover:text-amber-400">Certification</span>
                        <span className="text-[10px] bg-red-500/20 text-red-400 font-bold px-2 py-0.5 rounded-full border border-red-500/30">Resmi</span>
                      </div>
                      <span className="block text-xs text-slate-400 font-normal mt-0.5">Sertifikasi Resmi HIMPSI & BNSP</span>
                    </Link>

                    <Link 
                      href="/produk-layanan/advocacy" 
                      className="block px-4 py-3 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 transition-all group"
                    >
                      <span className="block text-sm font-extrabold text-white group-hover:text-amber-400">Advocacy & Konsultasi</span>
                      <span className="block text-xs text-slate-400 font-normal mt-0.5">Coaching & Pendampingan Karir</span>
                    </Link>

                    <Link 
                      href="/produk-layanan/audit" 
                      className="block px-4 py-3 rounded-xl hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-slate-300 group-hover:text-amber-400">Audit Ekosistem</span>
                        <span className="text-[10px] bg-slate-800 text-slate-400 border border-slate-700 font-bold px-2 py-0.5 rounded-full">Soon</span>
                      </div>
                      <span className="block text-xs text-slate-400 font-normal mt-0.5">Pemetaan Ekosistem Sekolah</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/paket-bundling" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors">
                Paket Bundling
              </Link>
              <Link href="/artikel" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors">
                Artikel & Edukasi
              </Link>
              <Link href="/kontak" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors">
                Kontak
              </Link>
            </nav>

            {/* Tombol CTA Login Portal PATS */}
            <div className="hidden lg:flex items-center">
              <a 
                href={PATS_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sweep px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs tracking-wide shadow-lg shadow-red-600/25 border border-red-500/50 transition-all flex items-center gap-2"
              >
                <span>🔑</span> Login Portal PATS
              </a>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0f172a] border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <Link href="/" className="block py-2 text-sm font-bold text-slate-200 hover:text-amber-400">Beranda</Link>
            <Link href="/tentang-kami" className="block py-2 text-sm font-bold text-slate-200 hover:text-amber-400">Tentang Kami</Link>
            
            <div className="py-2 border-y border-slate-800 my-2 space-y-1">
              <span className="block text-xs font-extrabold text-amber-400 uppercase tracking-wider py-1">Produk & Layanan</span>
              <Link href="/produk-layanan/assessment" className="block py-1.5 pl-3 text-xs text-slate-300 hover:text-amber-300 font-medium">• Assessment & Profiling</Link>
              <Link href="/produk-layanan/certification" className="block py-1.5 pl-3 text-xs text-slate-300 hover:text-amber-300 font-medium">• Certification (HIMPSI & BNSP)</Link>
              <Link href="/produk-layanan/advocacy" className="block py-1.5 pl-3 text-xs text-slate-300 hover:text-amber-300 font-medium">• Advocacy & Konsultasi</Link>
              <Link href="/produk-layanan/audit" className="block py-1.5 pl-3 text-xs text-slate-300 hover:text-amber-300 font-medium">• Audit Institusi (Soon)</Link>
            </div>

            <Link href="/paket-bundling" className="block py-2 text-sm font-bold text-slate-200 hover:text-amber-400">Paket Bundling</Link>
            <Link href="/artikel" className="block py-2 text-sm font-bold text-slate-200 hover:text-amber-400">Artikel & Edukasi</Link>
            <Link href="/kontak" className="block py-2 text-sm font-bold text-slate-200 hover:text-amber-400">Kontak</Link>

            <div className="pt-2">
              <a
                href={PATS_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sweep block w-full text-center py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/25 border border-red-500/50 transition-all"
              >
                🔑 Login Portal PATS
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. SPACER OTOMATIS: MENINGGALKAN RUANG KOSONG SEBESAR 112px AGAR KONTEN HALAMAN APAPUN TIDAK PERNAH TERHIMPIT */}
      <div className="h-28 w-full shrink-0" />
    </>
  );
};

export default Header;
