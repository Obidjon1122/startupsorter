
import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to the Future of Sorting</h1>
        <p>Innovative solutions tailored for your needs.</p>
        <a href="/products" className="cta-button">Explore Products</a>
      </header>
    </div>
  );
}

export default LandingPage;
