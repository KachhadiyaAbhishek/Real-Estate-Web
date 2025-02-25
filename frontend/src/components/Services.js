import React from "react";
import "./css/Services.css";
import img1 from "./images/s1.jpg";
import img2 from "./images/s2.jpg";
import img3 from "./images/s3.jpg";
import img4 from "./images/s4.jpg";

function Services() {
  return (
    <section className="services-section">
      <div className="service-div">
        <div className="services-header">
          <h2>
            <span>OUR</span> <span className="highlight">SERVICES</span>
          </h2>
          <p className="services-description">
            TREC'S REAL ESTATE ADVISORY SERVICES INCLUDE DEAL INITIATION,
            SELLING AND PURCHASE NEGOTIATIONS, CLOSING FORMALITIES AND FINANCING
            OPTIONS.
          </p>
          <p className="services-details">
            <ul>
              <span>We make sure that investments and potential acquisitions meet the
              following conditions:</span>
              <li>-> Adequate capital security</li>
              <li>-> Complementary to existing real estate investments</li>
              <li>-> Futuristic investment options at a lucrative price-point</li>
            </ul>
          </p>
        </div>
        <div className="services-grid">
          <div className="service-item1">
            <img src={img1} alt="Buy" />
            <p>Buy</p>
          </div>
          <div className="service-item2">
            <img src={img2} alt="Sell" />
            <p>Sell</p>
          </div>
          <div className="service-item3">
            <img src={img3} alt="Rent" />
            <p>Rent</p>
          </div>
          <div className="service-item4">
            <img src={img4} alt="Invest" />
            <p>Invest</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
