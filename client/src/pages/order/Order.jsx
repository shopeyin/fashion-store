import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import firebase from "../../components/firebase/firebase.utils";
import OrderedItems from "./OrderedItems";
import "./order.style.scss";
function Order({ user }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const db = firebase.firestore();
      db.collection("users")
        .doc(user.id)
        .collection("cartItems")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((item) => ({
              id: item.id,
              data: item.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="container order-container">
      <div className="row">
        <div className="col-md-6">
          <h3>My Orders</h3>
        </div>
      </div>
      <div className="row">
        {orders.map((item) => {
          return <OrderedItems key={item.id} orders={item} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(Order);
