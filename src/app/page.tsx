import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';

// Impor materi data dari JSON
import homeData from '@/data/home.json';

export default function HomePage() {
  const { hero, journey, credibility, testimonials } = homeData;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-gradient-to-b from-white via-apaca-redLight/30 to-slate-50 py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-apaca-redLight text-apaca-redDark text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-apaca-redPrimary/20">
              Integrated Assessment & Certification
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
              {hero.title.split("Potensi")[0]} 
              <span className="text-apaca-gradient">Potensi, Karir</span> 
              {hero.title.split("Potensi, Karir")[1]}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/paket-bundling" variant="primary" size="lg">
                {hero.ctaPrimary}
              </Button>
              <Button 
                href={hero.patsUrl} 
                variant="outline" 
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </section>

        {/* 2. THE APACA JOURNEY (INFOGRAFIS ALUR LAYANAN) */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{journey.title}</h2>
              <p className="text-slate-600">{journey.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {journey.steps.map((item, idx) => (
                <div key={idx} className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-apaca-redPrimary/30 transition-all">
                  <span className="text-5xl font-black text-apaca-redPrimary/20 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. KREDIBILITAS & OTORITAS (ANGKA & MITRA) */}
        <section className="py-20 bg-apaca-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">{credibility.title}</h2>
              <p className="text-slate-400">{credibility.subtitle}</p>
            </div>

            {/* Grid Angka Pencapaian */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center border-b border-slate-800 pb-16">
              {credibility.stats.map((stat, idx) => (
                <div key={idx} className="p-4">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-apaca-redBright mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Afiliasi Mitra */}
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-6">
                Terafiliasi & Berstandar Resmi
              </span>
              <div className="flex items-center justify-center gap-8">
                {credibility.partners.map((partner, idx) => (
                  <div key={idx} className="px-6 py-3 bg-slate-800 rounded-xl border border-slate-700 font-bold text-slate-300">
                    {partner.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. TESTIMONI */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Apa Kata Klien Kami?</h2>
              <p className="text-slate-600">Kepercayaan dari siswa, orang tua, dan institusi sekolah partner.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item) => (
                <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                  <p className="text-sm text-slate-600 italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                    <span className="text-xs text-apaca-redDark font-medium">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
