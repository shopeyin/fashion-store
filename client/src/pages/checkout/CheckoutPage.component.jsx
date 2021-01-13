import React, { useState } from "react";

import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import PaystackBtn from "../../components/paystack-button/paystack-button.component";
import CheckOut from "../../components/checkout-item/CheckOut.component";

import firebase from "../../components/firebase/firebase.utils";
const CheckoutPage = ({ cartItems, total, history, user }) => {
  const insertItems = () => {
    console.log("inserting");
    const db = firebase.firestore();

    db.collection("users").doc(user.id).collection("cartItems").add({
      items: cartItems,
      amount: total,
      createdAt: new Date(),
    });
    history.push("/order");
  };

  const successMsg = () => {
    history.push("/order");
  };

  return (
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
          <span>TOTAL:&#8358;{total}</span>
        </div>
        <div className="test__warning">
          **Please use the following test credit card for payments
          <br />
          4084084084084081 -Exp 01/22 -CVV:408
        </div>
        <div className="stripe__btn">
          <PaystackBtn
            price={total}
            cartItems={cartItems}
            successMsg={successMsg}
            insertItems={insertItems}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
