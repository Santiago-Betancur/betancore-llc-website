// src/components/Header.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="nav-container">
                <h1 className="logo">BetanCore LLC</h1>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? '✖' : '☰'}
                </button>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>About Us</Link>
                    <Link to="/services" onClick={toggleMenu}>Services</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
