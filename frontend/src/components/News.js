import React, { useEffect, useState } from "react";
import img from "./images/news.jpg";
import "./css/news.css";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/news/")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  return (
    <section className="news">
      <div className="property-img">
        <img src={img} alt="propert" />
        <div className="property-header">
          <span className="highlight1">HOME / NEWS</span>
          <span className="highlight2">NEWS</span>
        </div>
      </div>
      <div className="news-section">
        <h2 className="property-header1">
          <span>RECENT</span> <span className="highlight">ARTICLES & NEWS</span>
        </h2>
        <div className="news-grid">
          {news.map((article, index) => (
            <div className="news-card" key={index}>
              <img src={`http://127.0.0.1:8000${article.news_img}`} alt={article.title} />
              <div className="news-content">
                <span className="category">
                  {article.category} • {article.date}
                </span>
                <h3>{article.title}</h3>
                <a href={article.link} target="_blank" >Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
