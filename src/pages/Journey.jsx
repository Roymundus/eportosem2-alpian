import React, { useState } from 'react';
import { documentInventory, growthStages } from '../data/PortofolioData';

export default function Journey({ setPreviewDoc }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Materi Asli', 'Refleksi Resmi', 'Video Praktik', 'Rekonstruksi & Pengembangan'];

  const filteredDocs = documentInventory.filter((doc) => {
    const matchCategory = selectedCategory === 'Semua' || doc.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchQuery =
      !q ||
      doc.name.toLowerCase().includes(q) ||
      doc.cycle.toLowerCase().includes(q) ||
      doc.content.toLowerCase().includes(q) ||
      doc.id.toLowerCase().includes(q);
    return matchCategory && matchQuery;
  });

  return (
    <div className="container">
      <div className="page-header">
        <div className="badge-row">
          <span className="badge badge-navy">BAGIAN III &amp; IV — SINTESIS PERKEMBANGAN &amp; INVENTARISASI</span>
          <span className="badge badge-gold">Transparansi Akademik 10 Bukti PPL</span>
        </div>
        <h2>Perjalanan Profesional &amp; Inventarisasi Bukti PPG</h2>
        <p>
          Rekam jejak kronologis perkembangan kompetensi dari Praktik Asistensi hingga Siklus 4 serta daftar
          transparansi seluruh dokumen yang digunakan dalam E-Portfolio ini.
        </p>
      </div>

      {/* MATRIKS PERKEMBANGAN KOMPETENSI 5 TAHAP */}
      <section className="card section-block">
        <span className="section-tag">TRANSFORMASI KOMPETENSI</span>
        <h3>Matriks Perkembangan Kompetensi Calon Guru (Asistensi s.d. Siklus 4)</h3>
        <p>
          Tabel berikut memetakan hubungan kausal antara permasalahan yang ditemukan di kelas, umpan balik Guru
          Pamong &amp; DPL, kesadaran reflektif yang diperoleh, serta perubahan nyata yang dilakukan dari waktu ke waktu:
        </p>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tahapan Praktik</th>
                <th>Permasalahan yang Ditemukan</th>
                <th>Umpan Balik Guru Pamong &amp; DPL</th>
                <th>Kesadaran &amp; Perubahan Nyata yang Dilakukan</th>
                <th>Bukti Resmi</th>
              </tr>
            </thead>
            <tbody>
              {growthStages.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <strong>{item.stage}</strong>
                    <br />
                    <span className="badge badge-navy" style={{ marginTop: '0.3rem' }}>{item.code}</span>
                    <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '0.25rem' }}>{item.topic}</div>
                  </td>
                  <td>{item.challenge}</td>
                  <td>{item.feedback}</td>
                  <td>{item.action}</td>
                  <td>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setPreviewDoc(documentInventory[item.docIndex])}
                    >
                      Buka {documentInventory[item.docIndex].id}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INVENTARISASI SELURUH DOKUMEN DENGAN FILTER & PENCARIAN */}
      <section className="card section-block">
        <span className="section-tag"> PUSAT ARSIP &amp; VERIFIKASI</span>
        <h3>Tabel Inventarisasi Seluruh Dokumen &amp; Status Kelengkapan Bukti</h3>
        <p>
          Daftar lengkap 10 dokumen yang menjadi fondasi penyusunan E-Portfolio ini beserta pembedaan statusnya
          (Dokumen Asli yang Digunakan, Dokumen Refleksi Resmi, Rekaman Video, dan Dokumen Rekonstruksi/Pengembangan):
        </p>

        <div className="filter-bar">
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'sub-nav-btn active' : 'sub-nav-btn'}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="search"
            className="search-input"
            placeholder="Cari kode, topik, atau nama dokumen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Cari dokumen bukti"
          />
        </div>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Nama Dokumen / Bukti</th>
                <th>Kategori &amp; Jenis Bukti</th>
                <th>Siklus / Topik</th>
                <th>Kegunaan</th>
                <th>Status &amp; Catatan Akademik</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map((doc) => (
                <tr key={doc.id}>
                  <td><strong>{doc.id}</strong></td>
                  <td>
                    <strong>{doc.name}</strong>
                    <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '0.25rem' }}>
                      {doc.content}
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-navy">{doc.category}</span>
                    <div style={{ fontSize: '0.78rem', marginTop: '0.25rem', color: '#334155' }}>{doc.type}</div>
                  </td>
                  <td>
                    {doc.cycle}
                    {doc.pages && (
                      <div>
                        <span className="badge badge-gold" style={{ marginTop: '0.25rem' }}>{doc.pages}</span>
                      </div>
                    )}
                  </td>
                  <td>{doc.usage}</td>
                  <td>
                    <strong style={{ color: '#047857' }}>{doc.status}</strong>
                    <br />
                    <small style={{ color: '#475569' }}>{doc.notes}</small>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setPreviewDoc(doc)}
                    >
                      🔍 Pratinjau
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}