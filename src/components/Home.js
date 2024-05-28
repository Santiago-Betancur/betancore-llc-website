import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="cube">
        <div className="core-sphere"></div>
        <p className="message">
          "Focused on the future, never wavering from our true purpose."
        </p>
        <div className="learn-button">
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
