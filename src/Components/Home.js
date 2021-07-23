import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dataReceived();
  }, []);

  //display the data in home page
  const dataReceived = async () => {
    const getData = await axios.get(`http://localhost:3003/users/`);

    setUsers(getData.data.reverse());
  };
  console.log(users);

  //delete function
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    dataReceived();
  };

  return users.length === 0 ? (
    <div className="loader"></div>
  ) : (
    <div className="home_main_body">
      <div className="table_main_body">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Hobbies</th>
            <th>Action</th>
          </tr>
          {users.map((user, index) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.pasword}</td>
              <td>{user.confirm}</td>
              <td>{user.contact}</td>
              <td>{user.gender}</td>
              <td>{user.role}</td>
              <td>{user.hobbies}</td>

              <td>
                <div className="threebutton">
                  <Link className="link" to={`/users/${user.id}`}>
                    <button>View</button>
                  </Link>

                  <Link className="link">
                    <button onClick={() => deleteUser(user.id)}>delete</button>
                  </Link>

                  <Link className="link" to={`/users/edit/${user.id}`}>
                    <button>Edit</button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Home;
