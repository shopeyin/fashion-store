import React from "react";
import photo2 from "../../img/photo2.jpg";
import photo3 from "../../img/photo3.jpg";
import "./gallery.style.scss";
const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-1">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--1">
              <img src={photo2} alt="img" />
            </div>
            <div className="card__details">
              <ul>
                <li>Gucci</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$276</p>
              </div>
              {/* <a href="#" className="btn btn-white">
                Add to Cart
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-2">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--2">
              <img src={photo2} alt="img" />
            </div>
            <div className="card__details">
              <ul>
                <li>Nike</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-2">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$400</p>
              </div>
              {/* <a href="#" className="btn btn-white">
                Add to Cart
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-3">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--3">
              <img src={photo3} alt="img" />
            </div>
            <div className="card__details">
              <ul>
                <li>Prada</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$146</p>
              </div>
              {/* <a href="#" className="btn btn-white">
                Add to Cart
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
