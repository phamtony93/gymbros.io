import React from "react";
import { Button } from "@material-ui/core";
import { googleLogin } from "../../firebase";
import logo from "../../assets/images/logo.png";
import FacebookLogo from "../../assets/images/facebook-logo.jpg";
import GoogleLogo from "../../assets/images/google-logo.png";
import TwitterLogo from "../../assets/images/twitter-logo.png";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src={logo}
        alt=""
        // style={{ "background-color": "yellow" }}
      />
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
          <img src={FacebookLogo} alt="" className="login__alternativeLogos" />
          <img src={GoogleLogo} alt="" className="login__alternativeLogos" />
          <img src={TwitterLogo} alt="" className="login__alternativeLogos" />
        </div>
      </div>
    </div>
  );
}

export default Login;
