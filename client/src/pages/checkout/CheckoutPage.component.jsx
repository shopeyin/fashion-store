import React from "react";

import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckOut from "../../components/checkout-item/CheckOut.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout__page">
    <div className="checkout__table table-responsive">
      <table className="table" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <CheckOut key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </table>
    </div>
    <div className="total__container">
      <div className="total">
        <span>TOTAL:${total}</span>
      </div>
      <div className="test__warning">
        **Please use the following test credit card for payments
        <br />
        4242 4242 4242 4242 -Exp 09/20 -CVV:123
      </div>
      <div className="stripe__btn">
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
