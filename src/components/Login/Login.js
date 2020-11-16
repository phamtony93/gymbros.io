import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { googleLogin, twitterLogin } from "../../firebase";
import logo from "../../assets/images/logo.png";
import FacebookLogo from "../../assets/images/facebook-logo.jpg";
import GoogleLogo from "../../assets/images/google-logo.png";
import TwitterLogo from "../../assets/images/twitter-logo.png";
import "./Login.css";
import { Redirect } from "react-router-dom";
import { useStateProvider } from "../../StateProvider";

function Login() {
  const [{ user }] = useStateProvider();

  if (user) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="login">
        <img className="login__logo" src={logo} alt="" />
        <p className="login__directions">Sign in to GymBros</p>
        <div className="login__grid">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Button variant="contained" color="primary" onClick={googleLogin}>
            Login
          </Button>
          <div className="login__otherOptions">
            <p>Create an account</p>
            <p>Forgot password?</p>
          </div>
          <div className="login_alternativeOptions">
            <img
              src={FacebookLogo}
              alt=""
              className="login__alternativeLogos"
              // onClick={changeTest}
            />
            <img
              src={GoogleLogo}
              alt=""
              className="login__alternativeLogos"
              onClick={googleLogin}
            />
            <img
              src={TwitterLogo}
              alt=""
              className="login__alternativeLogos"
              onClick={twitterLogin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
