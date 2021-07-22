import React, { useState } from "react";
import "./Registration.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function Registration() {
  let history = useHistory();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    contact: "",
    gender: "",
    role: "",
    hobbies: [],
  });

  const changeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const hobbiesChanged = (event) => {
    // const name = event.target.name;dsadsasadsa
    const value = event.target.value;
    // const id = event.target.value;adasdsa
    const checked = event.target.checked;
    //store the value in array
    const arr = [];
    if (checked) {
      arr.push(value);
    }

    console.log(arr);
    //insert array into objectsasas
    input.hobbies.push(arr);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // await axios.post("http://localhost:3003/users", input);
    // history.push("/");
    validations();
  };

  const validations = () => {
    if (input.name === "") {
      console.log("enter the name");
      return false;
    }

    if (input.name.length <= 2 || input.name.length > 20) {
      console.log("user name limit error");
      return false;
    }

    if (input.email === "") {
      console.log("enter the data");
      return false;
    }

    if (input.password === "") {
      console.log("enter the data");
      return false;
    }

    if (input.password !== input.confirm.password) {
      console.log("password not match");
      return false;
    } else {
      console.log("password matches");
      return true;
    }
    if (input.confirm === "") {
      console.log("enter the data");
      return false;
    }

    if (input.contact === "") {
      console.log("enter the data");
      return false;
    }
    if (input.gender === "") {
      console.log("enter the data");
      return false;
    }
    if (input.role === "") {
      console.log("enter the data");
      return false;
    }
    if (input.hobbies === "") {
      console.log("enter the data");
      return false;
    }
  };

  console.log("inputttttttttttt", input);
  return (
    <div className="registration_main_body">
      <div className="secondary_body">
        <div className="registraion_left">
          <h2>Registration Form</h2>
          <div className="form_body">
            <form onSubmit={onSubmit}>
              <div className="icon">
                <AccountCircleIcon />
                <input
                  type="text"
                  autoComplete="off"
                  value={input.name}
                  placeholder="Enter your name"
                  name="name"
                  onChange={changeInput}
                />
              </div>

              <div className="icon">
                <HomeIcon />
                <input
                  value={input.email}
                  type="email"
                  autoComplete="off"
                  placeholder="Enter your Email address"
                  name="email"
                  onChange={changeInput}
                />
              </div>

              <div className="icon">
                <VisibilityIcon />
                <input
                  value={input.password}
                  autoComplete="off"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={changeInput}
                />
              </div>

              <div className="icon">
                <VisibilityOffIcon />
                <input
                  value={input.confirm}
                  type="password"
                  placeholder="Confirm password"
                  name="confirm"
                  onChange={changeInput}
                />
              </div>

              <div className="icon">
                <HomeIcon />
                <input
                  value={input.contact}
                  autoComplete="off"
                  type="text"
                  placeholder="Contact number"
                  name="contact"
                  onChange={changeInput}
                />
              </div>

              <div className="form_radio">
                <h4>Gender</h4>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={input.gender}
                  onChange={changeInput}
                >
                  <div className="radio_label">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </div>
                </RadioGroup>
              </div>

              <div className="form_role">
                <h4 for="cars">Select your role:</h4>

                <select
                  className="select"
                  value={input.role}
                  onChange={changeInput}
                  name="role"
                >
                  <option value="">Select</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Guest">Guest</option>
                </select>
              </div>

              <h3>Select your hobbies</h3>
              <div className="form_hobbies">
                <input
                  type="checkbox"
                  id="1"
                  name="hobbies"
                  value="GYM"
                  onChange={hobbiesChanged}
                />
                <p>GYM</p>
                <input
                  type="checkbox"
                  id="2"
                  name="hobbies"
                  onChange={hobbiesChanged}
                  value="Reading"
                />
                <p>Reading</p>
                <input
                  type="checkbox"
                  onChange={hobbiesChanged}
                  id="3"
                  name="hobbies"
                  value="Swimming"
                />
                <p>Swimming</p>
              </div>
            </form>
          </div>

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
