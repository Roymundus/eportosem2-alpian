import React from 'react';
import { nonTeachingActivities } from '../data/PortofolioData';

export default function NonMengajar() {
  return (
    <div className="container">
      <div className="page-header">
        <div className="badge-row">
          <span className="badge badge-navy">DOKUMENTASI KEGIATAN</span>
          <span className="badge badge-gold">Non-Mengajar</span>
        </div>
        <h2>Kegiatan non-Mengajar</h2>
        <p>Dokumentasi kegiatan pendukung selama pelaksanaan PPG di SMK Negeri 2 Yogyakarta.</p>
      </div>

      <section className="card section-block">
        <span className="section-tag">DOKUMENTASI NON-MENGAJAR</span>
        <h3>Dokumentasi Kegiatan</h3>
        <div className="grid-2">
          {nonTeachingActivities.map((activity) => (
            <article key={activity.id} className="photo-card">
              <div className="photo-frame">
                <img src={activity.imageUrl} alt={activity.title} />
              </div>
              <div className="photo-body">
                <h4>{activity.title}</h4>
                <p style={{ fontSize: '0.86rem', color: '#475569' }}>{activity.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
