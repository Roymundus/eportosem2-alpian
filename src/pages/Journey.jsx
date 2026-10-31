import React from 'react';
import { documentInventory } from '../data/PortofolioData';

export default function Journey({ setPreviewDoc }) {
  return (
    <div className="container">
      <div className="page-header">
        <span className="badge badge-navy">BAGIAN III & VI — SINTESIS PERKEMBANGAN & INVENTARISASI</span>
        <h2>Perjalanan Profesional & Inventarisasi Bukti PPG</h2>
        <p>
          Rekam jejak kronologis perkembangan kompetensi dari Praktik Asistensi hingga Siklus 4 serta daftar
          transparansi seluruh dokumen yang digunakan.
        </p>
      </div>

      <section className="card section-block">
        <h3>Matriks Perkembangan Kompetensi Calon Guru (Asistensi s.d. Siklus 4)</h3>
        <p>
          Tabel berikut memetakan hubungan kausal antara permasalahan yang ditemukan di kelas, umpan balik Guru
          Pamong & DPL, kesadaran reflektif yang diperoleh, serta perubahan nyata yang dilakukan dari waktu ke waktu:
        </p>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tahapan Praktik</th>
                <th>Permasalahan yang Ditemukan</th>
                <th>Umpan Balik Guru Pamong & DPL</th>
                <th>Kesadaran & Perubahan Nyata yang Dilakukan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Praktik Asistensi</strong><br />(<code>LK.3.PPLM</code>)</td>
                <td>
                  • Perbedaan pemahaman awal siswa & keterbatasan waktu diskusi.<br />
                  • Beberapa siswa pasif, mengantuk, bahkan tertidur saat pembelajaran siang.<br />
                  • Kendala teknis perangkat/internet.
                </td>
                <td>
                  • Tujuan pembelajaran belum menggunakan metode <strong>ABCD</strong> secara menyeluruh.<br />
                  • Asesmen belum sesuai topik/tujuan awal.<br />
                  • Rubrik penilaian belum spesifik.<br />
                  • Implementasi <em>deep learning</em> belum tampak jelas.
                </td>
                <td>
                  • Memperbaiki rumusan Tujuan Pembelajaran dengan komponen <em>Audience, Behavior, Condition, Degree</em>.<br />
                  • Memastikan keselarasan (<em>alignment</em>) antara tujuan, materi, dan asesmen pada siklus mandiri.
                </td>
              </tr>
              <tr>
                <td><strong>Siklus 1 Mandiri</strong><br />Berpikir Komputasional & Struktur Data<br />(<code>LK.4 Ref 1</code> & Video)</td>
                <td>
                  • Asesmen Quizizz di Pertemuan 1 terkendala komputer & jaringan internet.<br />
                  • Partisipasi siswa dalam tanya jawab lisan belum merata.
                </td>
                <td>
                  • Ukuran tulisan pada slide presentasi terlalu kecil dan perlu diperbesar agar terbaca jelas oleh seluruh siswa di kelas.
                </td>
                <td>
                  • <strong>Inovasi Aktivitas:</strong> Menerapkan permainan tebak angka 1–100 & <em>roleplay</em> kartu angka <em>Sorting</em> (6 barisan maju ke depan) sehingga rata-rata kuis kelas mencapai <strong>81%</strong>.<br />
                  • <strong>Perbaikan Visual:</strong> Memperbesar ukuran huruf pada slide materi Siklus 2.
                </td>
              </tr>
              <tr>
                <td><strong>Siklus 2 Mandiri</strong><br />Sistem Komputer<br />(<code>LK.4 Ref 2</code> & 91 Slide)</td>
                <td>
                  • LKM dan instruksi tugas verifikasi medsos belum disiapkan dengan matang sehingga siswa bingung dan beberapa tidak mengumpulkan tugas.<br />
                  • Sebagian siswa masih pasif.
                </td>
                <td>
                  • Perlu meningkatkan <strong>penguasaan kelas</strong> dan lebih memahami keberagaman <strong>karakteristik murid</strong> (gaya belajar, keaktifan, cara merespons).
                </td>
                <td>
                  • Menyadari bahwa slide yang baik harus didukung LKM yang sama matangnya.<br />
                  • Menyempurnakan LKM untuk kelas blok berikutnya agar selaras langsung dengan identifikasi komponen Sistem Komputer & simulasi CLI.
                </td>
              </tr>
              <tr>
                <td><strong>Siklus 3 Mandiri</strong><br />Analisis Data<br />(<code>LK.4 Ref 3</code>)</td>
                <td>
                  • Penjelasan konsep dan contoh visual tabel/diagram terbantu, namun pemerataan keaktifan seluruh siswa masih perlu ditingkatkan.
                </td>
                <td>
                  • Materi yang digunakan sudah baik dan sesuai kebutuhan murid, namun <strong>sistematika penyusunan RPP</strong> perlu diperbaiki sesuai kaidah.
                </td>
                <td>
                  • Menyelaraskan apersepsi pengolahan nilai dengan latihan penyajian data visual.<br />
                  • Menata ulang struktur dan sistematika RPP agar alur kegiatan inti lebih mengaktifkan diskusi kelompok.
                </td>
              </tr>
              <tr>
                <td><strong>Siklus 4 Mandiri</strong><br />Microsoft Word<br />(<code>LK.4 Ref 4</code>)</td>
                <td>
                  • Kecepatan belajar dan tingkat penguasaan keterampilan komputer antar-murid beragam saat praktik langsung.
                </td>
                <td>
                  • Penguatan konsistensi sistematika RPP untuk memandu pembelajaran berbasis praktik secara runtut.
                </td>
                <td>
                  • Menerapkan demonstrasi langsung diikuti praktik mandiri pembuatan dokumen.<br />
                  • Mengembangkan <strong>panduan langkah demi langkah (<em>step-by-step</em>)</strong> dan pendampingan merata sesuai kebutuhan murid.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="card section-block">
        <h3>Tabel Inventarisasi Seluruh Dokumen & Status Kelengkapan Bukti</h3>
        <p>
          Daftar lengkap dokumen yang menjadi fondasi penyusunan E-Portfolio ini beserta pembedaan statusnya
          (Dokumen Asli yang Digunakan, Dokumen Rekonstruksi Berdasarkan Praktik, dan Dokumen Pengembangan):
        </p>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Nama Dokumen / Bukti</th>
                <th>Jenis Bukti</th>
                <th>Siklus / Topik</th>
                <th>Kegunaan</th>
                <th>Status & Catatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {documentInventory.map((doc) => (
                <tr key={doc.id}>
                  <td><strong>{doc.id}</strong></td>
                  <td>{doc.name}</td>
                  <td><span className="badge badge-navy">{doc.type}</span></td>
                  <td>{doc.cycle}</td>
                  <td>{doc.usage}</td>
                  <td>
                    <strong>{doc.status}</strong>
                    <br />
                    <small>{doc.notes}</small>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setPreviewDoc(doc)}
                    >
                      Pratinjau
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}