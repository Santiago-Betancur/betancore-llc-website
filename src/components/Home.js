// src/components/Home.js
import React from "react";
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="cube">
                <div className="core-sphere"></div>
                <p className="message">
"Focused on the future, never wavering from our true purpose."</p>
                <div className="contact-button">
                    <button onClick={() => window.location.href='#contact'}>Contact</button>
                </div>
            </div>
            
        </div>
    );
}

export default Home;
