import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PdfModal from './components/Pdfmodal';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PortofolioUTS from './pages/PortofolioUTS';
import PortofolioUAS from './pages/PortofolioUAS';
import Journey from './pages/Journey';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [previewDoc, setPreviewDoc] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/uts" element={<PortofolioUTS setPreviewDoc={setPreviewDoc} />} />
            <Route path="/uas" element={<PortofolioUAS setPreviewDoc={setPreviewDoc} />} />
            <Route path="/perjalanan" element={<Journey setPreviewDoc={setPreviewDoc} />} />
          </Routes>
        </main>
        <PdfModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />
        <Footer />
      </div>
    </Router>
  );
}