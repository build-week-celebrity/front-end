import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <h1> Dead or Alive </h1> <h2> Do you know who is ? </h2>
      </div>
      <Link
        to="/Login"
        style={{ color: "white", textDecoration: "none", marginTop: "1rem" }}
      >
        <p>LogIn</p>
      </Link>
      <div className="secret">
        <Link to="/UserList" style={{ textDecoration: "none" }}>
          <em>
            <small>
              <p>.</p>
            </small>
          </em>
        </Link>
      </div>
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
    </div>
  );
}
export default Header;
