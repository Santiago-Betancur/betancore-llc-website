// src/components/About.js
import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header"></div>
        {/* Mission and Vision Section */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Betancore LLC, we are dedicated to investing in tech
            diversity and driving innovation through technology-driven projects
            and startups. Our mission is to foster growth and success by
            supporting a wide range of initiatives that push the boundaries of
            what's possible. Whether it's through affiliate marketing, strategic
            partnerships, or our own entrepreneurial ventures, we strive to
            create a dynamic ecosystem where cutting-edge ideas can flourish. We
            believe in the power of technology to transform industries and
            improve lives. By leveraging our expertise and resources, we help
            businesses navigate the complexities of the modern digital landscape
            and achieve their goals. From groundbreaking startups to established
            enterprises, Betancore LLC is your partner in progress, committed to
            excellence, integrity, and collaborative success. 
          </p>
          {/* Call-to-Action Section */}
          <div className="about-cta">
            <button onClick={() => (window.location.href = "#contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;