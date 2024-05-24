// src/components/About.js
import React from "react";
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            {/* Header Section */}
            <div className="about-header"></div>
{/* Mission and Vision Section */}
            <div className="about-mission-vision">
                <div className="mission">
                    <h2>About Us</h2>
                    <p>To drive innovation and invest in the future, ensuring sustainable growth and success.</p>
                </div>
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>To be a leader in technological advancements, continuously evolving to meet the needs of tomorrow.</p>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="about-core-values">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    <div className="value">
                        <h3>Innovation</h3>
                        <p>We prioritize cutting-edge solutions to stay ahead in the industry.</p>
                    </div>
                    <div className="value">
                        <h3>Integrity</h3>
                        <p>Our actions are guided by honesty, ethics, and accountability.</p>
                    </div>
                    <div className="value">
                        <h3>Excellence</h3>
                        <p>We strive for the highest standards in everything we do.</p>
                    </div>
                    <div className="value">
                        <h3>Collaboration</h3>
                        <p>Teamwork and partnerships are key to our success.</p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="about-cta">
                <button onClick={() => window.location.href='#contact'}>Contact Us</button>
            </div>
        </div>
    );
}

export default About;
