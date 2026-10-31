import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { documentInventory, videoTimestamps } from '../data/PortofolioData';

const INITIAL_BUBBLE_CARDS = [44, 10, 60, 2, 55, 43];
const BUBBLE_STEPS = [
  { cards: [44, 10, 60, 2, 55, 43], note: "Posisi awal 6 siswa di depan kelas memegang kartu angka acak (sebelum diurutkan)." },
  { cards: [10, 44, 2, 55, 43, 60], note: "Iterasi 1: Membandingkan pasangan berdekatan; angka terbesar (60) menggelembung ke posisi paling kanan." },
  { cards: [10, 2, 44, 43, 55, 60], note: "Iterasi 2: Pertukaran (44, 2) dan (55, 43) menempatkan 55 dan 60 pada urutan akhir yang benar." },
  { cards: [2, 10, 43, 44, 55, 60], note: "Hasil Akhir Terurut [00:23:00]: Barisan siswa berhasil membentuk urutan naik 2, 10, 43, 44, 55, 60!" }
];

export default function PortofolioUTS({ setPreviewDoc }) {
  const [utsTab, setUtsTab] = useState('semua');
  const [videoStart, setVideoStart] = useState(0);
  const [activeTs, setActiveTs] = useState(null);
  const [sortStep, setSortStep] = useState(0);

  const sections = [
    { id: 'semua', label: 'Tampilkan Semua' },
    { id: 'pendahuluan', label: '1. Pendahuluan' },
    { id: 'perencanaan', label: '2. Perencanaan (ABCD)' },
    { id: 'materi', label: '3. Materi (BK & Struktur Data)' },
    { id: 'media', label: '4. Media & Simulasi Kartu' },
    { id: 'dokumentasi', label: '5. Video Mengajar (01:33:48)' },
    { id: 'asesmen', label: '6. Asesmen (Rata-rata 81%)' },
    { id: 'refleksi', label: '7. Refleksi LK.4 Siklus 1' }
  ];

  const showSection = (id) => utsTab === 'semua' || utsTab === id;

  const handleJumpToTime = (ts) => {
    setVideoStart(ts.seconds);
    setActiveTs(ts.time);
    const el = document.getElementById('uts-video-player');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="container">
      <div className="page-header portfolio-banner-uts">
        <div className="badge-row">
          <span className="badge badge-white">BAGIAN I — E-PORTFOLIO 1 (UTS)</span>
          <span className="badge badge-gold">Praktik Terbaik Siklus 1 Mandiri</span>
          <span className="badge badge-emerald">Bukti Lengkap: 31 Slide PDF + Video 93 Menit + LK.4</span>
        </div>
        <h2>Berpikir Komputasional, Struktur Data &amp; Algoritma</h2>
        <p>
          Kelas X TP 1 (Teknik Permesinan 1 — 36 Peserta Didik) • SMK Negeri 2 Yogyakarta • Jam Siang (12.30–15.00 WIB)
        </p>
      </div>

      <div className="sub-nav" role="tablist" aria-label="Filter Bagian E-Portfolio UTS">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className={utsTab === sec.id ? 'sub-nav-btn active' : 'sub-nav-btn'}
            onClick={() => setUtsTab(sec.id)}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* 1. PENDAHULUAN */}
      {showSection('pendahuluan') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 1</div>
          <h3>1. Pendahuluan &amp; Konteks Pembelajaran Kelas Vokasi</h3>
          <div className="grid-2">
            <div>
              <h4>Latar Belakang &amp; Tantangan Jam Siang (12.30–15.00 WIB)</h4>
              <p>
                Pada Siklus 1 Praktik Pengalaman Lapangan (PPL) Mandiri di <strong>SMK Negeri 2 Yogyakarta</strong>,
                saya mengampu mata pelajaran <strong>Informatika (Fase E)</strong> di kelas <strong>X Teknik
                Permesinan 1 (X TP 1)</strong> yang berjumlah <strong>36 peserta didik</strong>. Pembelajaran
                berlangsung pada jam siang (12.30–15.00 WIB) setelah siswa mengikuti rangkaian pelajaran
                kejuruan.
              </p>
              <p style={{ marginTop: '0.6rem' }}>
                Berdasarkan hasil observasi pada tahap <strong>Praktik Asistensi (<code>LK.3.PPLM</code>)</strong>,
                tantangan utama yang dihadapi adalah perbedaan tingkat pemahaman awal siswa, keterbatasan waktu
                diskusi, serta kecenderungan sebagian siswa yang <strong>pasif, mengantuk, bahkan tertidur</strong>
                apabila pembelajaran didominasi metode ceramah satu arah.
              </p>
            </div>

            <div>
              <h4>Solusi Pedagogik pada Siklus 1 (2 Rangkaian Pertemuan)</h4>
              <p>
                Untuk menjawab tantangan tersebut sekaligus menindaklanjuti masukan Guru Pamong (Bapak Juwari,
                S.T.) dan DPL (Bapak Dr. Ir. Satriyo Agung Dewanto, M.Pd.), rangkaian Siklus 1 dirancang dalam
                dua pertemuan yang saling terhubung:
              </p>
              <ul className="styled-list">
                <li>
                  <strong>Pertemuan 1 — Fondasi Berpikir Komputasional (31 Slide PDF Asli):</strong> Membومikan
                  konsep <em>Dekomposisi, Pengenalan Pola, Abstraksi,</em> dan <em>Algoritma</em> melalui aktivitas
                  harian (memasak mi instan &amp; mencuci piring), profesi (Teknisi Robot), serta <strong>abstraksi
                  bagian utama Mesin Bubut</strong> yang dekat dengan dunia Teknik Permesinan.
                </li>
                <li>
                  <strong>Pertemuan Lanjutan — Struktur Data &amp; Algoritma (Rekaman Video 01:33:48):</strong>
                  Menerapkan pembelajaran aktif berbasis permainan tebak angka 1–100, <strong>simulasi fisik
                  (<em>roleplay</em>) kartu angka</strong> untuk algoritma <em>Bubble Sort</em> &amp; <em>Selection
                  Sort</em>, latihan terbimbing <em>Stack (LIFO)</em> &amp; <em>Queue (FIFO)</em>, hingga kuis
                  evaluasi interaktif dengan <strong>capaian rata-rata kelas 81%</strong>.
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 2. PERENCANAAN PEMBELAJARAN */}
      {showSection('perencanaan') && (
        <section className="card section-block" id="rekonstruksi-rpp-uts">
          <div className="section-tag">BAGIAN 2</div>
          <h3>2. Perencanaan Pembelajaran (Rekonstruksi Modul Ajar Berformat ABCD)</h3>

          <div className="alert-box alert-warning">
            <strong>Label Kejujuran Akademik:</strong> Naskah perencanaan (Modul Ajar/RPP) di bawah ini merupakan
            <strong> Dokumen Rekonstruksi Berdasarkan Praktik</strong> yang merujuk secara akurat pada bahan ajar
            asli <code>Berpikir Komputasional - X TP 1 SMK N 2 Yogyakarta.pdf</code>, pelaksanaan autentik di dalam
            video mengajar (<code>01:33:48</code>), serta tindak lanjut atas umpan balik resmi pada
            <code> LK.3.PPLM</code>.
          </div>

          <div className="grid-2">
            <div className="sub-card">
              <h4>Tujuan Pembelajaran (Perbaikan Format ABCD Pasca-LK.3)</h4>
              <ol className="styled-list">
                <li>
                  Melalui studi kasus aktivitas sehari-hari dan diskusi permasalahan bengkel kejuruan
                  <strong> (Condition)</strong>, peserta didik kelas X TP 1 <strong>(Audience)</strong> mampu
                  menguraikan empat fondasi Berpikir Komputasional (<em>Dekomposisi, Pengenalan Pola, Abstraksi
                  Mesin Bubut,</em> dan <em>Algoritma</em>) <strong>(Behavior)</strong> secara logis, sistematis,
                  efektif, dan efisien <strong>(Degree)</strong>.
                </li>
                <li>
                  Melalui permainan tebak angka 1–100 dan simulasi <em>roleplay</em> kartu angka di depan kelas
                  <strong> (Condition)</strong>, peserta didik <strong>(Audience)</strong> mampu membandingkan
                  mekanisme pencarian data (<em>Linear Search</em> vs <em>Binary Search</em>) serta mempraktikkan
                  langkah pengurutan data (<em>Bubble Sort</em> &amp; <em>Selection Sort</em>)
                  <strong> (Behavior)</strong> hingga menghasilkan barisan angka terurut dengan tepat
                  <strong> (Degree)</strong>.
                </li>
                <li>
                  Melalui latihan terbimbing di papan tulis dan kuis evaluasi interaktif 22 soal
                  <strong> (Condition)</strong>, peserta didik <strong>(Audience)</strong> mampu menganalisis
                  operasi struktur data <em>Stack</em> (LIFO: <code>push/pop</code>) dan <em>Queue</em> (FIFO:
                  <code> enqueue/dequeue</code>) <strong>(Behavior)</strong> dengan capaian ketuntasan minimal
                  80% <strong>(Degree)</strong>.
                </li>
              </ol>
            </div>

            <div className="sub-card">
              <h4>Transformasi Rancangan: Dari Asistensi (LK.3) ke Siklus 1</h4>
              <table className="mini-table" style={{ marginTop: '0.4rem' }}>
                <thead>
                  <tr>
                    <th>Komponen Modul</th>
                    <th>Kelemahan Saat Asistensi (LK.3)</th>
                    <th>Perbaikan pada Siklus 1 Mandiri</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Rumusan Tujuan</strong></td>
                    <td>Belum menerapkan komponen ABCD secara menyeluruh; target ketercapaian belum terukur.</td>
                    <td>Memuat unsur <em>Audience, Behavior, Condition,</em> dan <em>Degree</em> secara eksplisit.</td>
                  </tr>
                  <tr>
                    <td><strong>Kesesuaian Asesmen</strong></td>
                    <td>Halaman asesmen masih memuat topik materi sebelumnya dan belum selaras dengan tujuan awal.</td>
                    <td>22 soal kuis evaluasi menguji langsung materi BK, Searching, Sorting, Stack, dan Queue yang diajarkan.</td>
                  </tr>
                  <tr>
                    <td><strong>Pembelajaran Mendalam</strong></td>
                    <td>Implementasi <em>deep learning</em> dan berpikir kritis belum tampak jelas pada aktivitas modul.</td>
                    <td>Integrasi studi kasus kewirausahaan, abstraksi Mesin Bubut, dan diskusi kasus duplikasi angka saat Sorting.</td>
                  </tr>
                </tbody>
              </table>
              <button
                className="btn btn-outline btn-sm"
                style={{ marginTop: '0.85rem' }}
                onClick={() => setPreviewDoc(documentInventory[3])}
              >
                📄 Lihat Bukti Umpan Balik di LK.3 Asistensi (PDF)
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3. MATERI PEMBELAJARAN */}
      {showSection('materi') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 3</div>
          <h3>3. Materi Pembelajaran (31 Slide Berpikir Komputasional &amp; Materi Struktur Data)</h3>
          <p>
            Materi pembelajaran Siklus 1 memadukan fondasi pola pikir komputasi dengan penerapannya pada algoritma
            pencarian, pengurutan, dan struktur data:
          </p>

          <div className="grid-2" style={{ marginTop: '1rem' }}>
            <div className="sub-card">
              <span className="badge badge-navy">Pertemuan 1 • 31 Slide PDF Asli</span>
              <h4>A. Fondasi Berpikir Komputasional &amp; Konteks Vokasi</h4>
              <ul className="styled-list">
                <li>
                  <strong>Definisi &amp; 4 Karakteristik (Slide 3–4):</strong> Cara berpikir menyelesaikan masalah
                  secara <em>Logis</em> (masuk akal), <em>Sistematis</em> (teratur menurut sistem),
                  <em> Efisien</em> (hemat waktu, tenaga, biaya), dan <em>Efektif</em> (tepat guna/membawa hasil).
                </li>
                <li>
                  <strong>Contoh Harian &amp; Cek Konsep (Slide 6–11):</strong> Algoritma memasak mi instan (8
                  langkah dengan efisiensi membuka bumbu sembari menunggu air mendidih), mencuci piring (5 langkah),
                  serta studi perbandingan <em>Jono vs Sinta</em> saat mencuci baju.
                </li>
                <li>
                  <strong>Relevansi Profesi (Slide 13–16):</strong> Penerapan BK pada <em>Teknisi Robot</em>,
                  <em> Pelajar</em>, dan analisis dampak jika <em>Kurir Ekspedisi</em> tidak menerapkan BK.
                </li>
                <li>
                  <strong>4 Fondasi BK &amp; Abstraksi Mesin Bubut (Slide 17–22):</strong> <em>Dekomposisi</em>
                  (menguraikan masalah kompleks), <em>Pengenalan Pola</em>, <strong>Abstraksi (mengidentifikasi
                  bagian utama Mesin Bubut: Prinsip Kerja, Fungsi Utama, Jenis-jenis)</strong>, dan
                  <em> Algoritma</em>.
                </li>
                <li>
                  <strong>Studi Kasus Kewirausahaan Sekolah (Slide 23–29):</strong> Analisis penjualan produk
                  keripik singkong dari sekolah (modal Rp10.000,00) menggunakan keempat fondasi BK untuk
                  memaksimalkan keuntungan.
                </li>
              </ul>
              <button
                className="btn btn-primary btn-sm"
                style={{ marginTop: '0.65rem' }}
                onClick={() => setPreviewDoc(documentInventory[0])}
              >
                📘 Pratinjau Slide PDF Berpikir Komputasional (31 Hal)
              </button>
            </div>

            <div className="sub-card">
              <span className="badge badge-gold">Pertemuan Lanjutan • Video Praktik</span>
              <h4>B. Algoritma Searching, Sorting, Stack &amp; Queue</h4>
              <ul className="styled-list">
                <li>
                  <strong>Pencarian Data (Searching):</strong> Perbandingan <em>Linear Search</em> (pencarian
                  berurutan satu per satu dari awal) dengan <em>Binary Search</em> (pencarian membagi dua nilai
                  tengah yang mewajibkan <strong>syarat mutlak data sudah terurut</strong>).
                </li>
                <li>
                  <strong>Pengurutan Data (Sorting):</strong> Mekanisme <em>Bubble Sort</em> (membandingkan dan
                  menukar dua elemen berdekatan secara berulang) dan <em>Selection Sort</em> (mencari nilai
                  terkecil/variabel minimal dalam barisan lalu menempatkannya di posisi terdepan).
                </li>
                <li>
                  <strong>Struktur Data Stack (Tumpukan — LIFO):</strong> Prinsip <em>Last In First Out</em>
                  (elemen terakhir yang masuk adalah yang pertama keluar) beserta operasi <code>Push</code>
                  (menambah ke atas), <code>Pop</code> (mengambil dari atas), serta penunjuk <code>Top</code> dan
                  <code> Base</code>.
                </li>
                <li>
                  <strong>Struktur Data Queue (Antrean — FIFO):</strong> Prinsip <em>First In First Out</em>
                  (elemen pertama yang masuk adalah yang pertama dilayani) beserta operasi <code>Enqueue</code>
                  (masuk antrean), <code>Dequeue</code> (keluar antrean), serta posisi <code>Front</code> dan
                  <code> Rear</code>.
                </li>
              </ul>
              <button
                className="btn btn-outline btn-sm"
                style={{ marginTop: '0.65rem' }}
                onClick={() => setPreviewDoc(documentInventory[1])}
              >
                🎬 Lihat Ringkasan Bukti Video Struktur Data
              </button>
            </div>
          </div>

          <div className="analysis-box">
            <h4>Evaluasi Jujur Kualitas Bahan Ajar Siklus 1</h4>
            <p>
              Secara substansi, pemilihan contoh <strong>Mesin Bubut</strong> pada Slide 21 sangat tepat karena
              langsung menyentuh peralatan bengkel yang dipelajari siswa kelas X Teknik Permesinan 1. Namun,
              evaluasi diri dan masukan Guru Pamong pada <code>LK.4 Refleksi 1</code> mencatat dua kelemahan yang
              harus diperbaiki: (1) masih terdapat <strong>1 halaman placeholder kosong pada Slide 12</strong>
              (bertuliskan <em>"SILAHKAN UPLOAD BAHAN PRESENTASI DI SINI"</em>), dan (2) <strong>ukuran huruf
              (font) pada beberapa slide terlalu kecil</strong> untuk ukuran ruang laboratorium. Temuan ini
              menjadi dasar perbaikan langsung saat menyusun 91 slide Sistem Komputer di Siklus 2.
            </p>
          </div>
        </section>
      )}

      {/* 4. MEDIA PEMBELAJARAN & SIMULASI INTERAKTIF */}
      {showSection('media') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 4</div>
          <h3>4. Media Pembelajaran &amp; Inovasi Simulasi Fisik (Unplugged Roleplay)</h3>
          <div className="grid-3">
            <div className="sub-card">
              <h4>1. Slide Interaktif &amp; Animasi Array</h4>
              <p>
                Visualisasi perbandingan langkah demi langkah <em>Linear vs Binary Search</em> dan pergerakan
                indeks pada <em>Bubble vs Selection Sort</em> melalui proyektor untuk membantu siswa memahami
                perubahan posisi elemen array.
              </p>
            </div>
            <div className="sub-card">
              <h4>2. Permainan Tebak Angka (1–100)</h4>
              <p>
                Media apersepsi berpasangan di mana siswa menebak angka rahasia 1–100 dengan petunjuk "lebih
                besar" atau "lebih kecil" sebagai pengalaman konkret algoritma <em>Binary Search</em>.
              </p>
            </div>
            <div className="sub-card">
              <h4>3. Roleplay Kartu Angka Kertas</h4>
              <p>
                Enam siswa per baris maju ke depan kelas memegang kertas bertuliskan angka acak (1–100) dan
                mempraktikkan pertukaran fisik <em>Bubble Sort</em> serta penunjukan "komandan variabel minimal"
                pada <em>Selection Sort</em>.
              </p>
            </div>
          </div>

          {/* SIMULATOR INTERAKTIF ROLEPLAY BUBBLE SORT */}
          <div className="sim-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <h4>🎮 Visualisasi Interaktif: Roleplay Kartu Angka Bubble Sort di Kelas X TP 1</h4>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
                  Merekonstruksi simulasi nyata pada menit <code>[00:23:00]</code> di mana 6 siswa maju ke depan kelas dan mengurutkan kartu angka hingga membentuk urutan <strong>2, 10, 43, 44, 55, 60</strong>:
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setSortStep((prev) => Math.max(0, prev - 1))}
                  disabled={sortStep === 0}
                >
                  ◀ Langkah Sebelumnya
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => setSortStep((prev) => (prev + 1) % BUBBLE_STEPS.length)}
                >
                  {sortStep === BUBBLE_STEPS.length - 1 ? '↺ Ulangi Simulasi' : 'Langkah Berikutnya ▶'}
                </button>
              </div>
            </div>

            <div className="card-number-row">
              {BUBBLE_STEPS[sortStep].cards.map((num, idx) => (
                <div key={idx} className="number-card">
                  <span>Posisi {idx + 1}</span>
                  {num}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.88rem', color: '#fde68a' }}>
              <strong>Tahap {sortStep + 1} dari {BUBBLE_STEPS.length}:</strong> {BUBBLE_STEPS[sortStep].note}
            </p>
          </div>
        </section>
      )}

      {/* 5. DOKUMENTASI VIDEO MENGAJAR */}
      {showSection('dokumentasi') && (
        <section className="card section-block" id="uts-video-player">
          <div className="section-tag">BAGIAN 5</div>
          <h3>5. Dokumentasi Autentik Video Praktik Mengajar (01:33:48)</h3>
          <p>
            Berikut adalah rekaman utuh tanpa rekayasa pelaksanaan pembelajaran Struktur Data &amp; Algoritma di
            kelas X Teknik Permesinan 1 SMK Negeri 2 Yogyakarta. Klik salah satu kartu <em>timestamp</em> di
            bawah untuk melompat langsung ke segmen kegiatan tersebut:
          </p>

          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/CBBoBcWRp1o?start=${videoStart}`}
              title="Video Mengajar Struktur Data & Algoritma - Alpian Roymundus Siringo-ringo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="video-meta-bar">
            <span>
              <strong>Judul Rekaman:</strong> Praktik Mengajar Struktur Data &amp; Algoritma (X TP 1 SMK N 2 Yogyakarta) • Durasi: <code>01:33:48</code>
            </span>
            <a
              href="https://youtu.be/CBBoBcWRp1o?si=zcloXQtEIu3pQxoJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Buka di YouTube ↗
            </a>
          </div>

          <h4>Peta Navigasi 10 Segmen Penting Pembelajaran (Klik untuk Memutar Segmen)</h4>
          <div className="timestamp-grid">
            {videoTimestamps.map((ts, idx) => (
              <div
                key={idx}
                className={activeTs === ts.time ? 'timestamp-card active-ts' : 'timestamp-card'}
                onClick={() => handleJumpToTime(ts)}
              >
                <div>
                  <div className="badge-row" style={{ marginBottom: '0.45rem', justifyContent: 'space-between' }}>
                    <span className="time-badge">▶ {ts.time}</span>
                    <span className="badge badge-navy">{ts.phase}</span>
                  </div>
                  <h4 style={{ fontSize: '0.96rem', marginBottom: '0.35rem' }}>{ts.title}</h4>
                  <p style={{ fontSize: '0.86rem', color: '#475569' }}>{ts.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. ASESMEN & ANALISIS HASIL BELAJAR */}
      {showSection('asesmen') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 6</div>
          <h3>6. Asesmen &amp; Analisis Hasil Belajar Peserta Didik</h3>

          <div className="score-highlight">
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '0.35rem' }}>
                TERVERIFIKASI PADA VIDEO MENIT [01:29:39]
              </span>
              <h4>Capaian Rata-Rata Kelas Kuis Evaluasi Akhir (22 Butir Soal)</h4>
              <p style={{ fontSize: '0.9rem', color: '#065f46' }}>
                Menguji pemahaman komprehensif 36 siswa kelas X TP 1 atas materi Berpikir Komputasional,
                Searching, Sorting, Stack (LIFO), dan Queue (FIFO).
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <strong>Rata-Rata Kelas: 81%</strong>
              <p style={{ fontSize: '0.8rem', color: '#047857' }}>Melampaui ambang batas ketuntasan 80%</p>
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: '1.25rem' }}>
            <div className="sub-card">
              <h4>A. Evaluasi Jujur Kendala Quizizz pada Pertemuan 1 (LK.4 Refleksi 1)</h4>
              <p>
                Pada pertemuan pertama (materi dasar Berpikir Komputasional), saya merencanakan asesmen formatif
                menggunakan platform <strong>Quizizz</strong>. Namun, sebagaimana tercatat secara jujur dalam
                <code> LK.4.PPLM Refleksi 1</code>:
              </p>
              <ul className="styled-list">
                <li>
                  Terdapat <strong>kendala teknis pada sebagian perangkat komputer dan jaringan internet</strong>
                  di ruang laboratorium sehingga sejumlah murid kesulitan mengakses kuis secara serentak.
                </li>
                <li>
                  Pengalaman nyata ini menyadarkan saya pentingnya menyiapkan <strong>strategi asesmen alternatif
                  (luring/terbimbing)</strong> dan memastikan kesiapan infrastruktur sebelum sesi evaluasi dimulai.
                </li>
              </ul>
            </div>

            <div className="sub-card">
              <h4>B. Keberhasilan Latihan Terbimbing &amp; Kuis 22 Soal di Pertemuan Lanjutan</h4>
              <p>
                Belajar dari kendala Pertemuan 1, pada pertemuan Struktur Data &amp; Algoritma saya menerapkan
                asesmen berlapis yang menggabungkan:
              </p>
              <ul className="styled-list">
                <li>
                  <strong>Asesmen Performa Unplugged (<code>[00:23:00]–[00:40:00]</code>):</strong> Observasi
                  langsung ketepatan 6 barisan siswa saat mengurutkan kartu angka menggunakan algoritma
                  <em> Bubble Sort</em> dan <em>Selection Sort</em>.
                </li>
                <li>
                  <strong>Latihan Terbimbing Stack &amp; Queue (<code>[00:41:04]–[01:14:00]</code>):</strong>
                  Penyelesaian soal simulasi <code>push/pop</code> dan <code>enqueue/dequeue</code> di papan tulis
                  dan buku catatan siswa.
                </li>
                <li>
                  <strong>Kuis Evaluasi Interaktif 22 Soal (<code>[01:14:37]–[01:29:39]</code>):</strong> Seluruh
                  kelas berhasil menyelesaikan evaluasi dengan <strong>skor rata-rata akurasi 81%</strong>.
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 7. REFLEKSI PEMBELAJARAN */}
      {showSection('refleksi') && (
        <section className="card section-block">
          <div className="section-tag">BAGIAN 7</div>
          <h3>7. Refleksi Pembelajaran &amp; Rencana Tindak Lanjut (LK.4 Siklus 1)</h3>
          <p>
            Berdasarkan dokumen resmi <code>LK.4.PPLM Refleksi 1</code> yang telah disetujui dan disahkan oleh
            Guru Pamong serta Dosen Pembimbing Lapangan pada 30 Oktober 2026:
          </p>

          <div className="grid-2" style={{ marginTop: '1rem' }}>
            <div className="sub-card">
              <h4>Umpan Balik Guru Pamong (Bapak Juwari, S.T.)</h4>
              <p>
                Guru Pamong memberikan apresiasi atas kontekstualisasi materi dengan kehidupan sehari-hari dan
                profesi kejuruan, namun memberikan catatan perbaikan penting pada aspek media:
              </p>
              <blockquote className="academic-quote">
                "Disarankan agar slide presentasi diperbaiki, khususnya pada ukuran tulisan yang sebaiknya tidak
                terlalu kecil agar dapat dibaca dengan jelas oleh seluruh murid di kelas."
              </blockquote>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Makna Reflektif:</strong> Desain media pembelajaran tidak hanya soal kelengkapan isi
                materi, melainkan juga keterbacaan (<em>readability</em>) dan kenyamanan visual bagi siswa di
                barisan paling belakang.
              </p>
            </div>

            <div className="sub-card">
              <h4>Bukti Tindak Lanjut Nyata Menuju Siklus 2</h4>
              <ul className="styled-list">
                <li>
                  <strong>Transformasi Strategi Mengajar:</strong> Mengubah pendekatan yang semula dominan ceramah
                  menjadi pembelajaran berbasis aktivitas fisik (<em>roleplay</em> kartu angka dan diskusi
                  pemecahan masalah) sehingga siswa terjaga dan antusias pada jam siang.
                </li>
                <li>
                  <strong>Perbaikan Tipografi Slide pada Siklus 2:</strong> Masukan tentang ukuran huruf langsung
                  diterapkan pada pembuatan <strong>91 slide materi Sistem Komputer (Siklus 2)</strong> yang
                  menggunakan ukuran font besar, kontras tinggi, dan prinsip satu konsep per slide.
                </li>
                <li>
                  <strong>Pemerataan Partisipasi:</strong> Menunjuk perwakilan tiap baris secara bergiliran dan
                  memfasilitasi pertanyaan kritis siswa (seperti kasus angka kembar pada menit
                  <code> [00:31:08]</code>).
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => setPreviewDoc(documentInventory[4])}>
              📄 Buka Dokumen Asli LK.4 Refleksi 1 – Siklus 1 (PDF)
            </button>
            <button className="btn btn-outline" onClick={() => setPreviewDoc(documentInventory[0])}>
              📘 Buka Slide Berpikir Komputasional (31 Hal PDF)
            </button>
            <Link to="/uas" className="btn btn-secondary">
              Lanjut ke E-Portfolio 2 (UAS — Sistem Komputer) →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}