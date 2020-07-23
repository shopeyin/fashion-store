import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <figure
      className="menu__images"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {" "}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </figure>
  );
};

export default withRouter(MenuItem);
