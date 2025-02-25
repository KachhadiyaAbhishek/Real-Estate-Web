import React, { useEffect, useState } from "react";
import img from "./images/about.jpg";
import "./css/about.css";
import img2 from "./images/mission.svg";
import img3 from "./images/vision.svg";
import img4 from "./images/values.png";
import Contact from "./Contact";

function About() {

  const [builder, setBuilders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/builder/")
      .then((response) => response.json())
      .then((data) => setBuilders(data))
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  return (
    <section className="about">
      <div className="property-img">
        <img src={img} alt="propert" />
        <div className="property-header">
          <span className="highlight1">HOME / ABOUT</span>
          <span className="highlight2">ABOUT</span>
        </div>
      </div>
      <div className="propert-contect">
        <p>
          Check out our premier showcase of projects, featuring prime locations
          and superior amenities from esteemed developers. These properties
          exemplify the highest standards of quality and value, offering
          unmatched appeal. Our team is dedicated to securing the best deals on
          these top-tier developments, ensuring every detail is tailored to your
          unique needs and bringing your real estate vision to life. These are
          just a few of our featured and latest offerings; additional options
          are available by consulting with our experts.
        </p>
      </div>
      <div className="custom-section">
        <div>
          <h2 className="property-header1">
            <span>MISSION, VISION</span>
            <span className="highlight"> AND VALUES</span>
          </h2>
        </div>
        <div className="custom-cards-container">
          <div className="custom-card">
            <div className="custom-icon">
              <img src={img2} alt="Mission Icon" />
            </div>
            <p>
              Our <span className="custom-highlight">mission</span> is to
              provide the highest possible service levels for real estate
              requirements keeping clients’ interest as our topmost priority.
            </p>
          </div>

          <div className="custom-card">
            <div className="custom-icon">
              <img src={img3} alt="Vision Icon" />
            </div>
            <p>
              We <span className="custom-highlight">envision</span> our
              clientele to be extremely satisfied as we push the boundaries of
              service and innovation in the real estate world with tenacity and
              conviction.
            </p>
          </div>

          <div className="custom-card">
            <div className="custom-icon">
              <img src={img4} alt="Values Icon" />
            </div>
            <p>
              We uphold the <span className="custom-highlight">values</span> of
              truth, quality, and integrity in our organization, backed up by
              ambition as the firepower for our consistent growth and
              advancement in the sector.
            </p>
          </div>
        </div>
      </div>
      <div className="builders">
        <h2 className="property-header1">
          <span>BUILDERS WE</span>
          <span className="highlight"> REPRESENT</span>
        </h2>
        <div className="builders-grid">
          {builder.map((builder, index) => (
            <div key={index} className="builder-card">
              <img src={`http://127.0.0.1:8000${builder.logo}`} alt={`builder-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <Contact/>
    </section>
  );
}

export default About;