import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Impor data draf teknis terbaru
import aboutData from '@/data/about.json';

export default function AboutPage() {
  const { profil, filosofi, journey, usp, visiMisi } = aboutData;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION ABOUT */}
        <section className="bg-gradient-to-b from-white via-apaca-redLight/30 to-slate-50 py-16 sm:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-apaca-redLight text-apaca-redDark text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-apaca-redPrimary/20">
              Tentang APACA Consulting
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {profil.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {profil.desc}
            </p>
          </div>
        </section>

        {/* SECTION 1: FILOSOFI A-P-A-C-A */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{filosofi.title}</h2>
              <p className="text-slate-600">{filosofi.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {filosofi.items.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-apaca-redPrimary/40 transition-all flex flex-col justify-between group">
                  <div>
                    <span className="w-12 h-12 rounded-xl bg-apaca-gradient text-white font-extrabold text-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                      {item.letter}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{item.word}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: KONSEP APACA JOURNEY (KENALI -> PAHAMI -> BUKTIKAN) */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-apaca-redPrimary block mb-2">Solusi Menyeluruh</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{journey.title}</h2>
              <p className="text-slate-600">{journey.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journey.steps.map((stepItem, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-apaca-redPrimary bg-apaca-redLight px-3 py-1 rounded-full">
                        {stepItem.step}
                      </span>
                      <span className="text-xl font-black text-slate-800 tracking-wider">
                        [{stepItem.action}]
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{stepItem.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{stepItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: UNIQUE SELLING PROPOSITION (USP) */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{usp.title}</h2>
              <p className="text-slate-600">{usp.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {usp.items.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-start gap-5">
                  <span className="w-10 h-10 rounded-full bg-apaca-redLight text-apaca-redDark font-extrabold flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: VISI & MISI */}
        <section className="py-20 bg-apaca-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Visi */}
              <div className="bg-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-700">
                <span className="text-xs font-bold uppercase tracking-widest text-apaca-redBright block mb-2">Visi Kami</span>
                <h3 className="text-2xl font-bold text-white mb-4">Transformasi Potensi Pendidikan</h3>
                <p className="text-slate-300 leading-relaxed italic">
                  "{visiMisi.visi}"
                </p>
              </div>

              {/* Misi */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-apaca-redBright block">Misi Kami</span>
                <h3 className="text-2xl font-bold text-white mb-6">4 Pilar Komitmen Layanan</h3>
                <div className="space-y-3">
                  {visiMisi.misi.map((misi, idx) => (
                    <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700/80 flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-apaca-redBright flex-shrink-0 mt-2"></span>
                      <p className="text-sm text-slate-300 leading-relaxed">{misi}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
