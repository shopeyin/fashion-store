import React, { useState } from "react";
import "./signup.style.scss";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";

const SignUpPage = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="signup__container">
      <div className="signup__background">
        <div className="signup__form">
          <form onSubmit={handleSubmit} className="form">
            <div className="signup__header">
              <h3>Sign up here</h3>
            </div>
            <div className="form__group">
              <input
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                className="form__input"
                placeholder="DisplayName"
                id="displayName"
                required
              />
              <label htmlFor="displayName" className="form__label">
                Display Name
              </label>
            </div>
            <div className="form__group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="form__input"
                placeholder="Email"
                id="email"
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="form__input"
                placeholder="Password"
                id="password"
                required
              />
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                className="form__input"
                placeholder="Confirm Password"
                id="password2"
                required
              />
              <label htmlFor="Confirmpassword" className="form__label">
                Confirm Password
              </label>
            </div>
            <div className="form__group">
              <button className="btn" type="submit">
                SIGN UP &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
