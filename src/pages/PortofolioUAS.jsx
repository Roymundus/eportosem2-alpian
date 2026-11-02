import React, { useEffect, useState } from 'react';
import { documentInventory, studentAssignments, uasPhotoGallery } from '../data/PortofolioData';
import { FaBook, FaFilePdf, FaFolderOpen, FaLaptopCode } from 'react-icons/fa6';

export default function PortofolioUAS({ setPreviewDoc }) {
  const [uasTab, setUasTab] = useState('semua');
  const [cliInput, setCliInput] = useState('');
  const [activePhoto, setActivePhoto] = useState(0);
  const [currentDir, setCurrentDir] = useState('C:\\Users\\alpia');
  const [folders, setFolders] = useState(['Documents', 'Praktik_TP1', 'CNC_Program']);
  const [cliHistory, setCliHistory] = useState([
    'Microsoft Windows [Version 10.0.26200.9168]',
    'Ketik perintah dasar CLI (Slide 89): dir, mkdir <nama>, cd <nama>, cd .., atau cls.'
  ]);

  const sections = [
    { id: 'semua', label: 'Semua Bagian' },
    { id: 'perencanaan', label: '1. Perencanaan' },
    { id: 'materi', label: '2. Materi & Media' },
    { id: 'dokumentasi', label: '3. Dokumentasi Foto' },
    { id: 'evaluasi', label: '4. Asesmen & Refleksi' },
    { id: 'tugas-siswa', label: '5. Tugas Siswa' }
  ];

  const showSection = (id) => uasTab === 'semua' || uasTab === id;

  useEffect(() => {
    if (uasPhotoGallery.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % uasPhotoGallery.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const changePhoto = (offset) => {
    setActivePhoto((current) => (current + offset + uasPhotoGallery.length) % uasPhotoGallery.length);
  };

  const handleCliCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim();
    if (!cmd) return;
    const parts = cmd.split(/\s+/);
    const base = parts[0].toLowerCase();
    const arg = parts.slice(1).join('_');

    if (base === 'cls' || base === 'clear') {
      setCliHistory([]);
      setCliInput('');
      return;
    }

    let response = '';
    if (base === 'dir') {
      response =
        ` Directory of ${currentDir}\n` +
        folders.map((f) => `30/10/2026  13:15    <DIR>          ${f}`).join('\n');
    } else if (base === 'mkdir') {
      if (!arg) {
        response = 'Contoh penggunaan: mkdir Tugas_Baru';
      } else if (folders.includes(arg)) {
        response = `Folder ${arg} sudah ada.`;
      } else {
        setFolders((prev) => [...prev, arg]);
        response = `Folder '${arg}' berhasil dibuat.`;
      }
    } else if (base === 'cd') {
      if (!arg || arg === '..') {
        setCurrentDir('C:\\Users\\alpia');
        response = 'Berada di C:\\Users\\alpia';
      } else if (folders.map((f) => f.toLowerCase()).includes(arg.toLowerCase())) {
        const matched = folders.find((f) => f.toLowerCase() === arg.toLowerCase());
        setCurrentDir(`C:\\Users\\alpia\\${matched}`);
        response = `Berpindah ke ${matched}`;
      } else {
        response = `Folder tidak ditemukan: ${arg}`;
      }
    } else {
      response = `Perintah tersedia: dir, mkdir <nama>, cd <nama>, cd .., cls`;
    }

    setCliHistory((prev) => [...prev, `${currentDir}> ${cmd}`, response]);
    setCliInput('');
  };

  return (
    <div className="container">
      <div className="page-header portfolio-banner-uas">
        <div className="badge-row">
          <span className="badge badge-white">E-PORTFOLIO 2 — UAS</span>
          <span className="badge badge-gold">Siklus 2–4 • Sistem Blok</span>
        </div>
        <h2>Sistem Komputer &amp; Pengembangan Pembelajaran</h2>
        <p>SMK Negeri 2 Yogyakarta • Kelas X TP 1 • Materi Utama: Sistem Komputer (91 Slide PDF)</p>
        <button className="btn btn-outline btn-sm" onClick={() => setPreviewDoc(documentInventory[9])}>
          Buka RPP E-Portfolio 2 (DOCX)
        </button>
      </div>

      <div className="sub-nav">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className={uasTab === sec.id ? 'sub-nav-btn active' : 'sub-nav-btn'}
            onClick={() => setUasTab(sec.id)}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* 1. PERENCANAAN */}
      {showSection('perencanaan') && (
        <section className="card section-block">
          <span className="section-tag">1. PERENCANAAN PEMBELAJARAN</span>
          <h3>Tujuan Pembelajaran Sistem Komputer (Format ABCD)</h3>
          <div className="grid-3">
            <div className="sub-card">
              <span className="badge badge-navy">Komponen Sistem</span>
              <p style={{ marginTop: '0.45rem', fontSize: '0.9rem' }}>
                Merumuskan mekanisme <em>Input–Process–Output</em> serta klasifikasi <em>Hardware, Software,</em> dan <em>Brainware</em>.
              </p>
            </div>
            <div className="sub-card">
              <span className="badge badge-navy">Arsitektur Hardware</span>
              <p style={{ marginTop: '0.45rem', fontSize: '0.9rem' }}>
                Menganalisis fungsi perangkat internal (<em>Motherboard, CPU, RAM, ROM, SSD vs HDD, VGA, NIC</em>) dan eksternal.
              </p>
            </div>
            <div className="sub-card">
              <span className="badge badge-navy">Interaksi CLI vs GUI</span>
              <p style={{ marginTop: '0.45rem', fontSize: '0.9rem' }}>
                Membandingkan antarmuka teks (CLI) dan grafis (GUI) serta mempraktikkan perintah dasar Command Prompt (<code>cd, mkdir, dir</code>).
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 2. MATERI & MEDIA */}
      {showSection('materi') && (
        <section className="card section-block">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div>
              <span className="section-tag">2. MATERI &amp; MEDIA PEMBELAJARAN</span>
              <h3 style={{ margin: 0 }}>Pokok Materi Sistem Komputer (91 Slide PDF) &amp; Simulasi CLI</h3>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => setPreviewDoc(documentInventory[2])}>
              <FaFilePdf /> Buka Slide Sistem Komputer (91 Hal PDF)
            </button>
          </div>

          <div className="grid-2 photo-gallery-grid">
            <div className="sub-card">
              <h4>1. Konsep &amp; Jenis Komputer (Slide 1–16)</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Syarat <em>Input–Process–Output</em>, interaksi <em>Hardware–Software–Brainware</em>, serta 4 klasifikasi komputer (Mikro, PC, Mainframe, Super Komputer).
              </p>
            </div>
            <div className="sub-card">
              <h4>2. Hardware Internal &amp; Eksternal (Slide 17–64)</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Motherboard, CPU, perbandingan memori <em>RAM vs ROM</em>, penyimpanan <em>HDD vs SSD NVMe</em>, port <em>VGA vs HDMI</em>, serta perangkat Input/Output.
              </p>
            </div>
            <div className="sub-card">
              <h4>3. Software &amp; Lisensi (Slide 65–79)</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Sistem Operasi, Aplikasi, Utility, serta 5 jenis lisensi perangkat lunak (<em>Freeware, Shareware, Komersial, Adware, Open Source</em>).
              </p>
            </div>
            <div className="sub-card">
              <h4>4. Brainware &amp; CLI vs GUI (Slide 80–91)</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Peran pengguna, komparasi penggunaan sumber daya <em>GUI vs CLI</em>, dan praktik perintah direktori pada terminal Command Prompt.
              </p>
            </div>
          </div>

          <div className="sim-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h4><FaLaptopCode /> Simulator Perintah Dasar CLI (Slide 89)</h4>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <button className="btn btn-sm btn-outline" onClick={() => handleCliCommand('dir')}>dir</button>
                <button className="btn btn-sm btn-outline" onClick={() => handleCliCommand('mkdir Tugas_TP1')}>mkdir Tugas_TP1</button>
                <button className="btn btn-sm btn-outline" onClick={() => handleCliCommand('cd Praktik_TP1')}>cd Praktik_TP1</button>
                <button className="btn btn-sm btn-outline" onClick={() => handleCliCommand('cls')}>cls</button>
              </div>
            </div>

            <div className="cli-terminal">
              <div className="cli-output">
                {cliHistory.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <form
                className="cli-input-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCliCommand(cliInput);
                }}
              >
                <span className="cli-prompt">{currentDir}&gt;</span>
                <input
                  type="text"
                  className="cli-input"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="Ketik dir, mkdir NamaFolder, cd Praktik_TP1..."
                  aria-label="Input perintah CLI"
                />
                <button type="submit" className="btn btn-sm btn-primary">Jalankan</button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* 3. DOKUMENTASI FOTO PEMBELAJARAN */}
      {showSection('dokumentasi') && (
        <section className="card section-block">
          <span className="section-tag">3. DOKUMENTASI PEMBELAJARAN</span>
          <h3>Galeri Dokumentasi Mengajar Kelas X TP 1</h3>

          <div className="teaching-gallery">
            <div className="teaching-gallery-frame">
              <img
                src={uasPhotoGallery[activePhoto].imageUrl}
                alt={uasPhotoGallery[activePhoto].title}
              />
              <button
                type="button"
                className="gallery-arrow gallery-arrow-prev"
                onClick={() => changePhoto(-1)}
                aria-label="Foto sebelumnya"
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery-arrow gallery-arrow-next"
                onClick={() => changePhoto(1)}
                aria-label="Foto berikutnya"
              >
                ›
              </button>
            </div>
            <div className="teaching-gallery-caption">
              <div>
                <span className="badge badge-navy">{uasPhotoGallery[activePhoto].stage}</span>
                <h4>{uasPhotoGallery[activePhoto].title}</h4>
                <p>{uasPhotoGallery[activePhoto].caption}</p>
              </div>
              <div className="gallery-dots" aria-label="Pilih foto dokumentasi">
                {uasPhotoGallery.map((photo, index) => (
                  <button
                    key={photo.id}
                    type="button"
                    className={index === activePhoto ? 'gallery-dot active' : 'gallery-dot'}
                    onClick={() => setActivePhoto(index)}
                    aria-label={`Tampilkan foto ${index + 1}`}
                    aria-current={index === activePhoto ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. ASESMEN & REFLEKSI LINTAS SIKLUS */}
      {showSection('evaluasi') && (
        <section className="card section-block">
          <span className="section-tag">4. ASESMEN &amp; REFLEKSI</span>
          <h3>Asesmen Formatif &amp; Perkembangan Siklus 2–4</h3>

          <div className="sub-card" style={{ marginBottom: '1.15rem' }}>
            <h4>7 Pos Cek Konsep Terintegrasi di Slide Sistem Komputer</h4>
            <p style={{ fontSize: '0.9rem' }}>
              Evaluasi formatif disematkan langsung pada Slide 3–5 (Syarat Komputer), Slide 14 (Hardware vs Software), Slide 16 (Komputer Mikro), Slide 18 (Identifikasi Hardware), Slide 61 (Penalaran Hardware Eksternal), Slide 64 (Perangkat Hibrida Earphone), dan Slide 74 (Lisensi Shareware).
            </p>
          </div>

          <div className="grid-3">
            <div className="timeline-step">
              <div className="step-marker">SIKLUS 2</div>
              <div>
                <h4>Sistem Komputer (LK.4 Refleksi 2)</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Penyampaian materi dengan ukuran teks slide yang jelas dan contoh perangkat harian memudahkan pemahaman murid, disertai penguatan panduan kerja kelompok dan manajemen kelas.
                </p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: '0.5rem' }} onClick={() => setPreviewDoc(documentInventory[5])}>
                  <FaFilePdf /> Buka LK.4 Refleksi 2 (PDF)
                </button>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-marker">SIKLUS 3</div>
              <div>
                <h4>Analisis Data (LK.4 Refleksi 3)</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Materi pengolahan nilai ke dalam tabel dan diagram relevan dengan kebutuhan murid, diikuti penataan sistematika penyusunan dokumen RPP agar alur diskusi semakin runtut.
                </p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: '0.5rem' }} onClick={() => setPreviewDoc(documentInventory[6])}>
                  <FaFilePdf /> Buka LK.4 Refleksi 3 (PDF)
                </button>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-marker">SIKLUS 4</div>
              <div>
                <h4>Praktik Microsoft Word (LK.4 Refleksi 4)</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Menerapkan demonstrasi langsung diikuti praktik mandiri pembuatan dokumen laporan dengan panduan langkah demi langkah (<em>step-by-step</em>) dan pendampingan merata.
                </p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: '0.5rem' }} onClick={() => setPreviewDoc(documentInventory[7])}>
                  <FaFilePdf /> Buka LK.4 Refleksi 4 (PDF)
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {showSection('tugas-siswa') && (
        <section className="card section-block">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <span className="section-tag">5. CONTOH TUGAS SISWA</span>
              <h3>Contoh Tugas Adek Bagus (Presensi 3) — X TP 1</h3>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1Zp8M0RHSQI_zlqriCMjoeBHzeS-Q_b5L"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <FaFolderOpen /> Buka Folder Tugas Siswa
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '1rem' }}>
            Tiga contoh tugas dilampirkan di website. Arsip tugas lainnya dapat diakses melalui folder Google Drive.
          </p>

          <div className="grid-3">
            {studentAssignments.map((assignment) => (
              <div key={assignment.id} className="sub-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="badge badge-navy">{assignment.type}</span>
                  <h4 style={{ marginTop: '0.55rem' }}>{assignment.name}</h4>
                  <p style={{ fontSize: '0.86rem', color: '#475569' }}>{assignment.content}</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{assignment.student}</p>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => setPreviewDoc(assignment)}>
                  <FaBook /> Buka Contoh Tugas
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}