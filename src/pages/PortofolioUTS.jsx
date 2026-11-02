import React, { useState } from 'react';
import { documentInventory, videoTimestamps } from '../data/PortofolioData';
import { FaArrowLeft, FaArrowRight, FaFilePdf, FaGamepad, FaPuzzlePiece, FaRotate, FaYoutube } from 'react-icons/fa6';

const BUBBLE_STEPS = [
  { cards: [44, 10, 60, 2, 55, 43], note: "Posisi awal 6 siswa memegang kartu angka acak." },
  { cards: [10, 44, 2, 55, 43, 60], note: "Iterasi 1: Angka terbesar (60) berpindah ke posisi paling kanan." },
  { cards: [10, 2, 44, 43, 55, 60], note: "Iterasi 2: Pertukaran pasangan berdekatan menempatkan 55 dan 60." },
  { cards: [2, 10, 43, 44, 55, 60], note: "Hasil Akhir [00:23:00]: Terurut naik 2, 10, 43, 44, 55, 60." }
];

export default function PortofolioUTS({ setPreviewDoc }) {
  const [utsTab, setUtsTab] = useState('semua');
  const [videoStart, setVideoStart] = useState(0);
  const [activeTs, setActiveTs] = useState(null);
  const [sortStep, setSortStep] = useState(0);

  const sections = [
    { id: 'semua', label: 'Semua Bagian' },
    { id: 'perencanaan', label: '1. Perencanaan' },
    { id: 'materi', label: '2. Materi & Media' },
    { id: 'dokumentasi', label: '3. Dokumentasi' },
    { id: 'evaluasi', label: '4. Asesmen & Refleksi' }
  ];

  const showSection = (id) => utsTab === 'semua' || utsTab === id;

  const handleJumpToTime = (ts) => {
    setVideoStart(ts.seconds);
    setActiveTs(ts.time);
    const el = document.getElementById('uts-video-player');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="container">
      <div className="page-header portfolio-banner-uts">
        <div className="badge-row">
          <span className="badge badge-white">E-PORTFOLIO 1 — UTS</span>
          <span className="badge badge-gold">Siklus 1 • Kelas X TP 1</span>
        </div>
        <h2>Berpikir Komputasional, Struktur Data &amp; Algoritma</h2>
        <p>SMK Negeri 2 Yogyakarta • 36 Peserta Didik • Jam Siang (12.30–15.00 WIB)</p>
        <button className="btn btn-outline btn-sm" onClick={() => setPreviewDoc(documentInventory[8])}>
          Buka RPP UTS (DOCX)
        </button>
      </div>

      <div className="sub-nav">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className={utsTab === sec.id ? 'sub-nav-btn active' : 'sub-nav-btn'}
            onClick={() => setUtsTab(sec.id)}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* 1. PERENCANAAN */}
      {showSection('perencanaan') && (
        <section className="card section-block">
          <span className="section-tag">1. PERENCANAAN PEMBELAJARAN</span>
          <h3>Tujuan Pembelajaran (Format ABCD) &amp; Alur Kegiatan</h3>
          <div className="grid-3">
            <div className="sub-card">
              <span className="badge badge-navy">Fondasi BK</span>
              <p style={{ marginTop: '0.45rem', fontSize: '0.9rem' }}>
                Menguraikan 4 fondasi Berpikir Komputasional (<em>Dekomposisi, Pengenalan Pola, Abstraksi Mesin Bubut, Algoritma</em>) melalui studi kasus kejuruan.
              </p>
            </div>
            <div className="sub-card">
              <span className="badge badge-navy">Searching &amp; Sorting</span>
              <p style={{ marginTop: '0.45rem', fontSize: '0.9rem' }}>
                Membandingkan <em>Linear vs Binary Search</em> dan mempraktikkan pengurutan <em>Bubble &amp; Selection Sort</em> melalui simulasi kartu angka.
              </p>
            </div>
            <div className="sub-card">
              <span className="badge badge-navy">Stack &amp; Queue</span>
              <p style={{ marginTop: '0.45rem', fontSize: '0.9rem' }}>
                Menganalisis operasi struktur data <em>Stack (LIFO)</em> dan <em>Queue (FIFO)</em> dengan target ketuntasan kelas minimal 80%.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 2. MATERI & MEDIA */}
      {showSection('materi') && (
        <section className="card section-block">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div>
              <span className="section-tag">2. MATERI &amp; MEDIA PEMBELAJARAN</span>
              <h3 style={{ margin: 0 }}>Bahan Ajar &amp; Simulasi Kartu Angka</h3>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => setPreviewDoc(documentInventory[0])}>
              <FaFilePdf /> Buka Slide Berpikir Komputasional (PDF)
            </button>
          </div>

          <div className="grid-2">
            <div className="sub-card">
              <h4>Berpikir Komputasional (31 Slide PDF)</h4>
              <ul className="styled-list">
                <li><strong>Karakteristik BK:</strong> Logis, Sistematis, Efisien, dan Efektif.</li>
                <li><strong>4 Fondasi:</strong> Dekomposisi, Pengenalan Pola, Abstraksi (identifikasi bagian utama <strong>Mesin Bubut</strong>), dan Algoritma.</li>
                <li><strong>Studi Kasus:</strong> Perhitungan strategi penjualan produk kewirausahaan sekolah.</li>
              </ul>
            </div>

            <div className="sub-card">
              <h4><FaPuzzlePiece /> Struktur Data &amp; Algoritma</h4>
              <ul className="styled-list">
                <li><strong>Searching:</strong> <em>Linear Search</em> (berurutan) &amp; <em>Binary Search</em> (bagi dua pada data terurut).</li>
                <li><strong>Sorting:</strong> <em>Bubble Sort</em> (tukar elemen berdekatan) &amp; <em>Selection Sort</em> (cari nilai terkecil).</li>
                <li><strong>Stack &amp; Queue:</strong> Tumpukan LIFO (<code>push/pop</code>) &amp; Antrean FIFO (<code>enqueue/dequeue</code>).</li>
              </ul>
            </div>
          </div>

          <div className="sim-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h4><FaGamepad /> Simulasi Roleplay Kartu Angka (Bubble Sort)</h4>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                  Praktik 6 siswa di depan kelas mengurutkan kartu angka:
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button className="btn btn-sm btn-outline" onClick={() => setSortStep((p) => Math.max(0, p - 1))} disabled={sortStep === 0}>
                  <FaArrowLeft /> Sebelumnya
                </button>
                <button className="btn btn-sm btn-primary" onClick={() => setSortStep((p) => (p + 1) % BUBBLE_STEPS.length)}>
                  {sortStep === BUBBLE_STEPS.length - 1 ? <><FaRotate /> Ulangi</> : <><FaArrowRight /> Berikutnya</>}
                </button>
              </div>
            </div>
            <div className="card-number-row">
              {BUBBLE_STEPS[sortStep].cards.map((num, idx) => (
                <div key={idx} className="number-card">
                  <span>Pos {idx + 1}</span>
                  {num}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#fde68a' }}>
              <strong>Tahap {sortStep + 1}/{BUBBLE_STEPS.length}:</strong> {BUBBLE_STEPS[sortStep].note}
            </p>
          </div>
        </section>
      )}

      {/* 3. DOKUMENTASI PEMBELAJARAN */}
      {showSection('dokumentasi') && (
        <section className="card section-block" id="uts-video-player">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span className="section-tag">3. DOKUMENTASI PEMBELAJARAN</span>
              <h3>Video Praktik Mengajar Struktur Data (01:33:48)</h3>
            </div>
            <a
              href="https://youtu.be/CBBoBcWRp1o?si=zcloXQtEIu3pQxoJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <FaYoutube /> Tonton di YouTube
            </a>
          </div>

          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/CBBoBcWRp1o?start=${videoStart}`}
              title="Video Mengajar Struktur Data"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p style={{ fontSize: '0.88rem', color: '#475569', marginTop: '0.75rem' }}>
            Klik segmen waktu di bawah untuk memutar bagian kegiatan pada video:
          </p>
          <div className="timestamp-grid">
            {videoTimestamps.map((ts, idx) => (
              <div
                key={idx}
                className={activeTs === ts.time ? 'timestamp-card active-ts' : 'timestamp-card'}
                onClick={() => handleJumpToTime(ts)}
              >
                <div className="badge-row" style={{ justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <span className="time-badge"><FaArrowRight /> {ts.time}</span>
                  <span className="badge badge-navy">{ts.phase}</span>
                </div>
                <h4 style={{ fontSize: '0.94rem' }}>{ts.title}</h4>
                <p style={{ fontSize: '0.83rem', color: '#475569', marginTop: '0.2rem' }}>{ts.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. ASESMEN & REFLEKSI */}
      {showSection('evaluasi') && (
        <section className="card section-block">
          <span className="section-tag">4. ASESMEN &amp; REFLEKSI</span>
          <h3>Hasil Evaluasi Kelas &amp; Refleksi Siklus 1</h3>

          <div className="score-highlight" style={{ marginBottom: '1.15rem' }}>
            <div>
              <h4>Kuis Evaluasi Akhir (22 Soal Interaktif)</h4>
              <p style={{ fontSize: '0.88rem', color: '#065f46' }}>
                Menguji materi Berpikir Komputasional, Searching, Sorting, Stack, dan Queue pada 36 siswa X TP 1.
              </p>
            </div>
            <strong>Rata-Rata Kelas: 81%</strong>
          </div>

          <div className="grid-2">
            <div className="sub-card">
              <h4>Refleksi &amp; Masukan Guru Pamong (LK.4 Siklus 1)</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Penggunaan contoh kontekstual kejuruan dan simulasi kartu angka sangat membantu keaktifan siswa
                pada jam siang, disertai penguatan keterbacaan ukuran teks pada slide presentasi untuk barisan belakang.
              </p>
            </div>
            <div className="sub-card">
              <h4>Pengembangan Berkelanjutan</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Merancang tampilan slide dengan ukuran huruf besar dan kontras tinggi pada materi <strong>Sistem Komputer</strong> di Siklus 2 serta memperbanyak latihan interaktif di kelas.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <button className="btn btn-outline btn-sm" onClick={() => setPreviewDoc(documentInventory[4])}>
              <FaFilePdf /> Buka Dokumen LK.4 Refleksi 1 (PDF)
            </button>
          </div>
        </section>
      )}
    </div>
  );
}