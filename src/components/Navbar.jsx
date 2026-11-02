export const teacherIdentity = {
  name: "Alpian Roymundus Siringo-ringo, S.Kom.",
  shortName: "Alpian R. Siringo-ringo, S.Kom.",
  initials: "AR",
  nim: "25105260634",
  program: "PPG Calon Guru / Prajabatan",
  field: "Informatika",
  university: "Universitas Negeri Yogyakarta (UNY)",
  school: "SMK Negeri 2 Yogyakarta",
  subject: "Informatika (Fase E — Kelas X SMK)",
  mainClass: "X TP 1 (Teknik Permesinan 1)",
  studentCount: "36 Peserta Didik",
  scheduleContext: "Siang (12.30–15.00 WIB) • Sistem Blok",
  mentorTeacher: "Juwari, S.T. (NIP. 197003262024211001)",
  supervisorLecturer: "Dr. Ir. Satriyo Agung Dewanto, S.T., S.Pd.T., M.Pd., IPM., ASEAN Eng.",
  approvalDate: "30 Oktober 2026",
  vision:
    "Menjadi pendidik Informatika yang profesional, adaptif, dan reflektif yang mampu menjembatani konsep berpikir komputasional serta teknologi digital dengan kebutuhan nyata peserta didik pendidikan kejuruan.",
  missions: [
    "Merancang pembelajaran berformat ABCD yang selaras antara tujuan, aktivitas, dan asesmen.",
    "Mengaitkan materi Informatika secara kontekstual dengan keahlian Teknik Permesinan.",
    "Menerapkan pembelajaran aktif melalui simulasi interaktif (unplugged) dan praktikum terstruktur.",
    "Melakukan evaluasi dan refleksi berkelanjutan bersama Guru Pamong serta Dosen Pembimbing."
  ],
  interests: [
    {
      icon: "🧠",
      title: "Berpikir Komputasional & Algoritma",
      desc: "Pengembangan logika pemecahan masalah, struktur data, dan algoritma melalui simulasi visual dan roleplay."
    },
    {
      icon: "📊",
      title: "Analisis & Visualisasi Data",
      desc: "Pengolahan data nilai dan penyajian informasi secara sistematis melalui tabel serta diagram."
    },
    {
      icon: "⚙️",
      title: "Sistem Komputer & Otomasi",
      desc: "Penerapan konsep hardware, software, dan antarmuka CLI/GUI sebagai fondasi sistem kontrol modern."
    }
  ],
  competencies: [
    {
      domain: "Kompetensi Pedagogik",
      summary: "Menyusun perangkat ajar berformat ABCD, mengelola pembelajaran aktif dengan simulasi kartu angka, dan mendampingi praktikum secara bertahap."
    },
    {
      domain: "Kompetensi Profesional",
      summary: "Menguasai materi Berpikir Komputasional, Struktur Data, Sistem Komputer, Analisis Data, dan Aplikasi Perkantoran Fase E."
    },
    {
      domain: "Kompetensi Kepribadian",
      summary: "Bersikap reflektif, disiplin, dan konsisten menyempurnakan kualitas media serta strategi pembelajaran di setiap siklus."
    },
    {
      domain: "Kompetensi Sosial",
      summary: "Membangun komunikasi kolaboratif dengan peserta didik kelas X TP 1, Guru Pamong, dan Dosen Pembimbing Lapangan."
    }
  ]
};

export const keyMetrics = [
  { value: "5 Tahap", label: "Siklus PPL", detail: "Asistensi & Siklus 1–4" },
  { value: "122 Slide", label: "Bahan Ajar PDF", detail: "31 Slide BK & 91 Slide SK" },
  { value: "81%", label: "Rata-rata Kuis Kelas", detail: "Evaluasi 22 Soal (36 Siswa)" },
  { value: "8 Arsip", label: "Dokumen & Bukti", detail: "Materi, Video, & Lembar Refleksi" }
];

// Silakan isi `imageUrl` dengan path foto Anda di folder `public/photos/...`
// contoh: imageUrl: "/photos/uas-pembukaan.jpg"
export const uasPhotoGallery = [
  {
    id: "FOTO-01",
    stage: "1. Kegiatan Pembukaan & Apersepsi",
    title: "Berdoa, Presensi, dan Apersepsi Perangkat Harian",
    caption: "Guru membuka pembelajaran di kelas X TP 1 dan memantik diskusi awal mengenai perangkat komputer serta smartphone yang digunakan siswa sehari-hari.",
    imageUrl: ""
  },
  {
    id: "FOTO-02",
    stage: "2. Kegiatan Inti — Eksplorasi Materi",
    title: "Penjelasan Komponen Hardware, Software, dan Brainware",
    caption: "Penyampaian materi Sistem Komputer menggunakan slide visual berhuruf jelas disertai sesi tanya jawab interaktif Cek Konsep.",
    imageUrl: ""
  },
  {
    id: "FOTO-03",
    stage: "3. Kegiatan Inti — Praktikum & Diskusi",
    title: "Demonstrasi Command Prompt (CLI) & Kerja Kelompok",
    caption: "Siswa mengamati demonstrasi perintah dasar direktori (dir, mkdir, cd) pada terminal Command Prompt dan mengerjakan lembar kerja.",
    imageUrl: ""
  },
  {
    id: "FOTO-04",
    stage: "4. Kegiatan Penutup & Refleksi",
    title: "Penyimpulan Materi dan Evaluasi Pembelajaran",
    caption: "Guru bersama peserta didik menyimpulkan interaksi Input-Process-Output pada sistem komputer dan menutup kelas dengan doa.",
    imageUrl: ""
  }
];

export const documentInventory = [
  {
    id: "DOC-01",
    category: "Materi Slide",
    name: "Slide Berpikir Komputasional (X TP 1).pdf",
    type: "Slide Materi (31 Halaman)",
    cycle: "Siklus 1 (UTS)",
    pages: "31 Halaman",
    content: "Materi definisi Berpikir Komputasional (Logis, Sistematis, Efektif, Efisien), contoh harian, 4 Fondasi BK (Dekomposisi, Pengenalan Pola, Abstraksi Mesin Bubut, Algoritma), dan studi kasus kewirausahaan.",
    highlights: [
      "Slide 1–11: Definisi BK & contoh Memasak Mie Instan serta Mencuci Piring.",
      "Slide 17–22: 4 Fondasi BK dengan abstraksi bagian utama Mesin Bubut.",
      "Slide 23–29: Studi kasus strategi penjualan produk kewirausahaan sekolah."
    ],
    usage: "Materi E-Portfolio UTS",
    status: "Dokumen Lengkap",
    fileUrl: "/docs/Berpikir_Komputasional_X_TP_1.pdf"
  },
  {
    id: "DOC-02",
    category: "Video Praktik",
    name: "Video Praktik Mengajar Struktur Data (YouTube)",
    type: "Rekaman Mengajar",
    cycle: "Siklus 1 (UTS)",
    pages: "01:33:48",
    content: "Dokumentasi pembelajaran Linear/Binary Search, Bubble/Selection Sort (roleplay kartu angka), Stack (LIFO), Queue (FIFO), dan kuis evaluasi interaktif dengan rata-rata kelas 81%.",
    highlights: [
      "[00:08:02]–[00:13:11] Penjelasan & visualisasi Searching dan Sorting.",
      "[00:23:00]–[00:34:44] Roleplay kartu angka Bubble & Selection Sort oleh siswa.",
      "[00:41:04]–[01:29:39] Latihan Stack/Queue & kuis evaluasi (rata-rata 81%)."
    ],
    usage: "Dokumentasi E-Portfolio UTS",
    status: "Tersedia Publik",
    fileUrl: "https://youtu.be/CBBoBcWRp1o?si=zcloXQtEIu3pQxoJ"
  },
  {
    id: "DOC-03",
    category: "Materi Slide",
    name: "Slide Sistem Komputer (X TP 1).pdf",
    type: "Slide Materi (91 Halaman)",
    cycle: "Siklus 2 (UAS)",
    pages: "91 Halaman",
    content: "Materi konsep Input-Process-Output, Hardware Internal & Eksternal, Lisensi Software, Brainware, perbandingan CLI vs GUI, demonstrasi Command Prompt, serta 7 pos Cek Konsep.",
    highlights: [
      "Slide 1–16: Konsep Input-Process-Output & 4 klasifikasi komputer.",
      "Slide 17–64: Hardware Internal (Motherboard, CPU, RAM/ROM, SSD/HDD) & Eksternal.",
      "Slide 65–91: Lisensi Software, Brainware, dan perintah CLI (cd, mkdir, dir)."
    ],
    usage: "Materi & Asesmen E-Portfolio UAS",
    status: "Dokumen Lengkap",
    fileUrl: "/docs/Sistem_Komputer_X_TP_1.pdf"
  },
  {
    id: "DOC-04",
    category: "Refleksi Resmi",
    name: "LK.3 Refleksi Praktik Asistensi.pdf",
    type: "Lembar Refleksi Resmi",
    cycle: "Tahap Asistensi",
    pages: "2 Halaman",
    content: "Refleksi pelaksanaan asistensi awal serta penguatan perumusan tujuan pembelajaran berformat ABCD dan penyelarasan instrumen asesmen.",
    highlights: [
      "Pelaksanaan pembukaan, kegiatan inti, diskusi kelompok, dan penutup.",
      "Penyelarasan tujuan pembelajaran berbasis komponen ABCD (Audience, Behavior, Condition, Degree).",
      "Disahkan oleh Guru Pamong & Dosen Pembimbing Lapangan."
    ],
    usage: "Fondasi Perencanaan PPL",
    status: "Disahkan Resmi",
    fileUrl: "/docs/LK3_Refleksi_Asistensi.pdf"
  },
  {
    id: "DOC-05",
    category: "Refleksi Resmi",
    name: "LK.4 Refleksi 1 – Siklus 1 (Berpikir Komputasional).pdf",
    type: "Lembar Refleksi Resmi",
    cycle: "Siklus 1 (UTS)",
    pages: "3 Halaman",
    content: "Refleksi pembelajaran Berpikir Komputasional, penggunaan contoh kontekstual profesi kejuruan, serta pengembangan media slide dan aktivitas diskusi.",
    highlights: [
      "Apersepsi aktivitas harian membantu siswa memahami konsep Berpikir Komputasional.",
      "Pengembangan keterbacaan visual slide presentasi untuk kenyamanan seluruh kelas.",
      "Penerapan metode pembelajaran aktif berbasis simulasi dan kuis interaktif."
    ],
    usage: "Refleksi E-Portfolio UTS",
    status: "Disahkan Resmi",
    fileUrl: "/docs/LK4_Refleksi_1_Siklus_1.pdf"
  },
  {
    id: "DOC-06",
    category: "Refleksi Resmi",
    name: "LK.4 Refleksi 2 – Siklus 2 (Sistem Komputer).pdf",
    type: "Lembar Refleksi Resmi",
    cycle: "Siklus 2 (UAS)",
    pages: "4 Halaman",
    content: "Refleksi pembelajaran Sistem Komputer melalui apersepsi perangkat harian, penguatan instruksi LKM, dan pengelolaan kelas yang berpusat pada siswa.",
    highlights: [
      "Apersepsi perangkat PC, laptop, dan smartphone membangun pemahaman awal siswa.",
      "Penyusunan panduan kerja dan aktivitas identifikasi komponen komputer secara berkelompok.",
      "Penguatan manajemen kelas dengan memperhatikan keberagaman karakteristik belajar siswa."
    ],
    usage: "Refleksi Utama E-Portfolio UAS",
    status: "Disahkan Resmi",
    fileUrl: "/docs/LK4_Refleksi_1_Siklus_2.pdf"
  },
  {
    id: "DOC-07",
    category: "Refleksi Resmi",
    name: "LK.4 Refleksi 3 – Siklus 3 (Analisis Data).pdf",
    type: "Lembar Refleksi Resmi",
    cycle: "Siklus 3 (UAS)",
    pages: "3 Halaman",
    content: "Refleksi pembelajaran pengumpulan, pengolahan, dan penyajian data dalam bentuk tabel/diagram serta penataan sistematika dokumen RPP.",
    highlights: [
      "Kontekstualisasi pengolahan nilai ke dalam bentuk tabel dan diagram visual.",
      "Penataan struktur RPP agar alur kegiatan pembelajaran berjalan semakin sistematis.",
      "Penguatan keterlibatan siswa melalui latihan olah data dan diskusi kelompok."
    ],
    usage: "Refleksi Pengembangan Siklus 3",
    status: "Disahkan Resmi",
    fileUrl: "/docs/LK4_Refleksi_1_Siklus_3.pdf"
  },
  {
    id: "DOC-08",
    category: "Refleksi Resmi",
    name: "LK.4 Refleksi 4 – Siklus 4 (Microsoft Word).pdf",
    type: "Lembar Refleksi Resmi",
    cycle: "Siklus 4 (UAS)",
    pages: "3 Halaman",
    content: "Refleksi pembelajaran berbasis demonstrasi langsung dan praktik mandiri Microsoft Word dengan panduan bertahap (step-by-step).",
    highlights: [
      "Demonstrasi langsung fitur pengaturan huruf, paragraf, dan dokumen laporan sederhana.",
      "Penyediaan panduan langkah demi langkah untuk memfasilitasi keberagaman kecepatan belajar siswa.",
      "Disahkan oleh Guru Pamong & Dosen Pembimbing Lapangan."
    ],
    usage: "Refleksi Pengembangan Siklus 4",
    status: "Disahkan Resmi",
    fileUrl: "/docs/LK4_Refleksi_1_Siklus_4.pdf"
  }
];

export const videoTimestamps = [
  {
    time: "[00:00:33]",
    seconds: 33,
    phase: "Pembukaan",
    title: "Doa & Pemeriksaan Kerapian Kelas",
    desc: "Penyiapan barisan, doa bersama, dan pemeriksaan kerapian pakaian siswa."
  },
  {
    time: "[00:06:17]",
    seconds: 377,
    phase: "Apersepsi",
    title: "Apersepsi Permainan Tebak Angka (1–100)",
    desc: "Mengaitkan permainan tebak angka dengan konsep pencarian nilai tengah."
  },
  {
    time: "[00:08:02]",
    seconds: 482,
    phase: "Searching",
    title: "Visualisasi Linear Search vs Binary Search",
    desc: "Penjelasan mekanisme pencarian berurutan dan pencarian bagi-dua."
  },
  {
    time: "[00:23:00]",
    seconds: 1380,
    phase: "Roleplay",
    title: "Simulasi Kartu Angka: Bubble Sort",
    desc: "Enam siswa per baris mempraktikkan pertukaran Bubble Sort (hasil: 2, 10, 43, 44, 55, 60)."
  },
  {
    time: "[00:34:44]",
    seconds: 2084,
    phase: "Roleplay",
    title: "Simulasi Kartu Angka: Selection Sort",
    desc: "Praktik pengurutan Selection Sort dengan menunjuk siswa sebagai penanda nilai terkecil."
  },
  {
    time: "[00:41:04]",
    seconds: 2464,
    phase: "Struktur Data",
    title: "Latihan Terbimbing Stack (LIFO) & Queue (FIFO)",
    desc: "Pembahasan operasi tumpukan (push/pop) dan antrean (enqueue/dequeue)."
  },
  {
    time: "[01:14:37]",
    seconds: 4477,
    phase: "Evaluasi",
    title: "Kuis Evaluasi Interaktif (22 Soal)",
    desc: "Pelaksanaan evaluasi menyeluruh materi BK, Searching, Sorting, Stack, dan Queue."
  },
  {
    time: "[01:29:39]",
    seconds: 5379,
    phase: "Penutup",
    title: "Capaian Rata-rata Kelas 81% & Penutup",
    desc: "Rekapitulasi skor rata-rata kelas 81%, simpulan bersama, dan doa penutup."
  }
];

export const growthStages = [
  {
    stage: "Tahap Asistensi",
    code: "LK.3",
    topic: "Observasi & Perencanaan Awal",
    focus: "Perumusan tujuan pembelajaran berformat ABCD dan penyelarasan instrumen asesmen.",
    docIndex: 3
  },
  {
    stage: "Siklus 1 (UTS)",
    code: "LK.4 Ref 1",
    topic: "Berpikir Komputasional & Struktur Data",
    focus: "Kontekstualisasi Mesin Bubut, simulasi roleplay kartu angka Sorting, dan kuis interaktif (rata-rata 81%).",
    docIndex: 4
  },
  {
    stage: "Siklus 2 (UAS)",
    code: "LK.4 Ref 2",
    topic: "Sistem Komputer (91 Slide)",
    focus: "Pengembangan visual slide berhuruf jelas, demonstrasi CLI Command Prompt, dan diskusi kelompok LKM.",
    docIndex: 5
  },
  {
    stage: "Siklus 3",
    code: "LK.4 Ref 3",
    topic: "Analisis Data",
    focus: "Penyajian data nilai dalam bentuk tabel/diagram dan penataan sistematika dokumen RPP.",
    docIndex: 6
  },
  {
    stage: "Siklus 4",
    code: "LK.4 Ref 4",
    topic: "Aplikasi Perkantoran (MS Word)",
    focus: "Demonstrasi langsung diikuti praktik mandiri pembuatan laporan dengan panduan langkah demi langkah.",
    docIndex: 7
  }
];