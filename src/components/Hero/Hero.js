import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background"></div>
      <div className="hero">
        <div className="heroBox">
          <h2>Discover the perfect ride for your journey!</h2>
          <h1>RENT ONE OF OUR CARS NOW</h1>
          <button>RENT</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
