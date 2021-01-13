import React from "react";
import moment from "moment";
import EachOrders from "./EachOrders";
import "./order.style.scss";
function OrderedItems({ orders }) {
  const { id, data } = orders;
  return (
    <div key={id} className="col-md-3">
      <div> {moment(orders.data.createdAt.toDate()).format("MMM Do YY")}</div>
      <div className="card">
        {data.items.map((item) => {
          return <EachOrders key={item.id} item={item} />;
        })}
      </div>
      <div className="amount"> Total Price:&#8358;{orders.data.amount}</div>
    </div>
  );
}

export default OrderedItems;
