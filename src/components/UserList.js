import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { createBrowserHistory } from "history";
function UserList() {
  const [regUsers, setRegUsers] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/users")
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
    <div className="AdminConsole">
      <h1>Registered Users:</h1>
      <div className="userlist">
        {regUsers.map(user => (
          <div className="usercard" key={user.id}>
            <p>{user.username}</p> <p> {user.email} </p>
            <p> {user.password}</p>
          </div>
        ))}
      </div>
      <div className="closebutton" onClick={handleclose}>
        Close
      </div>
    </div>
  );
}
export default UserList;
