import React from "react";
import "./css/Home.css";
import Services from "./Services";
import PropertySection from "./PropertySection";
import img from "./images/home5.jpg";

function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="home-img">
          <img src={img} alt="home" />
          <div className="hero-container">
            <div className="hero-overlay">
              <span className="hero-title">LET US GUIDE YOUR HOME</span>
              <h1>Discover a place you'll love to live</h1>
              <div className="hero-options">
                <a href="/property">
                  <button className="buy-option">Buy</button>
                </a>
                <a href="/property">
                  <button className="rent-option">Rent</button>
                </a>
              </div>
              <div className="hero-search">
                <input type="text" placeholder="Enter key word" />
                <button className="search-button">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PropertySection />
      <Services />
    </>
  );
}

export default Home;
