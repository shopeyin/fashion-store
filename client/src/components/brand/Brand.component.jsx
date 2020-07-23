import React from "react";
import "./brand.style.scss";
import ic from "../../img/ic.png";
import ic1 from "../../img/ic1.png";
import ic2 from "../../img/ic2.png";
import ic3 from "../../img/ic3.png";
import { BrandContainer } from "./brand.styles";
const Brand = () => {
  return (
    <BrandContainer>
      <figure className="images">
        <img src={ic} alt="fila_logo" />
      </figure>
      <figure className="images">
        {" "}
        <img src={ic1} alt="reebok_logo" />
      </figure>
      <figure className="images">
        {" "}
        <img src={ic2} alt="puma_logo" />
      </figure>
      <figure className="images">
        {" "}
        <img src={ic3} alt="adidas_logo" />
      </figure>
    </BrandContainer>
  );
};

export default Brand;
