import React, { useState } from "react";
import "./collection-item.style.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  // console.log(item);
  // console.log(addItem);
  const [message, setMessage] = useState(false);

  const addToCartNotification = () => {
    setMessage(true);
    setTimeout(() => setMessage(false), 1500);
  };
  const { name, price, imageUrl } = item;
  return (
    <div>
      <div className="collection__item">
        <div>
          {message ? (
            <div className="item__added">
              <div className="i">Item added</div>
            </div>
          ) : (
            ""
          )}
        </div>
        <figure
          className="collection__figure"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></figure>
        <figcaption>
          <span className="name">{name}</span>
          <span className="price">&#8358;{price}</span>
        </figcaption>
        <div className="collection__item-button">
          <button
            onClick={() => {
              addItem(item);
              addToCartNotification();
            }}
            className="btn btn-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  addItem: (item) => dispach(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
