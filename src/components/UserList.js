import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Router, Route } from "react-router-dom";
import QuizSelector from "./QuizSelector";
import { createBrowserHistory } from "history";
function UserList() {
  const [regUsers, setRegUsers] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/user")
      .then(res => {
        setRegUsers(res.data);
        console.log(res);
      });
  }, []);
  const handleclose = () => {
    history.goBack();
  };
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="AdminConsole">
        <h1>Registered Users:</h1>
        <div className="userlist">
          {regUsers.map(user => (
            <div className="usercard" key={user.id}>
              <h3> {user.username} </h3> <p> {user.email} </p>
              <p> {user.password} </p>
            </div>
          ))}
        </div>
        <div className="closebutton" onClick={handleclose}>
          Close
        </div>
      </div>
      <Route path="/QuizSelector" component={QuizSelector} />
    </Router>
  );
}
export default UserList;
