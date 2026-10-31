import React from 'react';
import { useNavigate } from 'react-router-dom';
import { teacherIdentity, keyMetrics, documentInventory } from '../data/PortofolioData';

export default function Home({ setPreviewDoc }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* ── HERO SECTION ── */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="badge-row">
            <span className="badge badge-white">PPG Prajabatan / Calon Guru UNY</span>
            <span className="badge badge-gold">Bidang Studi Informatika</span>
            <span className="badge badge-emerald">Semester 2</span>
          </div>
          <h2 className="hero-title">
            Dokumentasi Perjalanan &amp; Transformasi Kompetensi Calon Guru Informatika
          </h2>
          <p className="hero-lead">
            Selamat datang di E-Portfolio profesional <strong>{teacherIdentity.name}</strong>.
            Website ini mendokumentasikan secara autentik pertumbuhan kompetensi saya dari tahap
            <strong> Praktik Asistensi</strong> menuju <strong>4 Siklus Praktik Mandiri</strong> melalui
            penyempurnaan modul ajar berformat ABCD, inovasi simulasi <em>unplugged</em>, pengelolaan kelas
            vokasi pada jam siang (12.30–15.00 WIB), serta refleksi berbasis bukti di{' '}
            <strong>{teacherIdentity.school}</strong>.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/uts')}>
              📘 Buka E-Portfolio 1 (UTS)
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/uas')}>
              📙 Buka E-Portfolio 2 (UAS)
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/profil')}>
              👤 Profil &amp; Kompetensi Guru
            </button>
          </div>
        </div>

        <div className="hero-stats-box">
          <div>
            <h3>📍 Konteks Utama Praktik (PPL)</h3>
            <ul className="context-list">
              <li><strong>Sekolah Mitra</strong> <span>{teacherIdentity.school}</span></li>
              <li><strong>Kelas Utama</strong> <span>{teacherIdentity.mainClass}</span></li>
              <li><strong>Peserta Didik</strong> <span>{teacherIdentity.studentCount}</span></li>
              <li><strong>Jam Mengajar</strong> <span>Siang (12.30–15.00 WIB)</span></li>
              <li><strong>Sistem Jadwal</strong> <span>Sistem Blok (2 Kelas)</span></li>
              <li><strong>Guru Pamong</strong> <span>Juwari, S.T.</span></li>
              <li><strong>Dosen DPL</strong> <span>Dr. Ir. Satriyo A. Dewanto</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── METRIC CARDS ── */}
      <section className="metrics-grid" aria-label="Ringkasan Capaian Portofolio">
        {keyMetrics.map((m, idx) => (
          <div key={idx} className="metric-card">
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-detail">{m.detail}</div>
          </div>
        ))}
      </section>

      {/* ── DUA BAGIAN UTAMA E-PORTFOLIO ── */}
      <section className="section-block">
        <div className="section-heading">
          <h2>Struktur Utama E-Portfolio (UTS &amp; UAS)</h2>
          <p>
            Dirancang secara sistematis mengikuti 7 komponen standar penilaian PPG: Pendahuluan, Perencanaan,
            Materi, Media, Dokumentasi Praktik, Asesmen, dan Refleksi Berkelanjutan.
          </p>
        </div>

        <div className="dual-cards">
          <div className="portfolio-main-card">
            <div className="card-header-strip strip-blue">
              BAGIAN I — E-PORTFOLIO 1: UJIAN TENGAH SEMESTER (UTS)
            </div>
            <div className="card-body">
              <div className="badge-row" style={{ marginBottom: '0.5rem' }}>
                <span className="badge badge-navy">Siklus 1 Mandiri</span>
                <span className="badge badge-emerald">Video 01:33:48 + 31 Slide PDF</span>
              </div>
              <h3>Berpikir Komputasional, Struktur Data &amp; Algoritma</h3>
              <p>
                Mendokumentasikan dua rangkaian pertemuan di kelas X TP 1: pengenalan <strong>4 Fondasi
                Berpikir Komputasional</strong> (dengan abstraksi komponen <em>Mesin Bubut</em>) serta praktik
                mengajar <strong>Struktur Data &amp; Algoritma</strong> (<em>Linear/Binary Search, Bubble/Selection
                Sort, Stack, Queue</em>) untuk mengatasi kejenuhan belajar jam siang.
              </p>
              <ul className="feature-list">
                <li>✅ <strong>Materi Asli:</strong> Slide PDF Berpikir Komputasional (31 Halaman) &amp; Studi Kasus Kewirausahaan</li>
                <li>✅ <strong>Bukti Video Autentik:</strong> Rekaman mengajar 1 jam 33 menit dilengkapi 10 navigasi timestamp interaktif</li>
                <li>✅ <strong>Inovasi Unplugged:</strong> Permainan Tebak Angka 1–100 &amp; Roleplay Kartu Angka oleh 6 barisan siswa</li>
                <li>✅ <strong>Evaluasi &amp; Refleksi:</strong> Kuis interaktif 22 soal (rata-rata kelas 81%) &amp; Refleksi resmi <code>LK.4 Siklus 1</code></li>
              </ul>
              <button className="btn btn-primary full-width" onClick={() => navigate('/uts')}>
                Jelajahi E-Portfolio 1 (UTS) Selengkapnya →
              </button>
            </div>
          </div>

          <div className="portfolio-main-card">
            <div className="card-header-strip strip-gold">
              BAGIAN II — E-PORTFOLIO 2: UJIAN AKHIR SEMESTER (UAS)
            </div>
            <div className="card-body">
              <div className="badge-row" style={{ marginBottom: '0.5rem' }}>
                <span className="badge badge-gold">Siklus 2–4 &amp; Sistem Blok</span>
                <span className="badge badge-navy">91 Slide PDF + 3 LK.4 Resmi</span>
              </div>
              <h3>Sistem Komputer &amp; Transformasi Desain Pembelajaran Lintas Siklus</h3>
              <p>
                Menampilkan materi terkuat dari rangkaian Siklus 2–4 yakni <strong>Sistem Komputer</strong>
                (didukung 91 slide bahan ajar asli), disertai analisis bagaimana sistem penjadwalan blok
                dimanfaatkan untuk menyempurnakan LKM, memperbaiki sistematika RPP (Siklus 3), dan menerapkan
                instruksi praktik bertahap (Siklus 4).
              </p>
              <ul className="feature-list">
                <li>✅ <strong>Rasionalisasi Objektif:</strong> Matriks evaluasi 3 kandidat materi (Sistem Komputer, Analisis Data, MS Word)</li>
                <li>✅ <strong>Materi &amp; Simulator CLI:</strong> 91 Slide PDF Sistem Komputer (RAM/ROM, SSD vs HDD, GUI vs CLI Command Prompt)</li>
                <li>✅ <strong>Perbaikan Perangkat Ajar:</strong> Rekonstruksi RPP ABCD &amp; LKM penyempurnaan pasca-evaluasi <code>LK.4 Refleksi 2</code></li>
                <li>✅ <strong>Transformasi Lintas Siklus:</strong> Kesinambungan tindak lanjut menuju Siklus 3 (RPP) &amp; Siklus 4 (Hands-on Word)</li>
              </ul>
              <button className="btn btn-secondary full-width" onClick={() => navigate('/uas')}>
                Jelajahi E-Portfolio 2 (UAS) Selengkapnya →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISI & GARIS BESAR PERTUMBUHAN 5 TAHAP ── */}
      <section className="section-block">
        <div className="grid-2">
          <div className="card">
            <span className="section-tag">FILOSOFI &amp; VISI PENDIDIK</span>
            <h3>🎯 Visi Sebagai Calon Guru Informatika Vokasi</h3>
            <blockquote className="academic-quote">
              "{teacherIdentity.vision}"
            </blockquote>
            <p>
              Mengajar 36 peserta didik jurusan <strong>Teknik Permesinan (X TP 1)</strong> pada jam rawan
              mengantuk (12.30–15.00 WIB) mengajarkan saya bahwa penguasaan konsep Informatika harus diimbangi
              dengan kepekaan pedagogik. Konsep abstrak seperti <em>Sorting</em> atau <em>Arsitektur Memori</em>
              menjadi jauh lebih hidup ketika diterjemahkan ke dalam <strong>simulasi fisik (roleplay kartu
              angka)</strong>, dianalogikan dengan <strong>Mesin Bubut dan sistem CNC</strong>, serta dipandu
              melalui <strong>LKM yang terstruktur</strong>.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn btn-outline btn-sm" onClick={() => navigate('/profil')}>
                Lihat Profil &amp; 4 Kompetensi Guru →
              </button>
              <button className="btn btn-outline btn-sm" onClick={() => navigate('/perjalanan')}>
                Lihat Inventarisasi 10 Dokumen Bukti →
              </button>
            </div>
          </div>

          <div className="card">
            <span className="section-tag">REKAM JEJAK REFLEKTIF</span>
            <h3>📈 Sintesis Pertumbuhan 5 Tahap PPL</h3>
            <ol className="styled-list">
              <li>
                <strong>Praktik Asistensi (LK.3):</strong> Mengidentifikasi kelemahan tujuan pembelajaran yang belum berformat ABCD utuh, ketidakselarasan asesmen, dan siswa mengantuk pada siang hari.
              </li>
              <li>
                <strong>Siklus 1 — Berpikir Komputasional &amp; Struktur Data:</strong> Mengontekstualisasikan abstraksi Mesin Bubut, mengatasi kendala Quizizz &amp; font slide kecil melalui <em>roleplay</em> kartu angka hingga rata-rata kuis kelas mencapai <strong>81%</strong>.
              </li>
              <li>
                <strong>Siklus 2 — Sistem Komputer:</strong> Memperbesar ukuran tipografi slide (91 halaman), mengevaluasi secara jujur ketidaksiapan LKM, dan meningkatkan penguasaan kelas.
              </li>
              <li>
                <strong>Siklus 3 — Analisis Data:</strong> Menyelaraskan contoh pengolahan nilai dalam tabel/diagram serta menata ulang sistematika RPP sesuai kaidah.
              </li>
              <li>
                <strong>Siklus 4 — Microsoft Word:</strong> Menerapkan demonstrasi langsung diikuti praktik mandiri pembuatan laporan dengan panduan <em>step-by-step scaffolding</em>.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── AKSES CEPAT BUKTI UTAMA ── */}
      <section className="card section-block">
        <div className="section-heading" style={{ marginBottom: '1rem' }}>
          <span className="section-tag">AKSES CEPAT DOKUMEN UTAMA</span>
          <h3>Pratinjau Langsung Bukti Autentik Pilihan</h3>
          <p>Klik salah satu dokumen di bawah ini untuk melihat ringkasan isi terverifikasi dan pratinjau PDF/video secara langsung:</p>
        </div>
        <div className="grid-3">
          {[documentInventory[0], documentInventory[1], documentInventory[2]].map((doc) => (
            <div key={doc.id} className="sub-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="badge-row" style={{ marginBottom: '0.45rem' }}>
                  <span className="badge badge-navy">{doc.id}</span>
                  <span className="badge badge-gold">{doc.pages}</span>
                </div>
                <h4>{doc.name}</h4>
                <p style={{ fontSize: '0.86rem', color: '#475569', marginBottom: '0.9rem' }}>
                  {doc.content}
                </p>
              </div>
              <button className="btn btn-outline btn-sm" onClick={() => setPreviewDoc(doc)}>
                🔍 Pratinjau Bukti ({doc.id})
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
