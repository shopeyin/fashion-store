import React from "react";
import Header from "../header/Header.component";
import Gallery from "../gallery/Gallery.component";
import TrendyImages from "../trendyImages/TrendyImages.component";
import Brand from "../brand/Brand.component";
import Footer from "../footer/Footer.component";
import "./body.style.scss";
const Body = () => {
  return (
    <div className="body-container">
      <Header />
      <Gallery />
      <TrendyImages />
      <Brand />
      <Footer />
    </div>
  );
};

export default Body;
