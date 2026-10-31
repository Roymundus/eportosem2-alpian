import React from 'react';
import { Link } from 'react-router-dom';
import { teacherIdentity } from '../data/PortofolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>E-Portfolio PPG Calon Guru Informatika</h3>
          <p>
            Dokumentasi autentik perencanaan, pelaksanaan, asesmen, analisis, dan
            refleksi pembelajaran selama Praktik Pengalaman Lapangan (PPL) di {teacherIdentity.school}.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Disusun oleh: <strong>{teacherIdentity.name}</strong> (NIM: {teacherIdentity.nim})
          </p>
        </div>

        <div>
          <h4>Tiga Tautan Pengumpulan Langsung</h4>
          <ul className="footer-links">
            <li><Link to="/">1. Tautan Utama Website (/)</Link></li>
            <li><Link to="/uts">2. Tautan Langsung E-Portfolio 1 – UTS (/uts)</Link></li>
            <li><Link to="/uas">3. Tautan Langsung E-Portfolio 2 – UAS (/uas)</Link></li>
          </ul>
        </div>

        <div>
          <h4>Supervisi Akademik</h4>
          <p><strong>Dosen Pembimbing Lapangan:</strong><br />{teacherIdentity.supervisorLecturer}</p>
          <p style={{ marginTop: '0.5rem' }}><strong>Guru Pamong:</strong><br />{teacherIdentity.mentorTeacher}</p>
        </div>
      </div>
    </footer>
  );
}