import React from 'react';
import { Link } from 'react-router-dom';
import { teacherIdentity } from '../data/PortofolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>E-Portfolio PPG Informatika</h3>
          <p>
            Dokumentasi Praktik Pengalaman Lapangan (PPL) di <strong>{teacherIdentity.school}</strong> oleh{' '}
            <strong>{teacherIdentity.name}</strong> (NIM: {teacherIdentity.nim}).
          </p>
        </div>

        <div>
          <h4>Menu Cepat</h4>
          <ul className="footer-links">
            <li><Link to="/">Beranda (/)</Link></li>
            <li><Link to="/uts">E-Portfolio 1 – UTS (/uts)</Link></li>
            <li><Link to="/uas">E-Portfolio 2 – UAS (/uas)</Link></li>
          </ul>
        </div>

        <div>
          <h4>Supervisi PPL</h4>
          <p><strong>DPL:</strong> {teacherIdentity.supervisorLecturer}</p>
          <p style={{ marginTop: '0.35rem' }}><strong>Guru Pamong:</strong> {teacherIdentity.mentorTeacher}</p>
        </div>
      </div>
    </footer>
  );
}