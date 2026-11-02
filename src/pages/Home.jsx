import React from 'react';
import { useNavigate } from 'react-router-dom';
import { teacherIdentity, keyMetrics, documentInventory } from '../data/PortofolioData';

export default function Home({ setPreviewDoc }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* HERO RINGKAS */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="badge-row">
            <span className="badge badge-white">PPG Calon Guru UNY</span>
            <span className="badge badge-gold">Informatika</span>
          </div>
          <h2 className="hero-title">
            E-Portfolio Praktik Pengalaman Lapangan (PPL)
          </h2>
          <p className="hero-lead">
            Dokumentasi perangkat ajar, pelaksanaan pembelajaran, asesmen, dan refleksi{' '}
            <strong>{teacherIdentity.name}</strong> di <strong>{teacherIdentity.school}</strong> (Kelas{' '}
            {teacherIdentity.mainClass}).
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/uts')}>
              📘 E-Portfolio UTS
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/uas')}>
              📙 E-Portfolio UAS
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/profil')}>
              👤 Profil Guru
            </button>
          </div>
        </div>

        <div className="hero-stats-box">
          <h3>📍 Identitas Praktik</h3>
          <ul className="context-list">
            <li><strong>Sekolah</strong> <span>{teacherIdentity.school}</span></li>
            <li><strong>Kelas</strong> <span>{teacherIdentity.mainClass} ({teacherIdentity.studentCount})</span></li>
            <li><strong>Jadwal</strong> <span>{teacherIdentity.scheduleContext}</span></li>
            <li><strong>Guru Pamong</strong> <span>Juwari, S.T.</span></li>
            <li><strong>Dosen DPL</strong> <span>Dr. Ir. Satriyo A. Dewanto</span></li>
          </ul>
        </div>
      </section>

      {/* METRIK INTI */}
      <section className="metrics-grid" aria-label="Ringkasan Capaian">
        {keyMetrics.map((m, idx) => (
          <div key={idx} className="metric-card">
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-detail">{m.detail}</div>
          </div>
        ))}
      </section>

      {/* DUA MENU UTAMA PORTOFOLIO */}
      <section className="section-block">
        <div className="dual-cards">
          <div className="portfolio-main-card">
            <div className="card-header-strip strip-blue">
              E-PORTFOLIO 1 — UTS (SIKLUS 1)
            </div>
            <div className="card-body">
              <h3>Berpikir Komputasional &amp; Struktur Data</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem' }}>
                Pembelajaran fondasi Berpikir Komputasional dan algoritma Struktur Data melalui simulasi
                permainan kartu angka di kelas X TP 1.
              </p>
              <ul className="feature-list">
                <li>✅ Slide Materi Berpikir Komputasional (31 Halaman PDF)</li>
                <li>✅ Video Praktik Mengajar (01:33:48) &amp; Roleplay Sorting</li>
                <li>✅ Kuis Evaluasi Interaktif (Rata-rata Kelas 81%)</li>
                <li>✅ Dokumen Resmi <code>LK.4 Refleksi 1</code></li>
              </ul>
              <button className="btn btn-primary full-width" onClick={() => navigate('/uts')}>
                Buka E-Portfolio UTS →
              </button>
            </div>
          </div>

          <div className="portfolio-main-card">
            <div className="card-header-strip strip-gold">
              E-PORTFOLIO 2 — UAS (SIKLUS 2–4)
            </div>
            <div className="card-body">
              <h3>Sistem Komputer &amp; Pengembangan Siklus</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem' }}>
                Pembelajaran komponen Hardware, Software, Brainware, dan praktikum antarmuka CLI Command Prompt
                serta refleksi perkembangan Siklus 2–4.
              </p>
              <ul className="feature-list">
                <li>✅ Slide Materi Sistem Komputer (91 Halaman PDF)</li>
                <li>✅ Simulasi Interaktif Perintah Dasar CLI (<code>dir, mkdir, cd</code>)</li>
                <li>✅ Galeri Dokumentasi Kegiatan &amp; 7 Pos Cek Konsep</li>
                <li>✅ Dokumen Resmi <code>LK.4 Refleksi 2, 3, &amp; 4</code></li>
              </ul>
              <button className="btn btn-secondary full-width" onClick={() => navigate('/uas')}>
                Buka E-Portfolio UAS →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DOKUMEN UTAMA */}
      <section className="card section-block">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <h3 style={{ margin: 0 }}>Dokumen &amp; Bukti Utama</h3>
          <button className="btn btn-outline btn-sm" onClick={() => navigate('/perjalanan')}>
            Lihat Semua 8 Dokumen →
          </button>
        </div>
        <div className="grid-3">
          {[documentInventory[0], documentInventory[1], documentInventory[2]].map((doc) => (
            <div key={doc.id} className="sub-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="badge-row" style={{ marginBottom: '0.4rem' }}>
                  <span className="badge badge-navy">{doc.cycle}</span>
                  <span className="badge badge-gold">{doc.pages}</span>
                </div>
                <h4>{doc.name}</h4>
              </div>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '0.75rem' }} onClick={() => setPreviewDoc(doc)}>
                🔍 Pratinjau
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}