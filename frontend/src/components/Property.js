import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaRupeeSign,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./css/Property.css";
import img from "./images/property.png";

function Property() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filters, setFilters] = useState({
    price: "",
    address: "",
    bathrooms: "",
    bedrooms: "",
    name: "",
    sqft: "",
    sale_type: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/add/")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        // console.log(data)
        setFilteredCards(data);
      })
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      filterCards(newFilters);
      return newFilters;
    });
  };

  const filterCards = (filterValues) => {
    const filtered = cards.filter((card) => {
      const matchesFilters =
        (filterValues.sale_type
          ? card.sale_type.toLowerCase() === filterValues.sale_type.toLowerCase()
          : true) &&
        (filterValues.name
          ? card.name.toLowerCase().includes(filterValues.name.toLowerCase())
          : true) &&
        (filterValues.price
          ? card.price <= Number(filterValues.price)
          : true) &&
        (filterValues.address
          ? card.address.toLowerCase().includes(filterValues.address.toLowerCase())
          : true) &&
        (filterValues.bathrooms
          ? card.bathrooms === Number(filterValues.bathrooms)
          : true) &&
        (filterValues.bedrooms
          ? card.bedrooms === Number(filterValues.bedrooms)
          : true) &&
        (filterValues.sqft
          ? card.sqft >= Number(filterValues.sqft)
          : true);

      return matchesFilters;
    });

    setFilteredCards(filtered);
  };

  return (
    <section className="property">
      <div className="property-img">
        <img src={img} alt="property" />
        <div className="property-header">
          <span className="highlight1">HOME / PROJECTS</span>
          <span className="highlight2">PROPERTY</span>
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
      <div>
        <h2 className="property-header1">
          <span>SEARCH</span> <span className="highlight">BY</span>
        </h2>
        <select
          name="sale_type"
          value={filters.sale_type}
          onChange={handleFilterChange}
        >
          <option value="">Sale Type</option>
          <hr />
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>
        <div className="filter-container">
          <input
            type="text"
            name="name"
            placeholder="Property Name"
            value={filters.name}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Max Price"
            value={filters.price}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={filters.address}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="bedrooms"
            placeholder="Bedrooms"
            value={filters.bedrooms}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="bathrooms"
            placeholder="Bathrooms"
            value={filters.bathrooms}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="sqft"
            placeholder="Min Sqft"
            value={filters.sqft}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="grid-container">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div className="card" key={index}>
              <img
                className="card-image"
                src={`http://127.0.0.1:8000${card.photo_main}`}
                alt={card.name}
              />
              <div className="card-header">
                <span className="badge rent-badge">{card.sale_type}</span>
                <span className="badge featured-badge">{card.home_type}</span>
              </div>
              <div className="card-info">
                <div className="card-title">
                  <span className="card-link"><a href={`/property/${card.id}`}>{card.name}</a></span>
                  <span className="c-price">
                    <FaRupeeSign />
                    {card.price}
                  </span>
                </div>
                <p>
                  <FaMapMarkerAlt />
                  {card.address}
                </p>
                <div className="card-details">
                  <div className="detail-item">
                    <FaBed /> {card.bedrooms} Beds
                  </div>
                  <div className="detail-item">
                    <FaBath /> {card.bathrooms} Baths
                  </div>
                  <div className="detail-item">
                    <FaRulerCombined /> {card.sqft} Sqft
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties found...</p>
        )}
      </div>
    </section>
  );
}

export default Property;