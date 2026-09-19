"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MapsSnippet from '@/components/shared/MapsSnippet';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    namaInstansi: '',
    jabatan: '',
    email: '',
    whatsapp: '',
    pesan: ''
  });

  // Tautan Google Drive Format Proposal B2B
  const GDRIVE_PROPOSAL_URL = "https://drive.google.com/drive/folders/APACA_B2B_PROPOSAL_FORMAT";

  const handleSubmitB2B = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.namaLengkap || !formData.namaInstansi || !formData.whatsapp) {
      alert('Mohon lengkapi Nama, Nama Instansi, dan Nomor WhatsApp Anda.');
      return;
    }

    const message = `Halo Admin APACA,%0A%0ASaya ingin mengajukan Kemitraan / Proposal Pengadaan B2B:%0A- Nama: ${encodeURIComponent(formData.namaLengkap)}%0A- Instansi/Sekolah: ${encodeURIComponent(formData.namaInstansi)}%0A- Jabatan: ${encodeURIComponent(formData.jabatan)}%0A- Email: ${encodeURIComponent(formData.email)}%0A- WA: ${encodeURIComponent(formData.whatsapp)}%0A- Pesan/Kebutuhan: ${encodeURIComponent(formData.pesan)}%0A%0AMohon bantuan tindak lanjutnya. Terima kasih!`;

    window.open(`https://wa.me/6282268118842?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-white via-apaca-redLight/30 to-slate-50 py-16 sm:py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-apaca-redLight text-apaca-redDark text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-apaca-redPrimary/20">
              Hubungi Kami
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Pusat Layanan & <span className="text-apaca-gradient">Kemitraan B2B</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tim APACA Consulting siap membantu kebutuhan konsultasi individu, pengadaan tes massal sekolah/yayasan, serta program pengembangan SDM perusahaan.
            </p>
          </div>
        </section>

        {/* INFORMASI KONTAK & FORMULIR KEMITRAAN B2B */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* KOLOM KIRI: INFO KONTAK & OPERASIONAL */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-apaca-redPrimary block mb-2">
                    Saluran Komunikasi
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Informasi Kontak Official</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Silakan hubungi kami melalui saluran berikut untuk konsultasi cepat B2C maupun pengadaan B2B.
                  </p>
                </div>

                {/* LIST KONTAK */}
                <div className="space-y-4">
                  
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/6282268118842" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                      💬
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Hotline / WhatsApp CS (B2C & B2B)</span>
                      <span className="text-base font-extrabold text-slate-900">082268118842</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:admin@briska.co.id" 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-apaca-dark text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                      ✉️
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Email Resmi</span>
                      <span className="text-base font-bold text-slate-900">admin@briska.co.id</span>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/apacaconsulting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-rose-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                      📷
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">Instagram Official</span>
                      <span className="text-base font-bold text-slate-900">@apacaconsulting</span>
                    </div>
                  </a>

                </div>

                {/* WAKTU OPERASIONAL & ALAMAT */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Waktu Operasional</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span>🕒</span>
                    <span><strong>Senin – Jumat:</strong> 08.00 – 16.00 WITA</span>
                  </div>
                  
                  <hr className="border-slate-200 my-2" />
                  
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pt-1">Alamat Operasional</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jalan Racing Center, Perum. Mustika Mulia Blok B5, No.8, Panakukkang, Makassar, Sulawesi Selatan.
                  </p>
                </div>

              </div>

              {/* KOLOM KANAN: FORMULIR KEMITRAAN (B2B) */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-apaca-redPrimary block mb-1">
                    Pengadaan & Kerjasama
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">Formulir Kemitraan (B2B)</h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Khusus sekolah, yayasan, atau perusahaan yang ingin mengajukan proposal pengadaan tes massal atau program SDM.
                  </p>
                </div>

                <form onSubmit={handleSubmitB2B} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                        Nama Lengkap *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={formData.namaLengkap}
                        onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                        Nama Instansi / Sekolah *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="Nama Sekolah / Perusahaan"
                        value={formData.namaInstansi}
                        onChange={(e) => setFormData({...formData, namaInstansi: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                        Jabatan
                      </label>
                      <input 
                        type="text"
                        placeholder="Contoh: Kepala Sekolah / HRD"
                        value={formData.jabatan}
                        onChange={(e) => setFormData({...formData, jabatan: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                        Nomor WhatsApp *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="082268118842"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Email Instansi
                    </label>
                    <input 
                      type="email"
                      placeholder="email@instansi.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Pesan / Kebutuhan Program
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Jelaskan kebutuhan pengadaan tes massal atau konsultasi..."
                      value={formData.pesan}
                      onChange={(e) => setFormData({...formData, pesan: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                    ></textarea>
                  </div>

                  {/* DUA BUTTON ACTION */}
                  <div className="pt-2 space-y-3">
                    {/* Button 1: Download GDrive */}
                    <a
                      href={GDRIVE_PROPOSAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      📁 Unduh Format Proposal B2B (Google Drive)
                    </a>

                    {/* Button 2: Submit to WA */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 bg-apaca-gradient hover:bg-apaca-gradient-hover text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      💬 Kirim Formulir & Chat CS WhatsApp
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION MAPS SNIPPET */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-apaca-redPrimary block mb-1">
                Peta Lokasi
              </span>
              <h2 className="text-2xl font-bold text-slate-900">Kunjungi Kantor Operasional Kami</h2>
              <p className="text-sm text-slate-500 mt-1">Jalan Racing Center, Perum. Mustika Mulia Blok B5 No.8, Panakukkang, Makassar.</p>
            </div>

            <MapsSnippet />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
