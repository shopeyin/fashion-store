import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action";
import "./checkout.style.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <tr>
      <td className="image__container">
        {" "}
        <img src={imageUrl} alt="item" className="img-fluid" width="100" />
      </td>
      <td className="name">{name}</td>
      <td className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </td>
      <td className="price">{price}</td>
      <td
        id="remove"
        className="remove__button"
        onClick={() => clearItem(cartItem)}
      >
        &#10006;
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
