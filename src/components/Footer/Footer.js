import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="footerPhoto"></div>
      <div className="footerContainer">
        <div className="footerMain">
          <Link className=" footLogo" to={"/"} onClick={handleScrollToTop}>
            CARS.
          </Link>
          <p className="footerText">
            YOUR ROAD TO EXCELLENCE! DRIVEN BY INNOVATION, QUALITY, AND TRUST.
          </p>
        </div>
        <div className="footerList">
          <Link className="footElement" to={"/"}>
            OFFER
          </Link>
          <Link className="footElement" to={"/"}>
            ABOUT
          </Link>
          <Link className="footElement" to={"/rent"}>
            RENT
          </Link>
          <Link className="footElement" to={"/"}>
            CONTACT
          </Link>
        </div>
        <div className="iconSection">
          <h4 className="iconTitle">FIND US ON:</h4>
          <div className="icons">
            <a href="javascript:;">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="javascript:;">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="javascript:;">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
