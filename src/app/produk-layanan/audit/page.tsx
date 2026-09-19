"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AuditPage() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    namaSekolah: '',
    jabatan: 'Kepala Sekolah',
    whatsapp: '',
    email: '',
    jumlahSiswa: '',
    catatan: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.namaLengkap || !formData.namaSekolah || !formData.whatsapp) {
      alert('Mohon isi Nama, Nama Sekolah, dan Nomor WhatsApp Anda.');
      return;
    }

    const message = `Halo Admin APACA,%0A%0ASaya ingin mendaftarkan Sekolah/Yayasan kami ke *Waitlist Early Access* Layanan Audit Ekosistem Institusi:%0A- Nama Perwakilan: ${encodeURIComponent(formData.namaLengkap)}%0A- Jabatan: ${encodeURIComponent(formData.jabatan)}%0A- Sekolah/Yayasan: ${encodeURIComponent(formData.namaSekolah)}%0A- WA: ${encodeURIComponent(formData.whatsapp)}%0A- Email: ${encodeURIComponent(formData.email)}%0A- Estimasi Jumlah Siswa: ${encodeURIComponent(formData.jumlahSiswa)}%0A- Catatan Kebutuhan: ${encodeURIComponent(formData.catatan)}%0A%0AMohon masukkan kami ke dalam daftar prioritas penawaran perdana. Terima kasih!`;

    window.open(`https://wa.me/6282268118842?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION TEASER */}
        <section className="bg-gradient-to-b from-white via-apaca-redLight/30 to-slate-50 py-16 sm:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-widest rounded-full mb-4 border border-amber-300 shadow-sm animate-pulse">
              🚀 Layanan Datang Segera (Coming Soon)
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Transformasi Sekolah Dimulai dari <br className="hidden sm:inline" />
              <span className="text-apaca-gradient">Data Berbasis Bukti</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              APACA Audit Ekosistem Sekolah hadir untuk membantu yayasan dan manajemen sekolah memetakan iklim belajar, evaluasi mutu tenaga pendidik, dan kesiapan kurikulum secara terukur.
            </p>
          </div>
        </section>

        {/* TEASER MODUL AUDIT */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-apaca-redPrimary block mb-2">
                Cakupan Evaluasi
              </span>
              <h2 className="text-2xl font-bold text-slate-900">3 Pilar Utama Audit Institusi</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-apaca-redPrimary/30 transition-all">
                <div className="w-12 h-12 bg-apaca-redLight rounded-xl flex items-center justify-center text-apaca-redDark font-extrabold text-xl mb-6">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Audit Iklim & Budaya Sekolah</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Evaluasi tingkat keamanan emosional, indikator bebas bullying, hubungan interaksi guru-siswa, dan tingkat kenyamanan ekosistem belajar.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-apaca-redPrimary/30 transition-all">
                <div className="w-12 h-12 bg-apaca-redLight rounded-xl flex items-center justify-center text-apaca-redDark font-extrabold text-xl mb-6">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Evaluasi Kinerja & Gaya Guru</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pemetaan gaya mengajar (KK1), tingkat burnout/stres profesional pendidik, serta analisis keselarasan metode guru dengan gaya belajar siswa.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-apaca-redPrimary/30 transition-all">
                <div className="w-12 h-12 bg-apaca-redLight rounded-xl flex items-center justify-center text-apaca-redDark font-extrabold text-xl mb-6">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pemetaan Kesiapan Kurikulum</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Analisis data agregat learning profile siswa untuk membantu sekolah menyusun strategi pengajaran berbasis bukti yang presisi.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* EARLY ACCESS FORM / WAITLIST */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
              
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-apaca-redPrimary block mb-2">
                  Daftar Prioritas
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Formulir Early Access</h2>
                <p className="text-sm text-slate-500 mt-2">
                  Dapatkan penawaran perdana, konsultasi awal gratis, dan potongan harga khusus saat layanan Audit resmi dirilis.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Nama Lengkap Perwakilan *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Contoh: Drs. H. Ahmad, M.Pd."
                      value={formData.namaLengkap}
                      onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Jabatan di Sekolah / Yayasan *
                    </label>
                    <select
                      value={formData.jabatan}
                      onChange={(e) => setFormData({...formData, jabatan: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                    >
                      <option value="Kepala Sekolah">Kepala Sekolah</option>
                      <option value="Ketua Yayasan">Ketua / Pengurus Yayasan</option>
                      <option value="Wakil Kepala Sekolah">Wakil Kepala Sekolah / Kurikulum</option>
                      <option value="Tim Penjaminan Mutu">Tim Penjaminan Mutu Sekolah</option>
                      <option value="Guru / Konselor BK">Guru / Konselor BK</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Nama Sekolah / Instansi *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Contoh: SMA Negeri 1 / Yayasan Pendidikan X"
                      value={formData.namaSekolah}
                      onChange={(e) => setFormData({...formData, namaSekolah: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Estimasi Jumlah Siswa
                    </label>
                    <input 
                      type="text"
                      placeholder="Contoh: 300 Siswa"
                      value={formData.jumlahSiswa}
                      onChange={(e) => setFormData({...formData, jumlahSiswa: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="081234567890"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Email Resmi Sekolah
                    </label>
                    <input 
                      type="email"
                      placeholder="sekolah@domain.sch.id"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                    Catatan Kebutuhan Khusus (Opsional)
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Ceritakan gambaran singkat tantangan atau kebutuhan evaluasi di sekolah Anda..."
                    value={formData.catatan}
                    onChange={(e) => setFormData({...formData, catatan: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-apaca-gradient hover:bg-apaca-gradient-hover text-white text-base font-bold rounded-xl shadow-lg transition-all duration-300"
                >
                  Gabung Waitlist Early Access via WhatsApp
                </button>

              </form>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
