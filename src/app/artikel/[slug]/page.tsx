"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadMagnetPopup from '@/components/shared/LeadMagnetPopup';
import { allArticles } from '@/data/articles';

export default function DetailArtikelBerita({ params }: { params: { slug: string } }) {
  const article = allArticles.find((art) => art.slug === params.slug) || allArticles[0];

  // State Interaktif: Love / Like
  const [likes, setLikes] = useState<number>(42);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  // State Interaktif: Komentar
  const [comments, setComments] = useState<Array<{ name: string; date: string; text: string }>>([
    { name: "Rina Wijaya", date: "19 Sept 2026", text: "Artikelnya sangat membuka wawasan! Anak saya sempat bingung memilih antara Teknik atau Kedokteran." },
    { name: "Pak Hendra", date: "19 Sept 2026", text: "Terima kasih infonya APACA, tes PATS sangat membantu pemetaan minat siswa di sekolah kami." }
  ]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  // State Share Copy Toast
  const [copied, setCopied] = useState(false);

  // Toggle Like Handler
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  // Submit Comment Handler
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentText) return;

    const newComment = {
      name: commentName,
      date: "Baru saja",
      text: commentText
    };

    setComments([newComment, ...comments]);
    setCommentName("");
    setCommentText("");
  };

  // Share Handlers
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Baca artikel "${article.title}" di APACA Consulting:`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />

      <main className="flex-grow py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER NEWS LAYOUT */}
          <article className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            
            <div className="p-6 sm:p-10 border-b border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-apaca-redPrimary text-white font-black text-[10px] uppercase tracking-wider rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400">• {article.readTime}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-6">
                {article.title}
              </h1>

              {/* AUTHOR & DATE */}
              <div className="flex items-center gap-4 py-4 border-y border-slate-100">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-apaca-redPrimary"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{article.author.name}</h4>
                  <p className="text-xs text-slate-400">{article.author.role} • {article.date}</p>
                </div>
              </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className="relative">
              <img src={article.image} alt={article.title} className="w-full h-80 sm:h-[450px] object-cover" />
              {article.caption && (
                <p className="p-3 bg-slate-900/90 text-white text-xs text-center italic">
                  📷 {article.caption}
                </p>
              )}
            </div>

            {/* BODY KONTEN BERITA */}
            <div className="p-6 sm:p-10 text-slate-700 leading-relaxed text-base border-b border-slate-100">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }} 
                className="space-y-4"
              />

              {/* PANEL TAGS DI DALAM ARTIKEL */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tags:</span>
                {article.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BAR INTERAKTIF: LOVE & SHARE */}
            <div className="p-6 sm:px-10 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200">
              
              {/* TOMBOL LOVE / LIKE */}
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs transition-all shadow-sm ${
                  isLiked 
                    ? 'bg-rose-600 text-white scale-105' 
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{isLiked ? '❤️ Menyukai' : '🤍 Sukai Artikel'}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-900/10 text-[11px]">{likes}</span>
              </button>

              {/* TOMBOL SHARE */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Bagikan:</span>
                
                {/* WA Share */}
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(`${shareText}${currentUrl}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-emerald-500 text-white rounded-full hover:opacity-90 text-xs font-bold"
                  title="Bagikan ke WhatsApp"
                >
                  💬
                </a>

                {/* Twitter / X */}
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 text-white rounded-full hover:opacity-90 text-xs font-bold"
                  title="Bagikan ke X/Twitter"
                >
                  𝕏
                </a>

                {/* FB Share */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-blue-600 text-white rounded-full hover:opacity-90 text-xs font-bold"
                  title="Bagikan ke Facebook"
                >
                  f
                </a>

                {/* Copy Link */}
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-2 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded-full hover:bg-slate-100"
                >
                  {copied ? '✓ Tersalin!' : '🔗 Salin Link'}
                </button>
              </div>

            </div>

            {/* SEKSI KOMENTAR */}
            <div className="p-6 sm:p-10 bg-white">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                💬 Komentar Pembaca <span className="text-xs font-bold bg-slate-100 px-2.5 py-1 rounded-full text-slate-600">{comments.length}</span>
              </h3>

              {/* Form Tambah Komentar */}
              <form onSubmit={handleCommentSubmit} className="mb-10 space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tulis Komentar Anda:</h4>
                <input 
                  type="text" 
                  required
                  placeholder="Nama Lengkap Anda" 
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary bg-white"
                />
                <textarea 
                  rows={3} 
                  required
                  placeholder="Tuliskan pendapat atau pertanyaan Anda seputar artikel ini..." 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary bg-white"
                ></textarea>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-apaca-redPrimary transition-colors shadow-sm"
                >
                  Kirim Komentar
                </button>
              </form>

              {/* Daftar Komentar */}
              <div className="space-y-4">
                {comments.map((cmt, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xs text-slate-900">{cmt.name}</span>
                      <span className="text-[10px] text-slate-400">{cmt.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{cmt.text}</p>
                  </div>
                ))}
              </div>

            </div>

          </article>

        </div>
      </main>

      <Footer />

      {/* POPUP PROMO OTOMATIS */}
      <LeadMagnetPopup />
    </div>
  );
}
