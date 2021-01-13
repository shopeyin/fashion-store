import React from "react";
import "./navbar.styles.scss";

import { signOutStart } from "../../redux/user/user.action";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  unCheck(i) {
    let ref = "ref_" + i;
    this.refs[ref].checked = !this.refs[ref].checked;
  }

  render() {
    const { currentUser, signOutStart } = this.props;
    console.log(currentUser);
    return (
      <div className="navigation">
        {[1].map((item, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                className="navigation__checkbox"
                id="navi-toggle"
                ref={"ref_" + i}
              />
              <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
              </label>
              <div className="navigation__background">&nbsp;</div>
              <nav className="navigation__nav">
                <ul className="navigation__list">
                  <li className="navigation__item">
                    <NavLink
                      className="navigation__link"
                      to="/"
                      onClick={() => this.unCheck(i)}
                    >
                      <span>01</span>
                      Home
                    </NavLink>
                  </li>
                  {currentUser ? (
                    <li className="navigation__item">
                      <Link
                        className="navigation__link"
                        to="/login"
                        onClick={() => {
                          this.unCheck(i);
                          signOutStart();
                        }}
                      >
                        <span>02</span>
                        LOGOUT <br />
                        {currentUser.displayName}
                      </Link>
                    </li>
                  ) : (
                    <div>
                      <li className="navigation__item">
                        <Link
                          className="navigation__link"
                          to="/login"
                          onClick={() => this.unCheck(i)}
                        >
                          <span>02</span>
                          LOGIN
                        </Link>
                      </li>

                      <li className="navigation__item">
                        <Link
                          className="navigation__link"
                          to="/signup"
                          onClick={() => this.unCheck(i)}
                        >
                          <span>03</span>
                          SIGNUP
                        </Link>
                      </li>
                    </div>
                  )}
                  <li className="navigation__item">
                    <Link
                      className="navigation__link"
                      onClick={() => this.unCheck(i)}
                      to="/shop"
                    >
                      <span>04</span>
                      Shop
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
