import React, { useState } from 'react';
import { documentInventory, growthStages } from '../data/PortofolioData';

export default function Journey({ setPreviewDoc }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Materi Slide', 'Video Praktik', 'Refleksi Resmi'];

  const filteredDocs = documentInventory.filter(
    (doc) => selectedCategory === 'Semua' || doc.category === selectedCategory
  );

  return (
    <div className="container">
      <div className="page-header">
        <div className="badge-row">
          <span className="badge badge-navy">REKAM JEJAK &amp; ARSIP BUKTI</span>
          <span className="badge badge-emerald">8 Bukti Terverifikasi</span>
        </div>
        <h2>Perjalanan PPL &amp; Dokumen Bukti</h2>
        <p>Ringkasan perkembangan dari tahap Asistensi hingga Siklus 4 beserta dokumen bukti resmi.</p>
      </div>

      {/* RINGKASAN 5 TAHAP PPL */}
      <section className="card section-block">
        <h3>5 Tahap Perkembangan Praktik Mengajar</h3>
        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tahap</th>
                <th>Topik Pembelajaran</th>
                <th>Fokus Perbaikan &amp; Capaian Utama</th>
                <th>Dokumen</th>
              </tr>
            </thead>
            <tbody>
              {growthStages.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <strong>{item.stage}</strong>{' '}
                    <span className="badge badge-navy">{item.code}</span>
                  </td>
                  <td>{item.topic}</td>
                  <td>{item.focus}</td>
                  <td>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setPreviewDoc(documentInventory[item.docIndex])}
                    >
                      Lihat PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DAFTAR 8 DOKUMEN ASLI */}
      <section className="card section-block">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0 }}>Arsip Dokumen &amp; Video Praktik</h3>
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
        </div>

        <div className="grid-2">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="sub-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="badge-row" style={{ marginBottom: '0.45rem', justifyContent: 'space-between' }}>
                  <span className="badge badge-navy">{doc.cycle}</span>
                  <span className="badge badge-emerald">{doc.pages}</span>
                </div>
                <h4>{doc.name}</h4>
                <p style={{ fontSize: '0.88rem', color: '#475569', margin: '0.35rem 0 0.85rem' }}>
                  {doc.content}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#047857' }}>✓ {doc.status}</span>
                <button className="btn btn-primary btn-sm" onClick={() => setPreviewDoc(doc)}>
                  🔍 Buka Pratinjau
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}