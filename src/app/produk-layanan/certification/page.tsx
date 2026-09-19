"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Impor data sertifikasi
import certData from '@/data/certification.json';

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState<'HIMPSI' | 'BNSP'>('HIMPSI');
  const { himpsi, bnsp } = certData;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-white via-apaca-redLight/30 to-slate-50 py-16 sm:py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-apaca-redLight text-apaca-redDark text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-apaca-redPrimary/20">
              Pilar 3: Validasi Legal & Resmi
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Sertifikasi & <span className="text-apaca-gradient">Tes Resmi</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Validasi potensi dan kompetensi Anda dengan pengakuan formal yang diakui secara nasional di bawah naungan HIMPSI dan BNSP.
            </p>

            {/* Toggle Tab Switcher */}
            <div className="inline-flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 shadow-inner">
              <button
                onClick={() => setActiveTab('HIMPSI')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'HIMPSI' 
                    ? 'bg-white text-apaca-redDark shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Tes Psikologi Resmi (HIMPSI)
              </button>
              <button
                onClick={() => setActiveTab('BNSP')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'BNSP' 
                    ? 'bg-white text-apaca-redDark shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Sertifikasi Kompetensi (BNSP)
              </button>
            </div>
          </div>
        </section>

        {/* TAB 1: HIMPSI */}
        {activeTab === 'HIMPSI' && (
          <section className="py-16 bg-slate-50 animate-in fade-in duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Info Header HIMPSI */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-apaca-redLight text-apaca-redDark font-extrabold text-xs rounded uppercase border border-apaca-redPrimary/20">
                    Lisensi HIMPSI
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Surat Izin Praktik Psikologi (SIPP)</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{himpsi.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{himpsi.subtitle}</p>
                
                {/* Notice Penambahan Biaya */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                  <span className="text-lg">⚠️</span>
                  <p><strong>Rincian Biaya:</strong> {himpsi.feeNote}</p>
                </div>
              </div>

              {/* Grid Cards HIMPSI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {himpsi.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded">
                          {item.kode}
                        </span>
                        <span className="text-xl font-extrabold text-apaca-redDark">
                          {item.hargaEstimasi}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.nama}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.deskripsi}</p>
                      
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 text-xs text-slate-500 space-y-1">
                        <p><strong className="text-slate-700">Skema Biaya:</strong> {item.detailHarga}</p>
                        <p><strong className="text-slate-700">Output Resmi:</strong> {item.output}</p>
                      </div>
                    </div>

                    <a 
                      href={`https://wa.me/6282268118842?text=Halo%20Admin,%20saya%20ingin%20mendaftar%20${item.nama}%20(${item.kode})`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-center w-full py-3 bg-apaca-gradient text-white text-sm font-bold rounded-lg hover:bg-apaca-gradient-hover transition-colors shadow-sm"
                    >
                      Jadwalkan Tes HIMPSI
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* TAB 2: BNSP */}
        {activeTab === 'BNSP' && (
          <section className="py-16 bg-slate-50 animate-in fade-in duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Info Header BNSP */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded uppercase border border-amber-300">
                    Standar BNSP RI
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Uji Kompetensi Nasional</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{bnsp.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{bnsp.subtitle}</p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-blue-900 flex items-start gap-3">
                  <span className="text-lg">ℹ️</span>
                  <p><strong>Standar Pemerintah:</strong> {bnsp.standarPemerintahNote}</p>
                </div>
              </div>

              {/* Grid Cards BNSP */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {bnsp.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded inline-block mb-3">
                        {item.kode}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.skema}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.deskripsi}</p>
                      
                      <div className="mb-6 pt-4 border-t border-slate-100">
                        <span className="text-xs text-slate-400 block mb-1">Standar Rate BNSP:</span>
                        <span className="text-xl font-extrabold text-apaca-redDark">{item.hargaStandarBNSP}</span>
                      </div>
                    </div>

                    <a 
                      href={`https://wa.me/6282268118842?text=Halo%20Admin,%20kami%20tertarik%20dengan%20Sertifikasi%20BNSP%20${item.skema}%20(${item.kode})`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-center w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
                    >
                      Daftar Uji Kompetensi
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
