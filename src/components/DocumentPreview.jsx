import React from 'react';

export default function DocumentPreview({ doc }) {
  const previewUrl = doc.previewUrl || (doc.fileUrl && doc.fileUrl.endsWith('.pdf') ? doc.fileUrl : null);

  if (!previewUrl) return null;

  return (
    <div className="document-preview">
      <iframe src={previewUrl} title={`Pratinjau ${doc.name}`} />
    </div>
  );
}
