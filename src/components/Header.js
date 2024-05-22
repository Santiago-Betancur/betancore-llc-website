import React, { useState } from "react";
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
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
