import React, { useState } from "react";
import { connect } from "react-redux";

import { PaystackButton } from "react-paystack";
import axios from "axios";

function PaystackBtn({
  price,
  cartItems,
  currentUser,
  successMsg,
  insertItems,
}) {
  const name = currentUser ? currentUser.displayName : "";
  const publicKey = "pk_test_036bde196ceb061a7dd57be49a7c7ee913095802";
  const amount = price * 100;
  const email = currentUser ? currentUser.email : "";
  //const email = "oladimejicoder@gmail.com";

  const [phone, setPhone] = useState("");
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (e) => insertItems(),

    onClose: () => console.log("Wait! Don't leave :("),
  };
  return (
    <div>
      <PaystackButton {...componentProps} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(PaystackBtn);
