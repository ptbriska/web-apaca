"use client";

import React, { useState, useEffect } from 'react';

export default function LeadMagnetPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cek apakah pengunjung sudah pernah menutup popup di sesi ini
    const isDismissed = sessionStorage.getItem('apaca_popup_dismissed');

    if (!isDismissed) {
      // Tampilkan popup setelah 5 detik membaca artikel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Simpan status tutup di sessionStorage
    sessionStorage.setItem('apaca_popup_dismissed', 'true');
  };

  const handleClaimPromo = () => {
    const message = encodeURIComponent(
      "Halo Admin APACA, saya berminat klaim Voucher Konsultasi Bedah Rapor PATS / Panduan Karir Gratis setelah membaca artikel di website APACA."
    );
    window.open(`https://wa.me/6282268118842?text=${message}`, '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* BOX POPUP */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* TOMBOL CLOSE (X) */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors font-bold text-sm"
          aria-label="Tutup Popup"
        >
          ✕
        </button>

        {/* BANNER HEADER */}
        <div className="bg-gradient-to-r from-apaca-redDark via-apaca-redPrimary to-apaca-redBright p-6 sm:p-8 text-white relative">
          <span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full mb-3 shadow">
            🎁 Promo Khusus Pembaca
          </span>
          <h3 className="text-xl sm:text-2xl font-black leading-snug">
            Masih Bingung Menentukan Jurusan atau Potensi Anak?
          </h3>
          <p className="text-xs text-slate-100 mt-2 opacity-90 leading-relaxed">
            Dapatkan Voucher Diskon Khusus Sesi Konsultasi Bedah Rapor PATS bersama Tim Psikolog APACA!
          </p>
        </div>

        {/* BODY POPUP */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
              <span className="text-apaca-redPrimary font-bold">✓</span>
              <span>Pemetaan Potensi Akademik & Gaya Belajar</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
              <span className="text-apaca-redPrimary font-bold">✓</span>
              <span>Rekomendasi Karir & Penjurusan Berbasis Data PATS</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
              <span className="text-apaca-redPrimary font-bold">✓</span>
              <span>Sesi 1-on-1 Langsung Bersama Konsultan Ber-SIPP</span>
            </div>
          </div>

          <button
            onClick={handleClaimPromo}
            className="w-full py-3.5 px-4 bg-apaca-gradient hover:bg-apaca-gradient-hover text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            💬 Klaim Diskon via WhatsApp CS
          </button>

          <p className="text-center text-[10px] text-slate-400">
            Penawaran terbatas untuk 20 pendaftar pertama minggu ini.
          </p>
        </div>

      </div>
    </div>
  );
}
