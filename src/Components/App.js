import React from "react";
import "../assets/css/App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import EditUser from "./EditUser";
import View from "./View";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="navbar  ">
            <div className="navbar_link">
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="link" to="/login">
                Login
              </Link>
            </div>
            <div>
              <Link className="link" to="/registration">
                Registration
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/registration">
              <Registration />
            </Route>

            <Route exact path="/users/edit/:id">
              <EditUser />
            </Route>

            <Route exact path="/users/:id">
              <View />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
