import React from "react";
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="nav-container">
                <h1 className="logo">BetanCore LLC</h1>
                <nav className="nav-links">
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
