import React from 'react';
import { FaArrowUpRightFromSquare, FaXmark } from 'react-icons/fa6';

export default function PdfModal({ doc, onClose }) {
  if (!doc) return null;

  const previewUrl = doc.previewUrl || (doc.fileUrl && doc.fileUrl.endsWith('.pdf') ? doc.fileUrl : null);
  const isPdfFile = Boolean(previewUrl);
  const isYoutube = doc.fileUrl && doc.fileUrl.includes('youtu');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="badge-row" style={{ marginBottom: '0.35rem' }}>
              <span className="badge badge-navy">{doc.id}</span>
              <span className="badge badge-gold">{doc.cycle}</span>
              <span className="badge badge-emerald">{doc.pages}</span>
            </div>
            <h3>{doc.name}</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Tutup modal">
            <FaXmark /> Tutup
          </button>
        </div>

        <div className="modal-body">
          <div className="sub-card" style={{ marginBottom: '1rem' }}>
            <p style={{ marginBottom: '0.6rem' }}>{doc.content}</p>
            {doc.highlights && doc.highlights.length > 0 && (
              <ul className="styled-list">
                {doc.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {isPdfFile && (
            <div className="pdf-preview-wrapper">
              <iframe
                src={previewUrl}
                title={doc.name}
                width="100%"
                height="440px"
                style={{ border: '1px solid #cbd5e1', borderRadius: '10px' }}
              />
            </div>
          )}

          {isYoutube && (
            <div className="video-container">
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
              <FaArrowUpRightFromSquare /> Buka Dokumen Asli
            </a>
            <button className="btn btn-outline" onClick={onClose}>
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}