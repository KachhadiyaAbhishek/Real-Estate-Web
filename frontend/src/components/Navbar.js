import React, { useState, useEffect } from "react";
import "./css/Navbar.css";
import img from "./images/rlogo.png";

function Navbar() {
  const [navBackground, setNavBackground] = useState("transparent");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const showBackground = window.scrollY > 50;
      setNavBackground(showBackground ? "black" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ backgroundColor: navBackground }}>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={img} alt="logo" className="nav-img" />
          <a href="/" className="logo">HomeScape</a>
        </div>
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/property">Property</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/calculators">Calculators</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="hamburger" onClick={toggleMenu}>
            &#9776; 
          </button>
          <a href="/contact">
            <button type="button" className="btn btn-outline-primary">Contact</button>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
