import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/sitio-web.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/register" className="nav-link" onClick={() => setMenuOpen(false)}>Registro</Link></li>
        <li><Link to="/subscribe" className="nav-link" onClick={() => setMenuOpen(false)}>Subscribirse</Link></li>
      </ul>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
