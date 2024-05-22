// src/components/Home.js
import React, { useState } from "react";
import '../styles/Home.css';

function Home() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="home">
            <div className="core-section">
                <div
                    className={`core-sphere ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <p className="message">Investing in the future while being the center of the corporation.</p>
            </div>
        </div>
    );
}

export default Home;
