import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";
import "./css/PropertySection.css";

function PropertySection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/add/")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="property">
      <h2 className="property-header1">
        <span>OUR</span> <span className="highlight">PROPERTY</span>
      </h2>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="card1" key={index}>
            <img className="card1-image" src={`http://127.0.0.1:8000${card.photo_main}`} alt={card.name} />
            <div className="card1-header">
              <span className="badge1 rent-badge1">{card.sale_type}</span>
              <span className="badge1 featured-badge1">{card.home_type}</span>
            </div>
            <div className="card1-info">
              <div className="card1-title">
                <span className="card-link"><a href={`/property/${card.id}`}>{card.name}</a></span>
                <span className="c1-price">
                  <FaRupeeSign />
                  {card.price}
                </span>
              </div>
              <p className="card1-address">
                <FaMapMarkerAlt />
                {card.address}
              </p>
              <div className="card1-details">
                <div className="detail1-item">
                  <FaBed /> {card.bedrooms} Beds
                </div>
                <div className="detail1-item">
                  <FaBath /> {card.bathrooms} Baths
                </div>
                <div className="detail1-item">
                  <FaRulerCombined /> {card.sqft} Sqft
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      &gt; {/* Right arrow symbol */}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      &lt; {/* Left arrow symbol */}
    </div>
  );
};

export default PropertySection;
