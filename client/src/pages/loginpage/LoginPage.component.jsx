import React, { useState } from "react";
import "./login.style.scss";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const LoginPage = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({
    //     email: "",
    //     password: "",
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="login__container">
      <div className="login__background">
        <div className="login__form">
          <form onSubmit={handleSubmit} className="form">
            <div className="login__header">
              <h3>Login to your account</h3>
            </div>
            <div className="form__group">
              <input
                name="email"
                type="email"
                value={email}
                className="form__input"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group">
              <input
                name="password"
                type="password"
                value={password}
                className="form__input"
                placeholder="Password"
                onChange={handleChange}
                id="password"
              />
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
            <div className="form__group btn-group">
              <button className="btn" type="submit">
                Submit &rarr;
              </button>
              <button type="button" className="btn" onClick={googleSignInStart}>
                Google Sign In &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(LoginPage);
