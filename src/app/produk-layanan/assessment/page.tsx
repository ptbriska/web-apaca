"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Impor data asesmen
import assessmentData from '@/data/assessment.json';

export default function AssessmentPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Anak & Tumbuh Kembang', 'Siswa & Akademik', 'Dewasa & Karir', 'Umum & Kepribadian', 'Ekosistem Pendidikan'];

  const filteredTests = activeCategory === 'Semua' 
    ? assessmentData 
    : assessmentData.filter(test => test.kategori === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-white via-apaca-redLight/30 to-slate-50 py-16 sm:py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-apaca-redLight text-apaca-redDark text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-apaca-redPrimary/20">
              Pilar 1: Sistem PATS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Katalog <span className="text-apaca-gradient">Assessment & Profiling</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Tes diagnostik dan pemetaan mandiri berbasis sistem PATS. Temukan asesmen yang tepat untuk mendiagnosis potensi, bakat, dan kompetensi secara objektif.
            </p>
          </div>
        </section>

        {/* BANNER EDUKASI KLINIS VS PRACTICE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-apaca-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-apaca-redPrimary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-apaca-redBright" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="text-left text-white flex-1">
              <h3 className="text-lg font-bold text-apaca-redBright mb-2">Informasi Penting: Sifat Tes PATS</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Harap diperhatikan bahwa tes dalam halaman ini ada yang bersifat <strong>diagnostik klinis</strong> dan ada yang bersifat <strong>practice (pemetaan potensi dasar)</strong> melalui sistem PATS. 
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mt-2">
                Mohon tanyakan ketersediaan tes resmi diagnostik kepada tim Kontak kami sesuai alokasi waktu konsultasi dari Psikolog. Jika Psikolog belum tersedia, maka tes yang berjalan bersifat <em>practice</em>.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="https://wa.me/6282268118842?text=Halo%20Admin,%20saya%20mau%20bertanya%20jadwal%20Psikolog%20untuk%20Tes%20Diagnostik" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-apaca-redPrimary hover:bg-apaca-redBright text-white text-sm font-bold rounded-lg transition-colors shadow-md">
                Tanya Ketersediaan Psikolog
              </a>
            </div>
          </div>
        </section>

        {/* KATALOG TES & FILTER */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Kategori */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat 
                      ? 'bg-apaca-redPrimary text-white shadow-md' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-apaca-redPrimary/50 hover:text-apaca-redDark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid Tabel Kartu Tes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {filteredTests.map((test, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-apaca-redPrimary/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-bold text-apaca-redDark bg-apaca-redLight px-2.5 py-1 rounded border border-apaca-redPrimary/20">
                        {test.kode}
                      </span>
                      <span className="text-lg font-black text-slate-800">
                        {test.harga}
                      </span>
                    </div>
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">{test.kategori}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{test.nama}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{test.tujuan}</p>
                  </div>
                  <a 
                    href={`https://pats.apacaconsulting.com`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center w-full py-2.5 rounded-lg border-2 border-slate-100 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  >
                    Mulai Tes di PATS
                  </a>
                </div>
              ))}
            </div>
            
            {/* Opsi Bundling Bawah */}
            <div className="mt-16 text-center">
              <p className="text-slate-500 mb-4">Ingin harga yang lebih hemat dan sudah termasuk sesi konsultasi?</p>
              <a href="/paket-bundling" className="inline-flex items-center gap-2 text-apaca-redPrimary font-bold hover:text-apaca-redDark transition-colors">
                Lihat Opsi Paket Bundling
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
