import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H0NPsAM3XQGNiCW0P9gCKUPuqDOYen8kPH02ynIyG94WZxAR9XX6K7r0ys4dDbj0hywdKtMzJnFGzgoGEFc4fqf00g6XUUf09";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("payment succesful");
      })
      .catch((error) => {
        console.log(error);
        alert("There was an issue with your payment");
      });
  };

  return (
    <StripeCheckout
      label="pay now"
      name="crown clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
