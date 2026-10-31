import React from 'react';
import { useNavigate } from 'react-router-dom';
import { teacherIdentity, documentInventory } from '../data/PortofolioData';

export default function Profile({ setPreviewDoc }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="page-header portfolio-banner-profile">
        <div className="badge-row">
          <span className="badge badge-white">PROFIL &amp; IDENTITAS AKADEMIK</span>
          <span className="badge badge-gold">PPG Calon Guru Informatika UNY</span>
        </div>
        <h2>{teacherIdentity.name}</h2>
        <p>
          NIM {teacherIdentity.nim} • Bidang Studi {teacherIdentity.field} • Praktik Pengalaman Lapangan (PPL) di{' '}
          {teacherIdentity.school}
        </p>
      </div>

      {/* ── IDENTITAS LENGKAP & SUPERVISI ── */}
      <section className="card section-block">
        <span className="section-tag">IDENTITAS PROFESIONAL &amp; KONTEKS PPL</span>
        <h3>Data Diri Calon Guru &amp; Ekosistem Pembelajaran</h3>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          <div className="sub-card">
            <h4>🎓 Identitas Akademik Mahasiswa PPG</h4>
            <table className="mini-table" style={{ marginTop: '0.5rem' }}>
              <tbody>
                <tr>
                  <td><strong>Nama Lengkap</strong></td>
                  <td>{teacherIdentity.name}</td>
                </tr>
                <tr>
                  <td><strong>Nomor Induk Mahasiswa</strong></td>
                  <td><code>{teacherIdentity.nim}</code></td>
                </tr>
                <tr>
                  <td><strong>Program Pendidikan</strong></td>
                  <td>{teacherIdentity.program}</td>
                </tr>
                <tr>
                  <td><strong>Bidang Studi</strong></td>
                  <td>{teacherIdentity.field}</td>
                </tr>
                <tr>
                  <td><strong>LPTK Penyelenggara</strong></td>
                  <td>{teacherIdentity.university}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sub-card">
            <h4>🏫 Konteks Sekolah Mitra &amp; Supervisi PPL</h4>
            <table className="mini-table" style={{ marginTop: '0.5rem' }}>
              <tbody>
                <tr>
                  <td><strong>Sekolah Mitra PPL</strong></td>
                  <td>{teacherIdentity.school}</td>
                </tr>
                <tr>
                  <td><strong>Mata Pelajaran / Fase</strong></td>
                  <td>{teacherIdentity.subject}</td>
                </tr>
                <tr>
                  <td><strong>Kelas Utama &amp; Jumlah</strong></td>
                  <td>{teacherIdentity.mainClass} ({teacherIdentity.studentCount})</td>
                </tr>
                <tr>
                  <td><strong>Karakteristik Jadwal</strong></td>
                  <td>{teacherIdentity.scheduleContext}</td>
                </tr>
                <tr>
                  <td><strong>Guru Pamong</strong></td>
                  <td>{teacherIdentity.mentorTeacher}</td>
                </tr>
                <tr>
                  <td><strong>Dosen Pembimbing (DPL)</strong></td>
                  <td>{teacherIdentity.supervisorLecturer}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── VISI & MISI PENDIDIK ── */}
      <section className="card section-block">
        <span className="section-tag">ARAH PEDAGOGIK</span>
        <h3>Visi &amp; Misi Profesional sebagai Calon Guru Informatika</h3>
        <blockquote className="academic-quote">
          "{teacherIdentity.vision}"
        </blockquote>

        <div className="grid-2" style={{ marginTop: '1.15rem' }}>
          {teacherIdentity.missions.map((mission, idx) => (
            <div key={idx} className="sub-card">
              <span className="badge badge-navy">Misi {idx + 1}</span>
              <p style={{ marginTop: '0.55rem' }}>{mission}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4 KOMPETENSI UTAMA GURU PPG ── */}
      <section className="card section-block">
        <span className="section-tag">CAPAIAN KOMPETENSI</span>
        <h3>Pemetaan 4 Kompetensi Guru Selama Praktik Pengalaman Lapangan</h3>
        <p>
          Bukti nyata penguasaan kompetensi Pedagogik, Profesional, Kepribadian, dan Sosial yang terbangun
          melalui proses asistensi, pelaksanaan siklus mandiri, dan refleksi bersama Guru Pamong serta DPL:
        </p>

        <div className="grid-2" style={{ marginTop: '1.1rem' }}>
          {teacherIdentity.competencies.map((comp, idx) => (
            <div key={idx} className="sub-card">
              <div className="badge-row" style={{ marginBottom: '0.4rem' }}>
                <span className="badge badge-navy">{comp.domain}</span>
                <span className="badge badge-gold">{comp.badge}</span>
              </div>
              <h4>{comp.domain}</h4>
              <p style={{ marginBottom: '0.65rem' }}>{comp.summary}</p>
              <div style={{ fontSize: '0.84rem', background: '#fff', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <strong>Bukti Autentik di Portofolio:</strong> {comp.evidence}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BIDANG MINAT & KEAHLIAN INFORMATIKA ── */}
      <section className="card section-block">
        <span className="section-tag">SPESIALISASI KEILMUAN</span>
        <h3>Fokus Keilmuan Informatika &amp; Relevansi Vokasi</h3>
        <div className="grid-3">
          {teacherIdentity.interests.map((item, idx) => (
            <div key={idx} className="sub-card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.35rem' }}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="analysis-box">
          <h4>Pendekatan Kontekstual untuk Siswa SMK Teknik Permesinan</h4>
          <p>
            Sebagai guru Informatika di SMK Negeri 2 Yogyakarta, saya berupaya agar materi komputasi tidak
            terasa asing bagi siswa jurusan <strong>Teknik Permesinan</strong>. Pada Siklus 1, konsep
            <em> Abstraksi</em> dalam Berpikir Komputasional saya kaitkan langsung dengan identifikasi bagian
            utama <strong>Mesin Bubut</strong> (Prinsip Kerja, Fungsi Utama, dan Jenis-jenisnya). Pada Siklus 2,
            konsep memori <em>ROM/RAM</em> serta antarmuka <em>CLI vs GUI</em> saya hubungkan dengan cara kerja
            instruksi program pada <strong>Mesin CNC (Computer Numerical Control)</strong>.
          </p>
        </div>

        <div style={{ marginTop: '1.35rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate('/uts')}>
            Lihat Bukti Mengajar di E-Portfolio UTS →
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/uas')}>
            Lihat Pengembangan Materi di E-Portfolio UAS →
          </button>
          <button className="btn btn-outline" onClick={() => setPreviewDoc(documentInventory[3])}>
            Pratinjau LK.3 Refleksi Asistensi (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}