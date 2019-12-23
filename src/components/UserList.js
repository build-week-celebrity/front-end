import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuizSelector from "./QuizSelector";

function UserList({ history }) {
  const [regUsers, setRegUsers] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/user")
      .then(res => {
        setRegUsers(res.data);
        console.log(res);
      });
  }, []);
  return (
    <Router>
      <div className="AdminConsole">
        <h1>Registered Users:</h1>
        <hr></hr>
        <div className="userlist">
          {regUsers.map(user => (
            <div className="usercard" key={user.id}>
              <h3> {user.username} </h3> <p> {user.email} </p>
              <p> {user.password} </p>
            </div>
          ))}
        </div>
        <Link to="/QuizSelector">
          <div className="closebutton">Close</div>
        </Link>
      </div>
      <Route path="/QuizSelector" component={QuizSelector} />
    </Router>
  );
}
export default UserList;
