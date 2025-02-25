import React, { useState } from "react";
import "./css/Contact.css";
// import img from './images/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

    fetch("http://127.0.0.1:8000/contact/", {
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
        alert("Successfully Send Data And Mail.");
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };

  return (
    // <section  className="contact">
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h3>CONTACT</h3>
          <h1>GET CONNECTED</h1>
          <p>
            Contact us today to discuss your dream home or investment
            opportunity.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group two-column">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              minLength={10}
              maxLength={10}
              pattern="\d{10}"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            SEND
          </button>
        </form>
      </div>
    </div>
    // </section>
  );
};

export default Contact;
