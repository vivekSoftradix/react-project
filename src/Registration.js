import React, { useState } from "react";
import "./Registration.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Registration() {
  let history = useHistory();
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const changeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [name]: value });
  };
  console.log(input);

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3003/users", input);
    history.push("/");
  };

  return (
    <div className="registration_main_body">
      <div className="secondary_body">
        <div className="registraion_left">
          <h2>Registration Form</h2>

          <form onSubmit={onSubmit}>
            <div className="icon">
              <AccountCircleIcon />
              <input
                type="text"
                value={input.name}
                placeholder="Enter your name"
                name="name"
                onChange={changeInput}
                required
              />
            </div>

            <div className="icon">
              <FaceIcon />
              <input
                value={input.username}
                type="text"
                placeholder="Ener uesrname"
                name="username"
                onChange={changeInput}
              />
            </div>

            <div className="icon">
              <HomeIcon />
              <input
                value={input.email}
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={changeInput}
              />
            </div>
            <div className="icon">
              <PhoneIcon />

              <input
                value={input.phone}
                type="number"
                placeholder="phone number"
                name="phone"
                onChange={changeInput}
              />
            </div>
          </form>

          <div className="login_button">
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Register
            </Button>
          </div>
        </div>

        <div className="registration_right">
          <img src="image.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Registration;
