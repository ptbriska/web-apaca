"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Impor data advocacy
import advocacyData from '@/data/advocacy.json';

export default function AdvocacyPage() {
  const [selectedService, setSelectedService] = useState<string>(advocacyData[0].kode);
  const [sessionType, setSessionType] = useState<'Online (Zoom)' | 'Offline (Makassar)'>('Online (Zoom)');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('09:00 WITA');
  const [clientName, setClientName] = useState<string>('');

  const currentServiceObj = advocacyData.find(item => item.kode === selectedService) || advocacyData[0];

  const availableTimes = ['09:00 WITA', '11:00 WITA', '13:30 WITA', '15:00 WITA'];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !clientName) {
      alert('Mohon lengkapi Nama dan Tanggal Jadwal Sesi.');
      return;
    }

    const message = `Halo Admin APACA,%0A%0ASaya ingin melakukan reservasi Sesi Advocacy:%0A- Nama: ${encodeURIComponent(clientName)}%0A- Layanan: ${encodeURIComponent(currentServiceObj.nama)} (${currentServiceObj.kode})%0A- Mode: ${encodeURIComponent(sessionType)}%0A- Tanggal: ${encodeURIComponent(selectedDate)}%0A- Waktu: ${encodeURIComponent(selectedTime)}%0A- Biaya: ${encodeURIComponent(currentServiceObj.harga)}%0A%0AMohon konfirmasi ketersediaan jadwal Psikolog/Konsultan. Terima kasih!`;
    
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
              Pilar 2: Data + Advocacy
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Konsultasi & <span className="text-apaca-gradient">Pendampingan Ahli</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Ubah data hasil tes menjadi rencana aksi nyata melalui sesi 1-on-1, konseling psikologis, dan coaching karir bersama psikolog ber-SIPP dan konsultan berpengalaman.
            </p>
          </div>
        </section>

        {/* KATALOG LAYANAN ADVOCACY */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Pilihan Sesi Advocacy</h2>
              <p className="text-sm text-slate-500">Pilih jenis konsultasi yang sesuai dengan kebutuhan pengembangan Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advocacyData.map((item) => (
                <div 
                  key={item.kode} 
                  className={`bg-slate-50 rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    selectedService === item.kode 
                      ? 'border-apaca-redPrimary ring-2 ring-apaca-redPrimary/20 bg-white shadow-md' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold bg-apaca-redLight text-apaca-redDark px-2.5 py-1 rounded">
                        {item.kode}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        ⏱️ {item.durasi}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.nama}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.fokus}</p>
                    
                    <div className="bg-white p-3 rounded-xl border border-slate-100 mb-6">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Target Audiens:</span>
                      <span className="text-xs text-slate-700 font-medium">{item.target}</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 pt-2 border-t border-slate-200/60 flex justify-between items-center">
                      <span className="text-xs text-slate-400">Biaya Sesi:</span>
                      <span className="text-lg font-black text-apaca-redDark">{item.harga}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedService(item.kode);
                        const element = document.getElementById('booking-calendar');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all ${
                        selectedService === item.kode
                          ? 'bg-apaca-gradient text-white shadow-sm'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {selectedService === item.kode ? '✓ Dipilih (Lanjut ke Jadwal)' : 'Pilih Sesi Ini'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KALENDER & JADWAL BOOKING SYSTEM (UI INTERAKTIF) */}
        <section id="booking-calendar" className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
              
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-apaca-redPrimary block mb-2">Pesan Jadwal Sesi</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Sistem Reservasi Konsultasi</h2>
                <p className="text-sm text-slate-500 mt-2">Pilih mode sesi, tanggal, dan waktu yang nyaman bagi Anda.</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-8">
                
                {/* Ringkasan Layanan yang Dipilih */}
                <div className="bg-apaca-redLight/40 p-4 rounded-2xl border border-apaca-redPrimary/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs font-bold text-apaca-redDark uppercase tracking-wider block">Layanan Terpilih:</span>
                    <h4 className="text-base font-bold text-slate-900">{currentServiceObj.nama} ({currentServiceObj.kode})</h4>
                    <span className="text-xs text-slate-500">Durasi: {currentServiceObj.durasi} | Biaya: {currentServiceObj.harga}</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-white rounded-full text-apaca-redDark shadow-sm">
                    1-on-1 Session
                  </span>
                </div>

                {/* 1. Nama Lengkap */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                    Nama Lengkap Anda / Orang Tua:
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                  />
                </div>

                {/* 2. Mode Sesi (Zoom vs Offline) */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                    Mode Konsultasi:
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSessionType('Online (Zoom)')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        sessionType === 'Online (Zoom)'
                          ? 'bg-apaca-dark text-white border-apaca-dark shadow-md'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      💻 Online via Zoom
                    </button>
                    <button
                      type="button"
                      onClick={() => setSessionType('Offline (Makassar)')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        sessionType === 'Offline (Makassar)'
                          ? 'bg-apaca-dark text-white border-apaca-dark shadow-md'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      🏢 Offline (Kantor Makassar)
                    </button>
                  </div>
                </div>

                {/* 3. Tanggal & Jam */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Pilih Tanggal:
                    </label>
                    <input 
                      type="date" 
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">
                      Pilih Waktu Sesi (WITA):
                    </label>
                    <select 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-apaca-redPrimary/50 bg-white"
                    >
                      {availableTimes.map((time, idx) => (
                        <option key={idx} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-apaca-gradient hover:bg-apaca-gradient-hover text-white text-base font-bold rounded-xl shadow-lg transition-all duration-300"
                >
                  Konfirmasi Booking via WhatsApp CS
                </button>

                <p className="text-center text-xs text-slate-400">
                  Sistem akan mengarahkan Anda ke WhatsApp CS APACA (082268118842) untuk verifikasi jadwal dan instruksi pembayaran.
                </p>

              </form>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
