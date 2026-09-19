"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/shared/Card';

// Impor data paket bundling (Pastikan data json sudah disave sebelumnya)
import bundlingData from '@/data/bundling.json';

export default function PaketBundlingPage() {
  const [activeTab, setActiveTab] = useState<'B2C' | 'B2B'>('B2C');

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-white font-sans selection:bg-amber-400 selection:text-slate-950">
      <Header />

      <main className="flex-grow bg-[#0b0f19]">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#0b0f19] via-[#0f172a] to-[#0b0f19] py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-amber-400/30">
              Integrasi PATS + Advocacy
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Pilih <span className="text-amber-400">Paket Bundling</span> Anda
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Daripada membeli eceran, kami merancang paket bundling terintegrasi yang lebih hemat dan solutif untuk siswa, orang tua, dan institusi.
            </p>

            {/* Toggle Tabs (B2C / B2B) */}
            <div className="inline-flex bg-[#0f172a] p-1.5 rounded-xl border border-white/10 shadow-xl">
              <button
                onClick={() => setActiveTab('B2C')}
                className={`px-6 py-2.5 rounded-lg text-sm transition-all ${
                  activeTab === 'B2C' 
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 font-black' 
                    : 'text-slate-400 hover:text-white font-bold'
                }`}
              >
                Ritel / B2C (Individu)
              </button>
              <button
                onClick={() => setActiveTab('B2B')}
                className={`px-6 py-2.5 rounded-lg text-sm transition-all ${
                  activeTab === 'B2B' 
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 font-black' 
                    : 'text-slate-400 hover:text-white font-bold'
                }`}
              >
                Institusi / B2B (Massal)
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: TAMPILAN KARTU PAKET BUNDLING */}
        <section className="py-16 bg-[#0b0f19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Tampilan Tab Ritel (B2C) */}
            {activeTab === 'B2C' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-white">Paket Hemat Siswa & Orang Tua</h2>
                  <p className="text-slate-400 text-sm mt-2">Dapatkan layanan menyeluruh dengan harga yang lebih efisien.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bundlingData.b2c.map((paket, idx) => (
                    <Card
                      key={idx}
                      type="pricing"
                      title={paket.nama}
                      description={`Target: ${paket.target}`}
                      badge={paket.badge}
                      isPopular={paket.isPopular}
                      price={paket.hargaBundling}
                      features={paket.komposisi}
                      ctaHref={`https://wa.me/6282268118842?text=Halo%20Admin%20APACA,%20saya%20tertarik%20dengan%20Paket%20${paket.kode}%20(${paket.nama})`}
                    />
                  ))}
                </div>

                {/* Catatan Skema Khusus B2C */}
                <div className="mt-16 bg-[#0f172a]/90 p-8 rounded-2xl border border-white/10 shadow-2xl">
                  <h3 className="text-lg font-black text-amber-400 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Catatan Skema Khusus
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
                    <div className="bg-[#1e293b]/60 p-5 rounded-xl border border-white/10">
                      <strong className="block text-amber-300 font-bold mb-2">BND-05 (Paket Kelompok/Tim Leader)</strong>
                      <p className="text-slate-300">Rumus Harga: (Jumlah Siswa × Rp350.000) + Rp250.000 (Maksimal 10 orang per sesi ADV-5).</p>
                      <ul className="mt-3 space-y-1 text-slate-400 text-xs">
                        <li>• 3 Siswa: Rp1.300.000 (Normal Rp1.700.000)</li>
                        <li>• 5 Siswa: Rp2.000.000 (Normal Rp2.600.000)</li>
                        <li>• 7 Siswa: Rp2.700.000 (Normal Rp3.500.000)</li>
                      </ul>
                    </div>
                    <div className="bg-[#1e293b]/60 p-5 rounded-xl border border-white/10">
                      <strong className="block text-amber-300 font-bold mb-2">BND-07 (Kesiapan Dunia Kerja)</strong>
                      <p className="text-slate-300">Opsi Ritel / Individu: Rp449.000 / orang.</p>
                      <p className="mt-2 text-slate-300">Opsi Massal / B2B (Min. 20 Peserta): Rp225.000 – Rp275.000 / peserta (Termasuk Webinar Career Preparation Massal).</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tampilan Tab Institusi (B2B) */}
            {activeTab === 'B2B' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-white">Skema B2B / Institusi (Penawaran Massal)</h2>
                  <p className="text-slate-400 text-sm mt-2">Layanan asesmen massal khusus institusi dengan kuota minimal 30 peserta.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bundlingData.b2b.map((paket, idx) => (
                    <Card
                      key={idx}
                      type="pricing"
                      title={paket.nama}
                      description={`Target: ${paket.target}`}
                      badge={paket.badge}
                      isPopular={paket.isPopular}
                      price={paket.harga}
                      period="peserta"
                      features={paket.komposisi}
                      ctaText="Minta Proposal B2B"
                      ctaHref={`https://wa.me/6282268118842?text=Halo%20Admin%20APACA,%20kami%20dari%20Institusi%20ingin%20meminta%20proposal%20untuk%20Paket%20${paket.kode}`}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
