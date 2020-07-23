import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";
import { connect } from "react-redux";
// import HomePage from "./pages/homepage/Homepage.component";
// import LoginPage from "./pages/loginpage/LoginPage.component";
// import SignUpPage from "./pages/signuppage/SignUpPage.component";
// import CheckoutPage from "./pages/checkout/CheckoutPage.component";
// import ShopPage from "./pages/shoppage/ShopPage.component";
import ErrorBoundary from "../src/components/error-boundary/error-boundary.component";
import CartIcon from "../src/components/cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../src/components/cart-dropdown/Cart-dropdown.component";
import { selectCartHidden } from "../src/redux/cart/cart.selectors";
import { selectCurrentUser } from "../src/redux/user/user.selectors";
import { checkUserSession } from "../src/redux/user/user.action";
import { Lines } from "react-preloaders";


const HomePage = lazy(() => import("./pages/homepage/Homepage.component"));
const ShopPage = lazy(() => import("./pages/shoppage/ShopPage.component"));
const CheckoutPage = lazy(() =>
  import("./pages/checkout/CheckoutPage.component")
);
const LoginPage = lazy(() => import("./pages/loginpage/LoginPage.component"));
const SignUpPage = lazy(() =>
  import("./pages/signuppage/SignUpPage.component")
);

const App = ({ checkUserSession, currentUser, hidden }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Lines />
      <CartIcon />

      {hidden ? null : <CartDropdown />}

      <Navbar />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div>..Loading</div>}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/login"
              render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
            />
            <Route
              exact
              path="/signup"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignUpPage />
              }
            />

            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
