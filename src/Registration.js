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
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import swal from "sweetalert";

function Registration() {
  // let history = useHistory();
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    contact: "",
    gender: "",
    role: "",
    hobbies: [],
  };

  const [valid, setValid] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    contact: "",
    gender: "",
    role: "",
    hobbies: [],
  });

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
    const value = event.target.value;
    const id = event.target.id;
    const checked = event.target.checked;

    //store the value in array
    const arr = [];
    if (checked) {
      arr.push(id);
    } else {
      arr.pop(id);
    }

    console.log(arr);

    // insert array into objectsasas and filter the id

    let newArray = [...input.hobbies, event.target.id];
    if (input.hobbies.includes(event.target.id)) {
      newArray = newArray.filter((day) => day !== event.target.id);
    }
    setInput({ hobbies: newArray });
  };

  //submit the data
  const onSubmit = (event) => {
    event.preventDefault();
    // await axios.post("http://localhost:3003/users", input);
    // history.push("/");
    console.log("inputttttttttttt", input);
    validations();

    // setInput(initialState);
  };

  const validations = () => {
    //user error validations
    if (input.name === "") {
      setValid({ name: "error" });
      console.log("validdddddd", valid.name);
      return false;
    }

    if (!isNaN(input.name)) {
      setValid({ name: "type err" });
    }
    //Email validations
    if (input.email === "") {
      setValid({ email: "blank" });
      return false;
    }
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input.email.match(mailformat)) {
      setValid({ email: "invalid" });
      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", input.email);
      return false;
    }
    //Password Validation
    if (input.password.length <= 5 || input.password.length > 20) {
      setValid({ password: "short" });
      return false;
    }
    // confirm Password Validation
    if (input.password !== input.confirm) {
      setValid({ confirm: "not match" });
      return false;
    }
    // contact number validation
    if (input.contact.length !== 10) {
      setValid({ contact: "invalid" });
      console.log(valid.contact);
      return false;
    }

    //gender validation
    if (input.gender === "") {
      setValid({ gender: "select" });
      return false;
    }

    //role validation
    if (input.role === "") {
      setValid({ role: "select" });
      return false;
    }

    //hobbies validation
    if (input.hobbies.length === 0) {
      setValid({ hobbies: "error" });
    }

    swal("", "Registration Successful", "success");
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
                <small>{valid.name}</small>
              </div>

              <div className="icon">
                <MailIcon />
                <input
                  value={input.email}
                  type="email"
                  autoComplete="off"
                  placeholder="Enter your Email address"
                  name="email"
                  onChange={changeInput}
                />
                <small>{valid.email}</small>
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
                <small>{valid.password}</small>
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
                <small>{valid.confirm}</small>
              </div>

              <div className="icon">
                <PhoneIcon />
                <input
                  value={input.contact}
                  autoComplete="off"
                  type="number"
                  placeholder="Contact number"
                  name="contact"
                  onChange={changeInput}
                />
                <small>{valid.contact}</small>
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
                <small>{valid.gender}</small>
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
                <small>{valid.role}</small>
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
                <small>{valid.hobbies}</small>
              </div>
            </form>
          </div>

          <div className="login_button">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={onSubmit}
            >
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
