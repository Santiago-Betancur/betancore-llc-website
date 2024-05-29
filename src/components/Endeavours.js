// src/components/Endeavours.js
import React from 'react';
import '../styles/Endeavours.css';

// Define the array of endeavours
const endeavours = [
  {
    title: "TopTek",
    image: require('../resourses/TopTekTempLogo.jpg'),
    description: "TopTek is a leading technology solutions provider, specializing in innovative products and services that enhance business operations and improve everyday life. We generate revenue through affiliate marketing by promoting third-party products and earning commissions on sales.",
    link: "https://example.com/toptek"
  },
  // Add more endeavours as needed
];

const Endeavours = () => {
  return (
    <div className="endeavours">
      <h1 className="endeavours-title">Our Endeavours</h1>
      {endeavours.map((endeavour, index) => (
        <div className="endeavour" key={index}>
          <div className="endeavour-image">
            <img src={endeavour.image} alt={endeavour.title} />
          </div>
          <div className="endeavour-content">
            <h2>{endeavour.title}</h2>
            <p>{endeavour.description}</p>
            <button onClick={() => window.location.href = endeavour.link}>
              Visit Website
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Endeavours;
