import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FindYourPlace</div>
      <nav>
        <ul>
          <li>Beranda</li>
          <li>Daftar Tempat</li>
          <li>Tentang Kami</li>
          <li>Kontak</li>
        </ul>
      </nav>
      <div className="user-icon">🔍</div>
    </header>
  );
};

export default Header;
