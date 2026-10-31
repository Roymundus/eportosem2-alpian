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
            Dokumentasi autentik perencanaan, pelaksanaan, asesmen, analisis hasil belajar, dan
            refleksi pembelajaran berkelanjutan selama Praktik Pengalaman Lapangan (PPL) di{' '}
            <strong>{teacherIdentity.school}</strong>.
          </p>
          <p style={{ marginTop: '0.85rem', color: '#f8fafc' }}>
            Disusun oleh: <strong>{teacherIdentity.name}</strong> (NIM: {teacherIdentity.nim})
          </p>
        </div>

        <div>
          <h4>Navigasi Cepat &amp; Tautan Pengumpulan</h4>
          <ul className="footer-links">
            <li><Link to="/">1. Halaman Utama Website (/)</Link></li>
            <li><Link to="/profil">2. Profil &amp; Kompetensi Guru (/profil)</Link></li>
            <li><Link to="/uts">3. E-Portfolio 1 – UTS Siklus 1 (/uts)</Link></li>
            <li><Link to="/uas">4. E-Portfolio 2 – UAS Siklus 2–4 (/uas)</Link></li>
            <li><Link to="/perjalanan">5. Matriks Perjalanan &amp; Bukti PPG (/perjalanan)</Link></li>
          </ul>
        </div>

        <div>
          <h4>Supervisi Akademik PPL</h4>
          <p>
            <strong>Dosen Pembimbing Lapangan (DPL):</strong><br />
            {teacherIdentity.supervisorLecturer}
          </p>
          <p style={{ marginTop: '0.65rem' }}>
            <strong>Guru Pamong:</strong><br />
            {teacherIdentity.mentorTeacher}
          </p>
          <p style={{ marginTop: '0.65rem', fontSize: '0.8rem', color: '#94a3b8' }}>
            Disahkan pada {teacherIdentity.approvalDate} • {teacherIdentity.university}
          </p>
        </div>
      </div>
    </footer>
  );
}