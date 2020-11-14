import React from "react";
import { Button } from "@material-ui/core";
import { googleLogin } from "../../firebase";

function Login() {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={googleLogin}>
        Login with Google
      </Button>
    </div>
  );
}

export default Login;
