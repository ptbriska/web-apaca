"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { allArticles, allCategories, allTags } from '@/data/articles';

export default function ArtikelPortalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const featuredArticle = allArticles[0];
  const secondaryArticles = allArticles.slice(1);

  const filteredArticles = allArticles.filter((art) => {
    const matchCategory = selectedCategory === 'Semua' || art.category === selectedCategory;
    const matchTag = selectedTag === null || art.tags.includes(selectedTag);
    return matchCategory && matchTag;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />

      <main className="flex-grow py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* NEWS PORTAL HEADER */}
          <div className="border-b-2 border-slate-900 pb-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-apaca-redPrimary block">
                APACA News & Media Center
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Jurnal & Edukasi Terkini
              </h1>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Update berita psikologi, pendidikan, dan navigasi karir berbasis data.
            </p>
          </div>

          {/* KATEGORI NAV BAR */}
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm mb-8 overflow-x-auto flex items-center gap-2">
            {allCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTag(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat && selectedTag === null
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* LAYOUT PORTAL BERITA (MAIN CONTENT + SIDEBAR) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* KOLOM UTAMA BERITA (8 COLUMNS) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* FEATURED HEADLINE NEWS */}
              {featuredArticle && (
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md group hover:shadow-xl transition-all">
                  <div className="relative h-72 sm:h-96 overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-apaca-redPrimary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      {featuredArticle.category}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-3">
                      <span>👤 {featuredArticle.author.name}</span>
                      <span>•</span>
                      <span>📅 {featuredArticle.date}</span>
                      <span>•</span>
                      <span>⏱️ {featuredArticle.readTime}</span>
                    </div>
                    <a href={`/artikel/${featuredArticle.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-apaca-redPrimary transition-colors leading-snug mb-3">
                        {featuredArticle.title}
                      </h2>
                    </a>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {featuredArticle.summary}
                    </p>
                    <a 
                      href={`/artikel/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-apaca-redPrimary hover:text-apaca-redDark uppercase tracking-wider"
                    >
                      Baca Selengkapnya →
                    </a>
                  </div>
                </div>
              )}

              {/* LIST ARTIKEL / FEED BERITA */}
              <div className="space-y-6 pt-4">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider border-l-4 border-apaca-redPrimary pl-3">
                  Artikel Terbaru
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((art) => (
                    <div key={art.slug} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                      <div>
                        <div className="relative h-44 rounded-lg overflow-hidden mb-4">
                          <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                          <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                            {art.category}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mb-2">{art.date} • {art.readTime}</div>
                        <a href={`/artikel/${art.slug}`}>
                          <h4 className="font-bold text-slate-900 text-base line-clamp-2 hover:text-apaca-redPrimary transition-colors mb-2">
                            {art.title}
                          </h4>
                        </a>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-4">{art.summary}</p>
                      </div>

                      <a 
                        href={`/artikel/${art.slug}`}
                        className="text-xs font-bold text-apaca-redPrimary hover:underline"
                      >
                        Baca Artikel →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* SIDEBAR PANEL TAG & INFO (4 COLUMNS) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* PANEL TAGS (TOPIC EXPLORER) */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>📌 Panel Tag Populer</span>
                  {selectedTag && (
                    <button 
                      onClick={() => setSelectedTag(null)}
                      className="text-[10px] font-bold text-apaca-redPrimary hover:underline"
                    >
                      Reset Filter
                    </button>
                  )}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedTag === tag
                          ? 'bg-apaca-redPrimary text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* BANNER KONSULTASI SIDEBAR */}
              <div className="bg-gradient-to-br from-slate-900 to-apaca-redDark text-white rounded-2xl p-6 shadow-md">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-2">
                  Layanan Asesmen
                </span>
                <h4 className="text-lg font-extrabold mb-2">Butuh Pemetaan Potensi Diri & Sekolah?</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Jadwalkan tes diagnostik PATS dan konsultasi bersama tim psikolog resmi APACA.
                </p>
                <a 
                  href="/kontak"
                  className="block text-center w-full py-3 bg-apaca-redPrimary hover:bg-apaca-redBright text-white text-xs font-bold rounded-xl shadow transition-colors"
                >
                  Hubungi Konsultan
                </a>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
