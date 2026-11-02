import React from 'react';
import { NavLink } from 'react-router-dom';
import { biodata } from '../data/biodata';
import { FaBookOpen, FaHouse, FaRoute, FaUsers } from 'react-icons/fa6';
import { FaUserGraduate } from 'react-icons/fa';

const links = [
  { to: '/', icon: FaHouse, label: 'Beranda' },
  { to: '/profil', icon: FaUserGraduate, label: 'Profil Guru' },
  { to: '/uts', icon: FaBookOpen, label: 'E-Portfolio UTS' },
  { to: '/uas', icon: FaBookOpen, label: 'E-Portfolio UAS' },
  { to: '/non-mengajar', icon: FaUsers, label: 'Kegiatan non-Mengajar' },
  { to: '/perjalanan', icon: FaRoute, label: 'Perjalanan & Bukti PPG' }
];

export default function Navbar() {
  return (
    <header className="seminar-navbar">
      <div className="seminar-navbar-inner">
        <NavLink to="/" end className="seminar-brand">
          <span className="seminar-brand-mark" aria-hidden="true"><FaHouse /></span>
          <span>
            <strong>E-Portofolio PPG <em>UNY 2025</em></strong>
            <small>{biodata.namaLengkap.split(',')[0]} • {biodata.bidangStudi} SMK N 2 Yk</small>
          </span>
        </NavLink>

        <nav className="seminar-nav-links" aria-label="Navigasi utama">
          {links.map((link, index) => (
            <NavLink
              key={`${link.label}-${index}`}
              to={link.to}
              className={({ isActive }) => `seminar-nav-link ${isActive ? 'active' : ''}`}
            >
              <span aria-hidden="true"><link.icon /></span>
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
