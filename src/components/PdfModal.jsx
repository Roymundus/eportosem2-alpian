import React from 'react';

export default function PdfModal({ doc, onClose }) {
  if (!doc) return null;

  const isPdfFile = doc.fileUrl && doc.fileUrl.endsWith('.pdf');
  const isYoutube = doc.fileUrl && doc.fileUrl.includes('youtu');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="badge-row" style={{ marginBottom: '0.4rem' }}>
              <span className="badge badge-navy">{doc.id}</span>
              <span className="badge badge-gold">{doc.type}</span>
              {doc.pages && <span className="badge badge-emerald">{doc.pages}</span>}
            </div>
            <h3>{doc.name}</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Tutup modal">
            ✕ Tutup
          </button>
        </div>

        <div className="modal-body">
          <div className="grid-2" style={{ marginBottom: '1.1rem' }}>
            <div className="sub-card">
              <p><strong>Siklus / Tahapan:</strong> {doc.cycle}</p>
              <p style={{ marginTop: '0.35rem' }}><strong>Status Bukti:</strong> {doc.status}</p>
            </div>
            <div className="sub-card">
              <p><strong>Peruntukan Portofolio:</strong> {doc.usage}</p>
              <p style={{ marginTop: '0.35rem' }}><strong>Catatan Akademik:</strong> {doc.notes}</p>
            </div>
          </div>

          <div className="sub-card" style={{ marginBottom: '1rem' }}>
            <h4>Ringkasan Eksekutif Dokumen</h4>
            <p>{doc.content}</p>
            {doc.highlights && doc.highlights.length > 0 && (
              <div style={{ marginTop: '0.85rem' }}>
                <strong>Butir-Butir Isi Terverifikasi dari Dokumen Asli:</strong>
                <ul className="styled-list" style={{ marginTop: '0.4rem' }}>
                  {doc.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {isPdfFile && (
            <div className="pdf-preview-wrapper">
              <iframe
                src={doc.fileUrl}
                title={doc.name}
                width="100%"
                height="440px"
                style={{ border: '1px solid #cbd5e1', borderRadius: '10px', marginTop: '0.5rem' }}
              />
            </div>
          )}

          {isYoutube && (
            <div className="video-container" style={{ marginTop: '0.75rem' }}>
              <iframe
                src="https://www.youtube.com/embed/CBBoBcWRp1o"
                title={doc.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="modal-actions">
            <a
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Buka Dokumen / Sumber di Tab Baru ↗
            </a>
            <button className="btn btn-outline" onClick={onClose}>
              Kembali ke Halaman
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}