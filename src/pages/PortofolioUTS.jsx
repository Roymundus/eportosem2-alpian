import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { documentInventory, uasCandidateComparison } from '../data/PortofolioData';

export default function PortofolioUAS({ setPreviewDoc }) {
  const [uasTab, setUasTab] = useState('semua');

  const sections = [
    { id: 'semua', label: 'Tampilkan Semua' },
    { id: 'pemilihan', label: 'Evaluasi Kandidat Materi' },
    { id: 'pendahuluan', label: '1. Pendahuluan' },
    { id: 'perencanaan', label: '2. Perencanaan' },
    { id: 'materi', label: '3. Materi (91 Slide)' },
    { id: 'media', label: '4. Media' },
    { id: 'dokumentasi', label: '5. Dokumentasi' },
    { id: 'asesmen', label: '6. Asesmen' },
    { id: 'refleksi', label: '7. Refleksi & Perkembangan' }
  ];

  const showSection = (id) => uasTab === 'semua' || uasTab === id;

  return (
    <div className="container">
      <div className="page-header portfolio-banner-uas">
        <div className="badge-row">
          <span className="badge badge-white">BAGIAN II — E-PORTFOLIO 2 (UAS)</span>
          <span className="badge badge-navy">Praktik Terbaik Siklus 2–4 & Sistem Blok</span>
        </div>
        <h2>Sistem Komputer & Pengembangan Kualitas Pembelajaran Lintas Siklus</h2>
        <p>
          Kelas X TP 1 (Teknik Permesinan 1) • SMK Negeri 2 Yogyakarta • Materi Utama Terpilih: Sistem Komputer (Siklus 2)
        </p>
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

      {/* MATRIKS EVALUASI PEMILIHAN MATERI UAS */}
      {showSection('pemilihan') && (
        <section className="card section-block">
          <div className="section-tag">RASIONALISASI PEMILIHAN MATERI UAS</div>
          <h3>Evaluasi Tiga Kandidat Materi (Siklus 2, Siklus 3, dan Siklus 4)</h3>
          <p>
            Sesuai pedoman E-Portfolio UAS, pemilihan materi tidak dipaksakan menampilkan seluruh topik apabila bukti
            pendukungnya belum lengkap. Berikut adalah perbandingan objektif ketiga kandidat materi berdasarkan
            dokumen yang tersedia:
          </p>

          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Kriteria Evaluasi</th>
                  <th className="highlight-col">Kandidat 1: Sistem Komputer (Siklus 2) — TERPILIH</th>
                  <th>Kandidat 2: Analisis Data (Siklus 3)</th>
                  <th>Kandidat 3: Microsoft Word (Siklus 4)</th>
                </tr>
              </thead>
              <tbody>
                {uasCandidateComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.aspect}</strong></td>
                    <td className="highlight-col">{row.c1}</td>
                    <td>{row.c2}</td>
                    <td>{row.c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="alert-box alert-info">
            <strong>Keputusan Akademik:</strong> Materi <strong>Sistem Komputer (Siklus 2)</strong> dipilih sebagai
            fokus utama E-Portfolio UAS karena memiliki bukti bahan ajar paling lengkap dan terverifikasi
            (<code>Sistem Komputer - X TP 1 SMK N 2 Yogyakarta_compressed.pdf</code> setebal 91 halaman serta
            <code>LK.4 Refleksi 2</code>). Sementara itu, bukti dari <strong>Siklus 3 (Analisis Data)</strong> dan
            <strong>Siklus 4 (Microsoft Word)</strong> diintegrasikan pada Bagian 7 untuk membuktikan kesinambungan
            tindak lanjut perbaikan RPP dan metode praktik langsung secara jujur tanpa mengarang dokumen yang belum tersedia.
          </div>
        </section>
      )}

      {/* 1. PENDAHULUAN */}
      {showSection('pendahuluan') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 1</div>
          <h3>1. Pendahuluan & Konteks Sistem Blok</h3>
          <div className="grid-2">
            <div>
              <h4>Latar Belakang & Karakteristik Pembelajaran</h4>
              <p>
                Memasuki Siklus 2 di kelas <strong>X Teknik Permesinan 1 (36 peserta didik)</strong>, fokus
                pembelajaran beralih pada elemen <strong>Sistem Komputer</strong>. Tantangan pembelajaran siang
                hari (pukul 12.30–15.00 WIB) dan keberagaman pemahaman awal peserta didik tetap menjadi konteks
                utama yang harus dikelola. Sebagian peserta didik setiap hari menggunakan <em>smartphone</em> dan
                komputer, namun belum memahami bagaimana komponen perangkat keras (<em>hardware</em>), perangkat
                lunak (<em>software</em>), dan pengguna (<em>brainware</em>) saling berinteraksi mengolah data.
              </p>
            </div>
            <div>
              <h4>Peran Sistem Penjadwalan Blok dalam Perbaikan Pembelajaran</h4>
              <p>
                SMK Negeri 2 Yogyakarta menerapkan <strong>sistem jadwal blok</strong> di mana saya mengajar dua
                kelas secara bergantian. Sistem blok ini memungkinkan terjadinya siklus perbaikan atas materi yang
                sama:
              </p>
              <ul className="styled-list">
                <li>
                  <strong>Perbaikan dari Siklus 1 ke Siklus 2:</strong> Menindaklanjuti masukan Guru Pamong pada
                  Siklus 1 tentang ukuran huruf slide yang terlalu kecil, slide materi Sistem Komputer dirancang
                  ulang dengan tipografi besar, kontras jelas, dan pemenggalan konsep satu topik per slide.
                </li>
                <li>
                  <strong>Perbaikan Antar-Blok pada Siklus 2:</strong> Ketika pelaksanaan awal Sistem Komputer
                  mengalami kendala pada penugasan murid akibat LKM yang belum disiapkan matang (LK.4 Refleksi 2),
                  evaluasi tersebut langsung digunakan untuk menyempurnakan LKM dan instruksi kerja sebelum materi
                  digunakan kembali pada kelas blok berikutnya.
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 2. PERENCANAAN PEMBELAJARAN */}
      {showSection('perencanaan') && (
        <section className="card section-block" id="pengembangan-rpp-uas">
          <div className="section-tag">BAGIAN 2</div>
          <h3>2. Perencanaan Pembelajaran (Rekonstruksi & Pengembangan Perangkat Ajar)</h3>

          <div className="alert-box alert-warning">
            <strong>Label Status Dokumen:</strong> Perangkat pembelajaran (Modul Ajar/RPP dan LKM) di bawah ini
            merupakan <strong>Dokumen Rekonstruksi dan Pengembangan (Penyempurnaan)</strong> yang disusun
            berdasarkan materi asli <code>Sistem Komputer - X TP 1 SMK N 2 Yogyakarta_compressed.pdf</code> serta
            hasil evaluasi kritis pada <code>LK.3</code> dan <code>LK.4 Refleksi 2</code>.
          </div>

          <div className="grid-2">
            <div className="sub-card">
              <h4>Tujuan Pembelajaran (Format ABCD Hasil Perbaikan)</h4>
              <ol className="styled-list">
                <li>
                  Melalui pengamatan perangkat teknologi sehari-hari (PC, laptop, <em>smartphone</em>, kalkulator)
                  dan tanya jawab pemantik <strong>(Condition)</strong>, peserta didik kelas X TP 1
                  <strong>(Audience)</strong> mampu merumuskan pengertian sistem komputer berdasarkan tiga syarat
                  utamanya (<em>Input, Process, Output</em>) serta mengklasifikasikan komponen <em>Hardware,
                  Software,</em> dan <em>Brainware</em> <strong>(Behavior)</strong> secara tepat <strong>(Degree)</strong>.
                </li>
                <li>
                  Melalui kegiatan eksplorasi visual dan diskusi kelompok menggunakan LKM terstruktur
                  <strong>(Condition)</strong>, peserta didik <strong>(Audience)</strong> mampu menganalisis fungsi
                  serta perbedaan perangkat keras internal (<em>Motherboard, CPU, RAM, ROM, HDD, SSD, VGA, Sound
                  Card, NIC</em>) dan eksternal (<em>Input/Output Device</em>) <strong>(Behavior)</strong> dengan
                  ketepatan minimal 85% <strong>(Degree)</strong>.
                </li>
                <li>
                  Melalui demonstrasi langsung dan studi komparasi antarmuka <strong>(Condition)</strong>, peserta
                  didik <strong>(Audience)</strong> mampu membandingkan karakteristik interaksi berbasis teks
                  (<em>Command Line Interface</em> / CLI) dan grafis (<em>Graphical User Interface</em> / GUI)
                  serta menjalankan perintah dasar direktori (<code>cd</code>, <code>mkdir</code>, <code>dir</code>)
                  pada Command Prompt <strong>(Behavior)</strong> sesuai format perintah yang benar <strong>(Degree)</strong>.
                </li>
              </ol>
            </div>

            <div className="sub-card">
              <h4>Perbandingan Jujur: Desain Awal vs Penyempurnaan LKM</h4>
              <p>
                Salah satu bukti perkembangan terpenting dari perencanaan siklus ini adalah perbaikan atas kesalahan
                rancangan tugas pada pelaksanaan awal:
              </p>
              <table className="mini-table" style={{ marginTop: '0.5rem' }}>
                <thead>
                  <tr>
                    <th>Aspek</th>
                    <th>Pelaksanaan Awal (Bukti LK.4 Refleksi 2)</th>
                    <th>Rancangan Penyempurnaan (Blok Berikutnya)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Topik Tugas / LKM</strong></td>
                    <td>Simulasi mengecek kebenaran informasi di media sosial Instagram (kurang selaras dengan inti Sistem Komputer).</td>
                    <td>Identifikasi Spesifikasi Komponen Komputer (RAM/ROM/SSD/HDD) & Eksperimen Perintah Dasar CLI (<code>cd, mkdir, dir</code>).</td>
                  </tr>
                  <tr>
                    <td><strong>Kesiapan Instruksi</strong></td>
                    <td>LKM belum dipersiapkan dengan baik; banyak murid bingung cara mengerjakannya dan ada yang tidak mengumpulkan.</td>
                    <td>Dilengkapi petunjuk langkah demi langkah (<em>step-by-step</em>), tabel kerja terstruktur, dan rubrik penilaian spesifik.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 3. MATERI PEMBELAJARAN */}
      {showSection('materi') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 3</div>
          <h3>3. Materi Pembelajaran (Berdasarkan 91 Slide PDF Asli)</h3>
          <p>
            Materi bersumber langsung dari dokumen <code>Sistem Komputer - X TP 1 SMK N 2 Yogyakarta_compressed.pdf</code>
            (91 halaman) yang digunakan di kelas X Teknik Permesinan 1:
          </p>

          <div className="grid-2" style={{ marginTop: '1rem' }}>
            <div className="sub-card">
              <h4>1. Konsep Komputer & Klasifikasinya (Slide 1–16)</h4>
              <ul className="styled-list">
                <li><strong>Pemantik Kognitif (Slide 3–5):</strong> Menguji apakah PC, <em>Smartphone</em>, dan Kalkulator termasuk komputer.</li>
                <li><strong>Syarat Mutlak Komputer (Slide 6–9):</strong> Menerima masukan (<em>Input</em>), memproses secara komputasi (<em>Process</em>), dan menghasilkan keluaran (<em>Output</em>: Gambar, Teks, Video, Suara).</li>
                <li><strong>Tiga Komponen Utama (Slide 10–14):</strong> Interaksi antara <em>Hardware</em> (komponen fisik), <em>Software</em> (kode program), dan <em>Brainware</em> (programmer, pelajar, pengajar).</li>
                <li><strong>4 Jenis Komputer (Slide 15–16):</strong> <em>Komputer Mikro</em> (menggunakan mikroprosesor, termasuk smartphone), <em>Personal Computer</em>, <em>Komputer Mainframe</em> (server perbankan), dan <em>Super Komputer</em> (triliunan instruksi/detik untuk cuaca, militer, transportasi).</li>
              </ul>
            </div>

            <div className="sub-card">
              <h4>2. Hardware Internal & Eksternal (Slide 17–64)</h4>
              <ul className="styled-list">
                <li><strong>Motherboard & CPU (Slide 22–23):</strong> Motherboard sebagai pusat komunikasi slot internal; CPU sebagai otak eksekusi instruksi dan <em>boot system</em>.</li>
                <li><strong>Memori & Penyimpanan (Slide 24–39):</strong> Perbandingan mendalam antara <strong>RAM</strong> (memori sementara/<em>volatile</em>, baca-tulis-modifikasi cepat), <strong>ROM</strong> (memori permanen <em>read-only</em> penyimpan program dasar), <strong>HDD</strong> (penyimpanan permanen piringan berputar), dan <strong>SSD NVMe</strong> (berbasis chip, daya 2–3W, waktu booting 10–13 detik, kecepatan 200–550 MB/s).</li>
                <li><strong>Kartu Ekspansi & Port (Slide 40–56):</strong> <em>Graphic Card / VGA</em>, perbandingan port VGA (analog visual) vs HDMI (digital visual + audio), <em>Sound Card</em>, dan <em>Network Interface Card (NIC)</em> port RJ-45.</li>
                <li><strong>Hardware Eksternal (Slide 57–64):</strong> Perangkat <em>Input</em> (Keyboard, Mouse, Webcam, Microphone) dan <em>Output</em> (Monitor, Proyektor, Printer, Speaker).</li>
              </ul>
            </div>

            <div className="sub-card">
              <h4>3. Software & Lisensi Hak Cipta (Slide 65–79)</h4>
              <ul className="styled-list">
                <li><strong>Karakteristik & Contoh (Slide 65–69):</strong> Seperangkat instruksi program nirfisik (contoh: aplikasi belanja daring & layanan streaming).</li>
                <li><strong>Hak Cipta & 5 Jenis Lisensi (Slide 71–74):</strong> <em>Freeware, Shareware</em> (batas waktu percobaan), <em>Komersial, Adware,</em> dan <em>Open Source</em>.</li>
                <li><strong>Klasifikasi Software (Slide 75–79):</strong> <em>Operating System</em> (Windows, macOS, Linux, ChromeOS, Android, iOS, UNIX, BSD), <em>Software Aplikasi</em>, <em>Utility Software</em> (antivirus, backup, kompresi file), dan pengantar <em>Software Programming</em>.</li>
              </ul>
            </div>

            <div className="sub-card">
              <h4>4. Brainware & Interaksi CLI vs GUI (Slide 80–91)</h4>
              <ul className="styled-list">
                <li><strong>Peran Brainware (Slide 82–83):</strong> Hardware dan software tidak dapat menjalankan fungsi tanpa inisiasi perintah dari pengguna.</li>
                <li><strong>Command Line Interface / CLI (Slide 85–90):</strong> Interaksi berbasis <em>Text-Terminal</em> (Command Prompt) dengan aturan sintaks ketat dan perintah direktori: <code>cd</code> (pindah direktori), <code>mkdir</code> (buat folder baru), dan <code>dir</code> (lihat daftar isi direktori).</li>
                <li><strong>Graphical User Interface / GUI & Matriks Komparasi (Slide 87 & 91):</strong> Perbandingan lengkap CLI vs GUI dari aspek kemudahan pemula, konsumsi RAM/CPU, otomatisasi skrip, kontrol sistem, dan stabilitas koneksi jarak jauh (SSH/CMD).</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <button
              className="btn btn-primary"
              onClick={() => setPreviewDoc(documentInventory[2])}
            >
              Pratinjau & Buka File PDF Sistem Komputer (91 Slide)
            </button>
          </div>

          <div className="analysis-box">
            <h4>Analisis Materi: Relevansi dengan Teknik Permesinan & Evaluasi Kualitas Slide</h4>
            <p>
              <strong>Keterkaitan dengan Teknik Permesinan:</strong> Bagi peserta didik kelas X Teknik Permesinan,
              pemahaman tentang mekanisme <em>Input–Process–Output</em>, perbedaan memori <em>ROM</em> (penyimpan
              <em>firmware</em> permanen mesin) dengan <em>RAM</em>, serta cara kerja antarmuka <em>CLI</em> (baris
              kode instruksi) dan <em>GUI</em> merupakan fondasi langsung untuk memahami cara kerja sistem kontrol
              <strong>Mesin CNC (Computer Numerical Control)</strong> dan komputer industri di bengkel pemesinan.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Kelebihan & Kekurangan:</strong> Kelebihan utama materi ini adalah visualisasinya yang sangat
              jelas dan ukurannya yang ramah baca bagi seluruh ruang kelas (membuktikan perbaikan nyata atas masukan
              Guru Pamong di Siklus 1). Adapun kekurangan minor yang dicatat secara objektif adalah adanya typo
              label <code>Input Device</code> ganda pada slide 59 (yang langsung terkoreksi di slide 60), penulisan
              <code>SDD</code> pada tabel slide 39, serta slide 79 (<code>Software Programing</code>) yang belum
              dilengkapi penjabaran isi.
            </p>
          </div>
        </section>
      )}

      {/* 4. MEDIA PEMBELAJARAN */}
      {showSection('media') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 4</div>
          <h3>4. Media Pembelajaran</h3>
          <div className="grid-2">
            <div className="sub-card">
              <h4>1. Slide Presentasi Visual Terstruktur (91 Halaman)</h4>
              <p>
                Media utama berupa slide presentasi yang menerapkan prinsip <em>segmented learning</em>: satu konsep
                komponen perangkat keras dijelaskan secara bertahap dalam 2–3 slide bergambar besar agar beban
                kognitif siswa tidak berlebihan dan tulisan terbaca jelas dari barisan belakang.
              </p>
            </div>
            <div className="sub-card">
              <h4>2. Demonstrasi Langsung Command Prompt (`cmd.exe`)</h4>
              <p>
                Menampilkan antarmuka asli Windows Command Prompt (`Microsoft Windows [Version 10.0.26200.9168]`,
                path `C:\Users\alpia&gt;`) pada slide 86 & 88 sekaligus mendemonstrasikan cara mengetikkan perintah
                <code>cd</code>, <code>mkdir</code>, dan <code>dir</code> melalui proyektor.
              </p>
            </div>
          </div>

          <div className="analysis-box">
            <h4>Analisis Efektivitas Media</h4>
            <p>
              Sebagaimana tercermin dalam <code>LK.4.PPLM Refleksi 2</code>, penggunaan media visual yang dikaitkan
              dengan perangkat sehari-hari (laptop, PC, <em>smartphone</em>) efektif membantu murid memperoleh
              gambaran konkret mengenai bentuk fisik komponen internal komputer. Namun, refleksi siklus ini
              menunjukkan pelajaran penting bahwa <strong>efektivitas media tidak hanya ditentukan oleh kualitas
              visual slide, melainkan oleh cara guru mengintegrasikannya dengan aktivitas kerja murid</strong>.
              Tanpa LKM kolaboratif yang terstruktur, sebagian murid tetap cenderung pasif sebagai penonton.
            </p>
          </div>
        </section>
      )}

      {/* 5. DOKUMENTASI PRAKTIK */}
      {showSection('dokumentasi') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 5</div>
          <h3>5. Dokumentasi Praktik Pembelajaran</h3>

          <div className="alert-box alert-warning">
            <h4>Pernyataan Kejujuran Akademik Terkait Dokumentasi Video Siklus 2</h4>
            <p>
              Mematuhi prinsip kejujuran akademik secara ketat, <strong>rekaman video praktik mengajar untuk materi
              Sistem Komputer (Siklus 2) tidak tersedia</strong>. Saya tidak menggunakan atau mengklaim video dari
              Siklus 1 (Struktur Data dan Algoritma) seolah-olah berasal dari Siklus 2.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Bukti Autentik Pelaksanaan yang Tersedia & Rekomendasi Konfirmasi Dosen:</strong>
            </p>
            <ul className="styled-list">
              <li>
                <strong>Bukti Dokumen Materi Asli Kelas X TP 1:</strong> File <code>Sistem Komputer - X TP 1 SMK N 2
                Yogyakarta_compressed.pdf</code> (91 halaman) yang memuat identitas spesifik kelas dan tangkapan
                layar terminal asli perangkat pengajar (`C:\Users\alpia&gt;`).
              </li>
              <li>
                <strong>Bukti Lembar Pengesahan Resmi LK.4 Refleksi 2:</strong> Dokumen refleksi pelaksanaan
                pembelajaran Sistem Komputer yang telah diperiksa dan ditandatangani oleh Guru Pamong (Bapak
                Juwari, S.T.) dan Dosen Pembimbing Lapangan (Bapak Dr. Ir. Satriyo Agung Dewanto, M.Pd.) pada
                30 Oktober 2026.
              </li>
              <li>
                <strong>Alternatif Konfirmasi Rubrik:</strong> Apabila rubrik penilaian E-Portfolio UAS mewajibkan
                peninjauan keterampilan mengajar melalui video, asesor/dosen pengampu dapat meninjau rekaman
                autentik pada halaman <Link to="/uts">E-Portfolio UTS</Link> dengan catatan transparan bahwa video
                tersebut merupakan rekaman praktik materi Struktur Data dan Algoritma.
              </li>
            </ul>
          </div>
        </section>
      )}

      {/* 6. ASESMEN DAN ANALISIS HASIL BELAJAR */}
      {showSection('asesmen') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 6</div>
          <h3>6. Asesmen dan Analisis Hasil Belajar</h3>

          <div className="grid-2">
            <div className="sub-card">
              <h4>A. Instrumen Asesmen Formatif Terintegrasi (Di Dalam Slide)</h4>
              <p>
                Belajar dari kendala jaringan internet saat menggunakan Quizizz di Siklus 1, pada materi Sistem
                Komputer saya mengintegrasikan <strong>7 pos pertanyaan asesmen formatif ("Cek Konsep" &
                "Pertanyaan")</strong> langsung di dalam slide presentasi:
              </p>
              <ol className="styled-list">
                <li><strong>Slide 3–5 (Identifikasi Konsep):</strong> Menentukan apakah PC Desktop, Smartphone, dan Kalkulator merupakan komputer berdasarkan syarat Input–Process–Output.</li>
                <li><strong>Slide 14 (Cek Konsep):</strong> Menjelaskan perbedaan mendasar antara <em>Hardware</em> dan <em>Software</em>.</li>
                <li><strong>Slide 16 (Cek Konsep):</strong> Mengklasifikasikan <em>Smartphone</em> ke dalam jenis komputer yang tepat (Komputer Mikro).</li>
                <li><strong>Slide 18 (Kuis Identifikasi):</strong> Memilih komponen yang termasuk <em>hardware</em> dari opsi: <em>Mouse, Keyboard, Aplikasi pengolah kata, Video</em>.</li>
                <li><strong>Slide 61 (Penalaran Sistem):</strong> <em>"Jika tidak ada hardware eksternal, apakah komputer masih tetap bisa berjalan atau digunakan?"</em></li>
                <li><strong>Slide 64 (Analisis Perangkat Hibrida):</strong> Mengidentifikasi apakah <em>earphone</em> berkabel mikrofon termasuk perangkat <em>Input</em> atau <em>Output</em>.</li>
                <li><strong>Slide 74 (Evaluasi Lisensi):</strong> Menentukan jenis lisensi <em>software</em> yang dapat diunduh dan digunakan dengan batas waktu tertentu (<em>Shareware</em>).</li>
              </ol>
            </div>

            <div className="sub-card">
              <h4>B. Evaluasi Jujur Kendala Penugasan LKM & Tindak Lanjut</h4>
              <p>
                Berdasarkan dokumen resmi <code>LK.4.PPLM Refleksi 2</code>, selain tanya jawab formatif di atas,
                saya memberikan penugasan berupa simulasi mengecek kebenaran informasi di media sosial Instagram.
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                <strong>Analisis Kendala & Hasil:</strong> Pelaksanaan pengerjaan tugas mandiri tersebut
                <strong>belum berhasil dengan baik</strong>. Penyebab utamanya adalah:
              </p>
              <ul className="styled-list">
                <li>Lembar Kerja Murid (LKM) dan petunjuk teknis pengerjaan belum disiapkan secara matang.</li>
                <li>Topik penugasan (verifikasi berita media sosial) kurang selaras langsung dengan materi inti komponen Sistem Komputer yang baru saja dijelaskan.</li>
                <li>Akibatnya, banyak murid yang kurang mengerti cara pengerjaannya dan <strong>terdapat beberapa murid yang tidak terlibat mengumpulkan tugasnya</strong>.</li>
              </ul>
              <p>
                <em>Sesuai aturan kejujuran akademik, saya tidak membuat tabel nilai atau persentase ketuntasan
                fiktif untuk tugas yang terkendala ini.</em> Sebaliknya, kegagalan ini menjadi bukti paling
                otentik pentingnya menyelaraskan LKM dengan tujuan pembelajaran.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 7. REFLEKSI & PENGEMBANGAN KOMPETENSI GURU */}
      {showSection('refleksi') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 7</div>
          <h3>7. Refleksi & Pengembangan Kompetensi Guru (Siklus 2 Menuju Siklus 3 & 4)</h3>
          <p>
            Bagian ini menunjukkan bagaimana refleksi dan umpan balik Guru Pamong pada Siklus 2 diolah menjadi
            perbaikan nyata pada kelas blok berikutnya serta pada Siklus 3 (Analisis Data) dan Siklus 4
            (Microsoft Word):
          </p>

          <div className="timeline-vertical">
            <div className="timeline-step">
              <div className="step-marker">SIKLUS 2</div>
              <div className="step-content">
                <h4>Refleksi Sistem Komputer (`LK.4 Refleksi 2`)</h4>
                <p>
                  <strong>Temuan & Umpan Balik Guru Pamong:</strong> Penyampaian materi dan apersepsi perangkat
                  teknologi harian sudah baik, serta ukuran visual slide telah jauh lebih terbaca dibanding Siklus 1.
                  Namun, LKM yang kurang siap membuat siswa bingung mengerjakan tugas, dan Guru Pamong (Bapak
                  Juwari, S.T.) menyarankan saya untuk <strong>lebih memahami karakteristik setiap murid agar dapat
                  menguasai dan mengelola kelas secara lebih efektif</strong>.
                </p>
                <p style={{ marginTop: '0.4rem' }}>
                  <strong>Tindak Lanjut pada Sistem Blok:</strong> Merombak metode yang semula didominasi penjelasan
                  guru menjadi aktivitas identifikasi komponen komputer secara berkelompok dengan panduan LKM yang
                  spesifik dan selaras dengan topik Sistem Komputer.
                </p>
                <button
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '0.6rem' }}
                  onClick={() => setPreviewDoc(documentInventory[5])}
                >
                  Buka LK.4 Refleksi 2 (PDF)
                </button>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-marker">SIKLUS 3</div>
              <div className="step-content">
                <h4>Tindak Lanjut pada Pembelajaran Analisis Data (`LK.4 Refleksi 3`)</h4>
                <p>
                  <strong>Perbaikan yang Dilakukan:</strong> Belajar dari ketidakselarasan tugas di Siklus 2, pada
                  Siklus 3 seluruh rangkaian apersepsi, materi, dan contoh visual diselaraskan secara utuh pada
                  pengumpulan nilai, pengelompokan informasi, serta penyajian data dalam bentuk tabel dan diagram.
                </p>
                <p style={{ marginTop: '0.4rem' }}>
                  <strong>Umpan Balik Guru Pamong & Pembelajaran:</strong> Guru Pamong menilai materi Analisis Data
                  yang digunakan <strong>sudah baik dan sesuai dengan kebutuhan murid</strong>, namun memberikan
                  umpan balik agar <strong>sistematika penyusunan dokumen RPP diperbaiki sesuai kaidah yang
                  berlaku</strong>. Hal ini menyadarkan saya bahwa penguasaan kelas yang baik harus ditopang oleh
                  skenario RPP yang runtut dari pembukaan hingga penutupan.
                </p>
                <button
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '0.6rem' }}
                  onClick={() => setPreviewDoc(documentInventory[6])}
                >
                  Buka LK.4 Refleksi 3 (PDF)
                </button>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-marker">SIKLUS 4</div>
              <div className="step-content">
                <h4>Transformasi Menuju Praktik Langsung & Scaffolding pada Microsoft Word (`LK.4 Refleksi 4`)</h4>
                <p>
                  <strong>Perubahan Strategi Mengajar:</strong> Menjawab masalah siswa yang cenderung pasif jika
                  hanya mendengar penjelasan (Siklus 1–3) dan kebingungan saat mengerjakan tugas tanpa panduan
                  bertahap (Siklus 2), pada Siklus 4 saya menerapkan <strong>demonstrasi langsung yang diikuti
                  praktik mandiri (<em>hands-on practice</em>)</strong> fitur dasar Microsoft Word (pengaturan
                  jenis/ukuran huruf, paragraf, dan pembuatan dokumen laporan sederhana).
                </p>
                <p style={{ marginTop: '0.4rem' }}>
                  <strong>Kesadaran Diferensiasi Kemampuan Siswa:</strong> Selama praktik langsung di laboratorium,
                  terlihat jelas bahwa kecepatan belajar setiap murid berbeda-beda. Oleh karena itu, pengembangan
                  kompetensi pedagogik saya berfokus pada penyediaan <strong>panduan langkah demi langkah
                  (<em>step-by-step instruction</em>) dan pendampingan keliling yang merata</strong> agar seluruh
                  peserta didik dapat menyelesaikan dokumen praktiknya dengan baik.
                </p>
                <button
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '0.6rem' }}
                  onClick={() => setPreviewDoc(documentInventory[7])}
                >
                  Buka LK.4 Refleksi 4 (PDF)
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}