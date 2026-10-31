import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { teacherIdentity } from '../data/PortofolioData';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-banner">
        <div className="container top-banner-inner">
          <span>PPG Calon Guru Bidang Studi Informatika — {teacherIdentity.university}</span>
          <span>PPL {teacherIdentity.school} ({teacherIdentity.mainClass})</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand" onClick={() => navigate('/')}>
            <div className="brand-badge">AR</div>
            <div>
              <h1 className="brand-title">{teacherIdentity.name}</h1>
              <p className="brand-subtitle">NIM {teacherIdentity.nim} • E-Portfolio PPG Informatika</p>
            </div>
          </div>

          <nav className="main-nav" aria-label="Navigasi Utama">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
              Beranda
            </NavLink>
            <NavLink to="/profil" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
              Profil Guru
            </NavLink>
            <NavLink to="/uts" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
              E-Portfolio UTS
            </NavLink>
            <NavLink to="/uas" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
              E-Portfolio UAS
            </NavLink>
            <NavLink to="/perjalanan" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
              Perjalanan & Bukti PPG
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}