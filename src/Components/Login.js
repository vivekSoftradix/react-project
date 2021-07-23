import React from "react";
import "../assets/css/Login.css";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
function Login() {
  return (
    <div className="login_main">
      <div className="login_body">
        <div className="left_body">
          <img src="image.jpg" alt="img" />
        </div>
        <div className="right_body">
          <div className="right_body_field">
            <h2>Login</h2>
            <form>
              <div className="icon">
                <AccountCircleIcon />
                <input type="text" placeholder="enter username" />
              </div>

              <br />

              <div className="icon">
                <LockIcon />
                <input type="text" placeholder="please enter password" />
              </div>
            </form>
            <div className="login_button">
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
