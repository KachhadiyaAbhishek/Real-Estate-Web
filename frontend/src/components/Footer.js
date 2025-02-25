import React, { useState } from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import img from "./images/rlogo.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("Successfully sent mail.");
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>
            <img src={img} alt="logo" />
            HomeScape
          </h2>
          <div className="subscribe-section">
            <h4>Subscribe</h4>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <textarea
                rows="1"
                cols="1"
                required
                name="message"
                placeholder="Your message"
                className="textarea"
                value={formData.message}
                onChange={handleChange}
              />
              <input
                className="email"
                type="email"
                name="email"
                placeholder="E-mail*"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <button type="submit" id="subscribe-button">Send ➔</button>
            </form>
          </div>
        </div>
        <div className="footer-section">
          <h4>Discover</h4>
          <ul>
            <li>Ahmedabad</li>
            <li>Surat</li>
            <li>Rajkot</li>
            <li>Bopal</li>
            <li>Gota</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/property">Property</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/calculators">Calculators</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>hi@HomeScapehome.com</p>
          <p>+91 8586565356</p>
        </div>
        <div className="footer-section">
          <h4>Our Address</h4>
          <p>39/B453 Shivalik, Bopal, Ahmedabad</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>Copyright © 2024. HomeScape</p>
      </div>
    </footer>
  );
};

export default Footer;