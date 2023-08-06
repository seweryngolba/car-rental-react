import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
          <HashLink className="footElement" to={"/#offer"}>
            OFFER
          </HashLink>
          <HashLink className="footElement" to={"/#about"}>
            ABOUT
          </HashLink>
          <Link className="footElement" to={"/rent"}>
            RENT
          </Link>
          <HashLink className="footElement" to={"/#contact"}>
            CONTACT
          </HashLink>
        </div>
        <div className="iconSection">
          <h4 className="iconTitle">FIND US ON:</h4>
          <div className="icons">
            <a href="/">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
