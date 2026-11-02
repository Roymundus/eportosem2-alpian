import React from 'react';
import { useNavigate } from 'react-router-dom';
import { biodata } from '../data/biodata';
import { FaArrowRight, FaBookOpen, FaBuildingColumns, FaBullseye, FaCheck, FaFileArrowUp, FaGem, FaHeart, FaLightbulb, FaSchool, FaShieldHeart, FaStar, FaUserGraduate } from 'react-icons/fa6';

const actionIcons = [FaArrowRight, FaBuildingColumns, FaSchool, FaCheck, FaArrowRight];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="seminar-home">
      <section className="seminar-hero">
        <div className="seminar-hero-content">
          <div className="hero-eyebrow-row">
            <span className="hero-eyebrow">Portofolio Seminar PPG • Identifikasi Diri (LK 1)</span>
            <button className="hero-file-link" onClick={() => navigate('/profil')}>
              <FaFileArrowUp aria-hidden="true" /> Lihat Profil Lengkap
            </button>
          </div>
          <h2>{biodata.namaLengkap}</h2>
          <p className="seminar-tagline">{biodata.tagline}</p>
          <div className="seminar-facts">
            <div className="seminar-fact">
              <span className="fact-icon" aria-hidden="true"><FaUserGraduate /></span>
              <span><small>NIM MAHASISWA</small><strong>{biodata.nim}</strong></span>
            </div>
            <div className="seminar-fact">
              <span className="fact-icon" aria-hidden="true"><FaBookOpen /></span>
              <span><small>BIDANG KEAHLIAN</small><strong>{biodata.bidangStudi}</strong></span>
            </div>
            <div className="seminar-fact">
              <span className="fact-icon" aria-hidden="true"><FaSchool /></span>
              <span><small>LOKASI PPL</small><strong>{biodata.sekolahPPL}</strong></span>
            </div>
            <div className="seminar-fact">
              <span className="fact-icon" aria-hidden="true"><FaBuildingColumns /></span>
              <span><small>PERGURUAN TINGGI</small><strong>{biodata.perguruanTinggi}</strong></span>
            </div>
          </div>
        </div>
        <div className="seminar-profile-frame">
          <div className="profile-glow" />
          <img src={biodata.fotoProfil} alt={biodata.namaLengkap} />
          <span className="profile-caption">CALON GURU PROFESIONAL</span>
        </div>
      </section>

      <section className="vision-grid seminar-section">
        <article className="vision-card vision-card-pink">
          <div className="vision-card-top">
            <span className="vision-icon" aria-hidden="true"><FaBullseye /></span>
            <span className="section-pill pink-pill">VISI PENDIDIKAN INDONESIA</span>
          </div>
          <h3>Visi Pribadi untuk Pendidikan di Indonesia</h3>
          <blockquote>{biodata.visiPendidikanIndonesia}</blockquote>
        </article>
        <article className="vision-card vision-card-blue">
          <div className="vision-card-top">
            <span className="vision-icon" aria-hidden="true"><FaLightbulb /></span>
            <span className="section-pill blue-pill">VISI PENDIDIK ABAD 21</span>
          </div>
          <h3>Visi Pribadi sebagai Calon Guru</h3>
          <blockquote>{biodata.visiCalonGuru}</blockquote>
        </article>
      </section>

      <section className="seminar-section action-section">
        <div className="section-heading">
          <span className="heading-kicker">KOMITMEN PENGEMBANGAN DIRI</span>
          <h2>Hal yang Dilakukan untuk Mencapai Visi</h2>
          <p>Lima pilar aksi strategis yang menjadi panduan operasional dalam praktik pembelajaran dan pengembangan diri.</p>
        </div>
        <div className="action-grid">
          {biodata.misiPribadi.map((mission, index) => (
            <article className="action-card" key={mission}>
              {(() => {
                const ActionIcon = actionIcons[index];
                return (
                  <>
              <span className="action-number">0{index + 1}</span>
              <span className="action-icon" aria-hidden="true"><ActionIcon /></span>
              <h3>Pilar Aksi #{index + 1}</h3>
              <p>{mission}</p>
                  </>
                );
              })()}
            </article>
          ))}
        </div>
      </section>

      <section className="seminar-section values-section">
        <div className="section-heading">
          <span className="heading-kicker">NILAI DASAR</span>
          <h2>Nilai-Nilai Dasar Pendidik</h2>
          <p>Prinsip etis dan pedagogis yang melandasi setiap interaksi dan rancangan pembelajaran di {biodata.sekolahPPL}.</p>
        </div>
        <div className="values-grid">
          {biodata.nilaiNilaiUtama.map((value, index) => (
            <article className="value-card" key={value.judul}>
              <span className={`value-icon value-icon-${index}`} aria-hidden="true">
                {React.createElement([FaHeart, FaStar, FaShieldHeart, FaGem][index])}
              </span>
              <h3>{value.judul}</h3>
              <p>{value.deskripsi}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seminar-cta">
        <div>
          <span className="heading-kicker">PORTOFOLIO PEMBELAJARAN</span>
          <h2>Jelajahi portofolio pembelajaran saya</h2>
          <p>Lihat refleksi dan perangkat pembelajaran Informatika dari kegiatan PPG.</p>
        </div>
        <div className="cta-actions">
          <button className="seminar-button seminar-button-primary" onClick={() => navigate('/uts')}>Refleksi &amp; Portofolio UTS</button>
        </div>
      </section>
    </div>
  );
}
