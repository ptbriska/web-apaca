import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/shared/Button';

// Impor materi data dari JSON
import homeData from '@/data/home.json';

export default function HomePage() {
  const { hero, journey, credibility, testimonials } = homeData;

  // Penanganan aman pembagian judul untuk efek warna gradient
  const titleText = hero?.title || "Peta Akurat untuk Potensi, Karir, dan Ekosistem Sekolah Anda.";
  const titleParts = titleText.includes("Potensi, Karir") 
    ? titleText.split("Potensi, Karir") 
    : [titleText, ""];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <Header />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION DENGAN ANIMATED BACKGROUND & GLOW */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-animated-hero overflow-hidden border-b border-white/10">
          
          {/* AMBIENT GLOWING BLOBS */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none animate-blob" />
          <div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none animate-blob" 
            style={{ animationDelay: '3s' }} 
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* BADGE TAGLINE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-300">
                Integrated Assessment & Certification
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              {titleParts[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Potensi, Karir
              </span>
              {titleParts[1]}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
              {hero.subtitle}
            </p>

            {/* CTA BUTTONS DENGAN EFEK SWEEP KILATAN */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              
              {/* Tombol Utama */}
              <Button 
                href="/paket-bundling" 
                className="btn-sweep w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 text-center border-none"
              >
                {hero.ctaPrimary || "Eksplorasi Paket Kami →"}
              </Button>

              {/* Tombol Portal PATS */}
              <Button 
                href={hero.patsUrl || "https://pats.apacaconsulting.com"} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sweep w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-extrabold text-base border border-red-500/50 backdrop-blur-md shadow-lg shadow-red-600/20 hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <span>🔑</span> {hero.ctaSecondary || "Login Portal PATS"}
              </Button>

            </div>

          </div>
        </section>

        {/* 2. THE APACA JOURNEY (INFOGRAFIS ALUR LAYANAN) */}
        <section className="py-24 bg-[#090d16] relative border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                {journey.title}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                {journey.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journey.steps.map((item, idx) => (
                <div 
                  key={idx} 
                  className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="text-6xl font-black text-white/10 mb-6 group-hover:text-amber-400/30 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-extrabold text-amber-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. KREDIBILITAS & OTORITAS (ANGKA & MITRA) */}
        <section className="py-24 bg-[#0b0f19] relative border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                {credibility.title}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                {credibility.subtitle}
              </p>
            </div>

            {/* Grid Angka Pencapaian */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
              {credibility.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10">
                  <span className="block text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-300">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Afiliasi Mitra */}
            <div className="text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400/80 block mb-8">
                Terafiliasi & Berstandar Resmi
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {credibility.partners.map((partner, idx) => (
                  <div 
                    key={idx} 
                    className="px-8 py-4 glass-card rounded-xl font-extrabold text-slate-200 border border-white/10 hover:border-amber-400/50 hover:text-amber-300 transition-all shadow-md"
                  >
                    {partner.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. TESTIMONI */}
        <section className="py-24 bg-[#090d16] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                Apa Kata Klien Kami?
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Kepercayaan dari siswa, orang tua, dan institusi sekolah partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-amber-400/30 transition-all"
                >
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-extrabold text-white text-sm">
                      {item.name}
                    </h4>
                    <span className="text-xs text-amber-400 font-semibold">
                      {item.role}
                    </span>
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
