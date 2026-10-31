import React from 'react';
import { useNavigate } from 'react-router-dom';
import { teacherIdentity } from '../data/PortofolioData';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* ── HERO SECTION ── */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="badge-row">
            <span className="badge badge-navy">PPG Prajabatan / Calon Guru UNY</span>
            <span className="badge badge-gold">Bidang Studi Informatika</span>
          </div>
          <h2 className="hero-title">
            Dokumentasi Perjalanan &amp; Transformasi Kompetensi Calon Guru Informatika
          </h2>
          <p className="hero-lead">
            Selamat datang di E-Portfolio profesional <strong>{teacherIdentity.name}</strong>.
            Website ini menyajikan bukti nyata bagaimana saya bertumbuh dari tahap asistensi
            menuju pelaksanaan pembelajaran mandiri melalui penyempurnaan perangkat ajar,
            inovasi simulasi <em>unplugged</em>, pengelolaan kelas vokasi pada jam siang,
            serta refleksi jujur berbasis umpan balik di <strong>{teacherIdentity.school}</strong>.
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
          <h3>📍 Konteks Utama Praktik (PPL)</h3>
          <ul className="context-list">
            <li><strong>Sekolah Praktik:</strong> SMK Negeri 2 Yogyakarta</li>
            <li><strong>Kelas Utama:</strong> X TP 1 (Teknik Permesinan 1)</li>
            <li><strong>Jumlah Peserta Didik:</strong> 36 Orang</li>
            <li><strong>Waktu Pembelajaran:</strong> Jam Siang (12.30–15.00 WIB)</li>
            <li><strong>Sistem Jadwal:</strong> Sistem Blok (2 Kelas Bergantian)</li>
            <li><strong>Guru Pamong:</strong> Juwari, S.T.</li>
          </ul>
        </div>
      </section>

      {/* ── DUA BAGIAN UTAMA ── */}
      <section className="section-block">
        <div className="section-heading">
          <h2>Dua Bagian Utama E-Portfolio</h2>
          <p>Terintegrasi dalam satu sistem navigasi dengan tautan langsung untuk keperluan asesmen UTS dan UAS.</p>
        </div>

        <div className="dual-cards">
          <div className="portfolio-main-card">
            <div className="card-header-strip strip-blue">E-PORTFOLIO 1 — UJIAN TENGAH SEMESTER (UTS)</div>
            <div className="card-body">
              <h3>Praktik Terbaik Siklus 1: Berpikir Komputasional, Struktur Data &amp; Algoritma</h3>
              <p>
                Mendokumentasikan dua rangkaian pertemuan di kelas X TP 1: pengenalan 4 fondasi
                Berpikir Komputasional (dengan abstraksi Mesin Bubut) serta praktik mengajar
                Struktur Data &amp; Algoritma (<em>Linear/Binary Search, Bubble/Selection Sort, Stack, Queue</em>)
                yang didukung rekaman video mengajar berdurasi 1 jam 33 menit.
              </p>
              <ul className="feature-list">
                <li>✅ Slide PDF Asli Berpikir Komputasional (31 Halaman)</li>
                <li>✅ Video Praktik Mengajar Terverifikasi + Analisis Timestamp</li>
                <li>✅ Simulasi Kartu Angka (Roleplay) &amp; Permainan Tebak Angka 1–100</li>
                <li>✅ Kuis Evaluasi Interaktif (Rata-rata Kelas 81%) &amp; Refleksi LK.4 Siklus 1</li>
              </ul>
              <button className="btn btn-primary full-width" onClick={() => navigate('/uts')}>
                Jelajahi Halaman E-Portfolio UTS →
              </button>
            </div>
          </div>

          <div className="portfolio-main-card">
            <div className="card-header-strip strip-gold">E-PORTFOLIO 2 — UJIAN AKHIR SEMESTER (UAS)</div>
            <div className="card-body">
              <h3>Praktik Terbaik Siklus 2–4: Sistem Komputer &amp; Transformasi Desain Pembelajaran</h3>
              <p>
                Menampilkan materi terkuat dari rangkaian Siklus 2–4 yakni <strong>Sistem Komputer</strong>
                (didukung 91 slide bahan ajar asli), disertai analisis bagaimana sistem penjadwalan
                blok dimanfaatkan untuk memperbaiki kelemahan LKM, merombak sistematika RPP (Siklus 3),
                dan menerapkan instruksi praktik bertahap (Siklus 4).
              </p>
              <ul className="feature-list">
                <li>✅ Evaluasi Objektif 3 Kandidat Materi (Sistem Komputer, Analisis Data, MS Word)</li>
                <li>✅ Slide PDF Asli Sistem Komputer (91 Halaman) &amp; Simulasi CLI Command Prompt</li>
                <li>✅ Rekonstruksi &amp; Pengembangan LKM Pasca-Refleksi Siklus 2</li>
                <li>✅ Narasi Perkembangan Kompetensi Lintas Siklus (Siklus 2 ke Siklus 3 &amp; 4)</li>
              </ul>
              <button className="btn btn-secondary full-width" onClick={() => navigate('/uas')}>
                Jelajahi Halaman E-Portfolio UAS →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISI & PERTUMBUHAN ── */}
      <section className="section-block highlight-box">
        <div className="grid-2">
          <div className="card">
            <h3>🎯 Visi Sebagai Calon Guru Informatika</h3>
            <blockquote className="academic-quote">
              "{teacherIdentity.vision}"
            </blockquote>
            <p>
              Dalam menghadapi peserta didik SMK jurusan Teknik Permesinan pada jam rawan mengantuk
              (12.30–15.00 WIB), saya belajar bahwa penguasaan materi Informatika saja tidak cukup.
              Guru harus mampu menerjemahkan konsep abstrak menjadi simulasi konkret, menyusun
              LKM yang jelas, dan mengelola kelas secara adaptif.
            </p>
          </div>
          <div className="card">
            <h3>📈 Garis Besar Pertumbuhan 5 Tahap PPL</h3>
            <ol className="styled-list">
              <li>
                <strong>Praktik Asistensi (LK.3):</strong> Identifikasi masalah tujuan ABCD yang belum utuh, ketidakselarasan asesmen, dan siswa yang mengantuk.
              </li>
              <li>
                <strong>Siklus 1 (Berpikir Komputasional &amp; Struktur Data):</strong> Kontekstualisasi mesin bubut, kendala Quizizz &amp; font slide kecil, diatasi dengan <em>roleplay</em> kartu angka &amp; kuis (rata-rata 81%).
              </li>
              <li>
                <strong>Siklus 2 (Sistem Komputer):</strong> Perbaikan ukuran visual slide (91 hal), evaluasi kritis ketidaksiapan LKM, dan fokus penguasaan kelas.
              </li>
              <li>
                <strong>Siklus 3 (Analisis Data):</strong> Penyelarasan contoh tabel/diagram nilai dan penataan ulang sistematika RPP sesuai kaidah.
              </li>
              <li>
                <strong>Siklus 4 (Microsoft Word):</strong> Penerapan demonstrasi langsung, praktik mandiri pembuatan laporan, dan <em>scaffolding</em> bertahap.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
