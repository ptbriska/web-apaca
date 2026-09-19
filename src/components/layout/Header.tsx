"use client";

import React, { useState } from 'react';
import Button from '../shared/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Link Portal PATS Eksternal (Ganti '#' dengan URL Portal PATS resmi Anda)
  const PATS_PORTAL_URL = "https://pats.apacaconsulting.com"; 

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo APACA */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-apaca-redDark">
                APACA<span className="text-apaca-redBright">.</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 bg-apaca-redLight text-apaca-redDark rounded border border-apaca-redPrimary/20 hidden sm:inline-block">
                Consulting
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-sm font-semibold text-slate-700 hover:text-apaca-redPrimary transition-colors">
              Beranda
            </a>
            <a href="/tentang-kami" className="text-sm font-semibold text-slate-700 hover:text-apaca-redPrimary transition-colors">
              Tentang Kami
            </a>

            {/* Dropdown Produk & Layanan */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-apaca-redPrimary transition-colors py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Produk & Layanan</span>
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sub-menu Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-3 mt-1 animate-in fade-in slide-in-from-top-2">
                  <a href="/produk-layanan/assessment" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-apaca-redLight hover:text-apaca-redDark font-medium transition-colors">
                    Assessment & Profiling
                    <span className="block text-xs text-slate-400 font-normal">Tes Diagnostik & Pemetaan</span>
                  </a>
                  <a href="/produk-layanan/certification" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-apaca-redLight hover:text-apaca-redDark font-medium transition-colors">
                    Certification
                    <span className="block text-xs text-slate-400 font-normal">Tes Resmi HIMPSI & BNSP</span>
                  </a>
                  <a href="/produk-layanan/advocacy" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-apaca-redLight hover:text-apaca-redDark font-medium transition-colors">
                    Advocacy
                    <span className="block text-xs text-slate-400 font-normal">Konsultasi & Coaching</span>
                  </a>
                  <a href="/produk-layanan/audit" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-apaca-redLight hover:text-apaca-redDark font-medium transition-colors">
                    <div className="flex items-center justify-between">
                      <span>Audit Institusi</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">Soon</span>
                    </div>
                    <span className="block text-xs text-slate-400 font-normal">Pemetaan Ekosistem Sekolah</span>
                  </a>
                </div>
              )}
            </div>

            <a href="/paket-bundling" className="text-sm font-semibold text-slate-700 hover:text-apaca-redPrimary transition-colors">
              Paket Bundling
            </a>
            <a href="/artikel" className="text-sm font-semibold text-slate-700 hover:text-apaca-redPrimary transition-colors">
              Artikel & Edukasi
            </a>
            <a href="/kontak" className="text-sm font-semibold text-slate-700 hover:text-apaca-redPrimary transition-colors">
              Kontak
            </a>
          </nav>

          {/* Tombol CTA Login Portal PATS */}
          <div className="hidden lg:flex items-center">
            <Button 
              href={PATS_PORTAL_URL} 
              variant="primary" 
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login Portal PATS
            </Button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-apaca-redPrimary hover:bg-slate-100 focus:outline-none"
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a href="/" className="block py-2 text-base font-semibold text-slate-800">Beranda</a>
          <a href="/tentang-kami" className="block py-2 text-base font-semibold text-slate-800">Tentang Kami</a>
          
          <div className="py-1 border-y border-slate-100 my-1">
            <span className="block text-xs font-bold text-apaca-redDark uppercase tracking-wider py-1">Produk & Layanan</span>
            <a href="/produk-layanan/assessment" className="block py-1.5 pl-4 text-sm text-slate-600">Assessment & Profiling</a>
            <a href="/produk-layanan/certification" className="block py-1.5 pl-4 text-sm text-slate-600">Certification (HIMPSI & BNSP)</a>
            <a href="/produk-layanan/advocacy" className="block py-1.5 pl-4 text-sm text-slate-600">Advocacy & Konsultasi</a>
            <a href="/produk-layanan/audit" className="block py-1.5 pl-4 text-sm text-slate-600">Audit Institusi (Coming Soon)</a>
          </div>

          <a href="/paket-bundling" className="block py-2 text-base font-semibold text-slate-800">Paket Bundling</a>
          <a href="/artikel" className="block py-2 text-base font-semibold text-slate-800">Artikel & Edukasi</a>
          <a href="/kontak" className="block py-2 text-base font-semibold text-slate-800">Kontak</a>

          <div className="pt-2">
            <Button 
              href={PATS_PORTAL_URL} 
              variant="primary" 
              fullWidth
              target="_blank"
              rel="noopener noreferrer"
            >
              Login Portal PATS
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
