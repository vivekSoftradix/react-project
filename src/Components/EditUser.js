import React, { useState, useEffect } from "react";
import "../assets/css/Registration.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditUser() {
  let history = useHistory();
  const { id } = useParams();

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

  useEffect(() => {
    getData();
  }, []);

  //get the data
  const getData = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setInput(result.data);
    console.log(result);
  };

  //update the data
  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.put(`http://localhost:3003/users/${id}`, input);
    history.push("/");
  };

  // console.log(input);
  return (
    <div className="registration_main_body">
      <div className="secondary_body">
        <div className="registraion_left">
          <h2>Edit user </h2>

          <form onSubmit={onSubmit}>
            <div className="icon">
              <AccountCircleIcon />
              <input
                type="text"
                value={input.name}
                placeholder="Enter your name"
                name="name"
                onChange={changeInput}
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
                type="text"
                placeholder="phone number"
                name="phone"
                onChange={changeInput}
              />
            </div>
          </form>

          <div className="login_button">
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Update
            </Button>
          </div>
        </div>

        <div className="registration_right"></div>
      </div>
    </div>
  );
}

export default EditUser;
