import React from "react";
import "./order.style.scss";
function EachOrders({ item }) {
  const {  name, price, quantity } = item;
  return (
    <div className="d-flex justify-content-center">
      {name} {price} X {quantity}
    </div>
  );
}

export default EachOrders;
