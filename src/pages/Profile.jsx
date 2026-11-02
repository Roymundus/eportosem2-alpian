import React from 'react';
import { teacherIdentity } from '../data/PortofolioData';
import { FaBuildingColumns, FaGraduationCap, FaSchool } from 'react-icons/fa6';

export default function Profile() {
  return (
    <div className="container">
      <div className="page-header portfolio-banner-profile">
        <div className="badge-row">
          <span className="badge badge-white">PROFIL CALON GURU</span>
          <span className="badge badge-gold">NIM {teacherIdentity.nim}</span>
        </div>
        <h2>{teacherIdentity.name}</h2>
        <p>
          {teacherIdentity.program} — Bidang Studi {teacherIdentity.field} • {teacherIdentity.university}
        </p>
      </div>

      {/* IDENTITAS & LOKASI PPL */}
      <section className="card section-block">
        <div className="grid-2">
          <div className="sub-card">
            <h4><FaGraduationCap /> Data Akademik</h4>
            <table className="mini-table">
              <tbody>
                <tr><td><strong>Nama</strong></td><td>{teacherIdentity.name}</td></tr>
                <tr><td><strong>NIM</strong></td><td><code>{teacherIdentity.nim}</code></td></tr>
                <tr><td><strong>Program</strong></td><td>{teacherIdentity.program} ({teacherIdentity.field})</td></tr>
                <tr><td><strong>Kampus</strong></td><td>{teacherIdentity.university}</td></tr>
              </tbody>
            </table>
          </div>

          <div className="sub-card">
            <h4><FaSchool /> Lokasi &amp; Supervisi PPL</h4>
            <table className="mini-table">
              <tbody>
                <tr><td><strong>Sekolah</strong></td><td>{teacherIdentity.school}</td></tr>
                <tr><td><strong>Kelas Utama</strong></td><td>{teacherIdentity.mainClass} ({teacherIdentity.studentCount})</td></tr>
                <tr><td><strong>Guru Pamong</strong></td><td>{teacherIdentity.mentorTeacher}</td></tr>
                <tr><td><strong>Dosen DPL</strong></td><td>{teacherIdentity.supervisorLecturer}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="card section-block">
        <h3>Visi &amp; Misi Mengajar</h3>
        <blockquote className="academic-quote">
          "{teacherIdentity.vision}"
        </blockquote>
        <div className="grid-2">
          {teacherIdentity.missions.map((m, idx) => (
            <div key={idx} className="sub-card">
              <strong>Misi {idx + 1}:</strong> {m}
            </div>
          ))}
        </div>
      </section>

      {/* KOMPETENSI & MINAT BIDANG */}
      <section className="card section-block">
        <div className="grid-2">
          <div>
            <h3>4 Kompetensi Guru</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
              {teacherIdentity.competencies.map((c, idx) => (
                <div key={idx} className="sub-card">
                  <span className="badge badge-navy">{c.domain}</span>
                  <p style={{ marginTop: '0.35rem', fontSize: '0.9rem' }}>{c.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>Fokus Bidang Keilmuan</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
              {teacherIdentity.interests.map((item, idx) => (
                <div key={idx} className="sub-card">
                  <h4><FaBuildingColumns /> {item.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}