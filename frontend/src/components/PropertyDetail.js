import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/PropertyDetail.css";

const PropertyDetail = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/property/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  const images = [
    Details.photo_1,
    Details.photo_2,
    Details.photo_3,
    Details.photo_4,
    Details.photo_5,
    Details.photo_6,
  ].filter((image) => image); // Filter out undefined images

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, [currentIndex, images.length]);

  return (
    <div className="propertyDetails">
      <div className="carousel">
        <button onClick={prevSlide} className="arrow left-arrow">
          ❮
        </button>
        {images.length > 0 && (
          <img
            src={`http://127.0.0.1:8000${images[currentIndex]}`}
            alt="carousel"
            className="carousel-image"
          />
        )}
        <h1 className="p-name">{Details.name}</h1>
        <button onClick={nextSlide} className="arrow right-arrow">
          ❯
        </button>
      </div>
      <div className="Details-header">
        <span className="badge rent-badge">{Details.sale_type}</span>
        <span className="badge featured-badge">{Details.home_type}</span>
      </div>
      <div className="property-details">
        <h2 className="property-header1">
          <span>PROPERTY</span> <span className="highlight">DETAILS</span>
        </h2>
        <div className="grid-container1">
          <div className="detail">
            <h4 className="detail-title">Property Type</h4>
            <p>{Details.home_type}</p>
          </div>
          <div className="detail">
            <h4 className="detail-title">Developer</h4>
            <p>{Details.developer}</p>
          </div>
          <div className="unit-details">
            <h4 className="detail-title" style={{ textAlign: "center" }}>
              Unit Details
            </h4>
            <div className="unit-grid">
              <div>
                <strong>BHK</strong>
                <hr />
                <div>{Details.bedrooms} BHK</div>
              </div>
              <div>
                <strong>Size</strong>
                <hr />
                <div>{Details.sqft} SqFt</div>
              </div>
              <div>
                <strong>Asking Price</strong>
                <hr />
                <div>{Details.price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="property-address">
        <span style={{ fontSize: "32px", fontWeight: "bold" }}>Address</span>
        <div className="grid-container1">
          <div className="detail">
            <h4 className="detail-title">Address</h4>
            <p>{Details.address}</p>
          </div>
          <div className="detail">
            <h4 className="detail-title">City</h4>
            <p>{Details.city}</p>
          </div>
          <div className="detail">
            <h4 className="detail-title">State</h4>
            <p>{Details.state}</p>
          </div>
          <div className="detail">
            <h4 className="detail-title">Zipcode</h4>
            <p>{Details.zipcode}</p>
          </div>
        </div>
      </div>
      <div className="property-description">
        <span style={{ fontSize: "32px", fontWeight: "bold" }}>
          Description
        </span>
        <p className="description">{Details.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
