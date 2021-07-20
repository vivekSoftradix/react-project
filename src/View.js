import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function View() {
  let history = useHistory();
  const { id } = useParams();

  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setInput(result.data);
    console.log(result);
  };

  return (
    <div>
      <Link to="/">back to home</Link>

      <div>
        <li>{input.name}</li>
        <li>{input.username}</li>
        <li>{input.email}</li>
        <li>{input.phone}</li>
      </div>
  );
}

export default View;
