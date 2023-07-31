import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleMenuClick = () => {
    const mobileMenu = document.getElementById("mobile");
    const barsIcon = document.getElementById("barMenu");
    const closeMenu = document.getElementById("closeMenu");

    if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
      barsIcon.style.display = "block";
      closeMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "flex";
      barsIcon.style.display = "none";
      closeMenu.style.display = "block";
    }
  };
  return (
    <div className="nav">
      <Link className="navElement logo" to={"/"}>
        CARS.
      </Link>
      <div id="mobile" className="mobile">
        <Link className="navElement list" to={"/"}>
          OFFER
        </Link>
        <Link className="navElement list" to={"/"}>
          ABOUT
        </Link>

        <Link className="navElement list" to={"/rent"}>
          RENT
        </Link>
        <Link className="navElement list" to={"/"}>
          CONTACT
        </Link>
      </div>
      <div id="hamMenu" className="hamMenu" onClick={handleMenuClick}>
        <i id="barMenu" className="fa-solid fa-bars bars"></i>
        <i id="closeMenu" className="fa-regular fa-circle-xmark close"></i>
      </div>
    </div>
  );
};

export default Navbar;
