import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroBackground"></div>
      <div className="hero">
        <div className="heroBox">
          <h2 className="subTitle">
            DISCOVER THE PERFECT RIDE FOR YOUR JOURNEY!
          </h2>
          <h1 className="title">RENT ONE OF OUR CARS NOW</h1>
          <a className="rentNow" href="/rent">
            RENT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
