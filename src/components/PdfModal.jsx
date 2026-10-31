import React from 'react';

export default function PdfModal({ doc, onClose }) {
  if (!doc) return null;

  const isPdfFile = doc.fileUrl && doc.fileUrl.endsWith('.pdf');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card modal-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge badge-navy">{doc.type}</span>
            <h3 style={{ marginTop: '0.35rem' }}>{doc.name}</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕ Tutup
          </button>
        </div>

        <div className="modal-body">
          <div className="grid-2" style={{ marginBottom: '1rem' }}>
            <div>
              <p><strong>Siklus / Topik:</strong> {doc.cycle}</p>
              <p><strong>Status Ketersediaan:</strong> {doc.status}</p>
            </div>
            <div>
              <p><strong>Kegunaan:</strong> {doc.usage}</p>
              <p><strong>Catatan Akademik:</strong> {doc.notes}</p>
            </div>
          </div>

          <p><strong>Ringkasan Isi Terverifikasi:</strong> {doc.content}</p>

          {isPdfFile && (
            <div className="pdf-preview-wrapper">
              <iframe
                src={doc.fileUrl}
                title={doc.name}
                width="100%"
                height="420px"
                style={{ border: '1px solid #cbd5e1', borderRadius: '8px', marginTop: '0.75rem' }}
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
          </div>
        </div>
      </div>
    </div>
  );
}