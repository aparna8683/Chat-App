import React, { useState } from "react";
import "./login.css";
import assets from "../../assets/assets/assets";

const Login = () => {
  const [currState, setCurrState] = useState("Sign-Up");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState == "Sign-Up" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}
        <input
          type="text"
          placeholder="Email-Address"
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign-Up" ? "Create account" : "login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use and privacy policy</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign-Up" ? (
            <p className="login-toggle">
              Already have a account
              <span onClick={() => setCurrState("Login")}> Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign-Up")}> Click Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;