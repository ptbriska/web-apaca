import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Impor data draf teknis terbaru
import aboutData from '@/data/about.json';

export default function AboutPage() {
  const { profil, filosofi, journey, usp, visiMisi } = aboutData;

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-white font-sans selection:bg-amber-400 selection:text-slate-950">
      <Header />

      <main className="flex-grow bg-[#0b0f19]">
        
        {/* HERO SECTION ABOUT */}
        <section className="bg-gradient-to-b from-[#0b0f19] via-[#0f172a] to-[#0b0f19] py-16 sm:py-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-amber-400/30">
              Tentang APACA Consulting
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              {profil.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {profil.desc}
            </p>
          </div>
        </section>

        {/* SECTION 1: FILOSOFI A-P-A-C-A */}
        <section className="py-20 bg-[#0b0f19] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-white mb-4">{filosofi.title}</h2>
              <p className="text-slate-400 text-sm sm:text-base">{filosofi.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {filosofi.items.map((item, idx) => (
                <div key={idx} className="bg-[#0f172a]/90 rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all flex flex-col justify-between group shadow-xl">
                  <div>
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white font-extrabold text-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform border border-red-500/30">
                      {item.letter}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{item.word}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: KONSEP APACA JOURNEY */}
        <section className="py-20 bg-[#0b0f19] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">Solusi Menyeluruh</span>
              <h2 className="text-3xl font-black text-white mb-4">{journey.title}</h2>
              <p className="text-slate-400 text-sm sm:text-base">{journey.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journey.steps.map((stepItem, idx) => (
                <div key={idx} className="bg-[#0f172a]/90 rounded-2xl p-8 border border-white/10 shadow-xl relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                        {stepItem.step}
                      </span>
                      <span className="text-xl font-black text-amber-400 tracking-wider">
                        [{stepItem.action}]
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{stepItem.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{stepItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: UNIQUE SELLING PROPOSITION (USP) */}
        <section className="py-20 bg-[#0b0f19] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-white mb-4">{usp.title}</h2>
              <p className="text-slate-400 text-sm sm:text-base">{usp.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {usp.items.map((item, idx) => (
                <div key={idx} className="bg-[#0f172a]/90 p-8 rounded-2xl border border-white/10 flex items-start gap-5 shadow-xl">
                  <span className="w-10 h-10 rounded-full bg-amber-400/10 text-amber-400 font-extrabold flex items-center justify-center flex-shrink-0 mt-1 border border-amber-400/30">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: VISI & MISI */}
        <section className="py-20 bg-[#0b0f19] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Visi */}
              <div className="bg-[#0f172a] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">Visi Kami</span>
                <h3 className="text-2xl font-black text-white mb-4">Transformasi Potensi Pendidikan</h3>
                <p className="text-slate-300 leading-relaxed italic">
                  "{visiMisi.visi}"
                </p>
              </div>

              {/* Misi */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Misi Kami</span>
                <h3 className="text-2xl font-black text-white mb-6">4 Pilar Komitmen Layanan</h3>
                <div className="space-y-3">
                  {visiMisi.misi.map((misi, idx) => (
                    <div key={idx} className="bg-[#0f172a]/90 p-4 rounded-xl border border-white/10 flex items-start gap-3 shadow-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0 mt-2"></span>
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
