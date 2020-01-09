import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import UserList from "./components/UserList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import QuizSelector from "./components/QuizSelector";
import PrivateRoute from "./components/PrivateRoute";
import SubmitScore from "./components/SubmitScore";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/QuizSelector" component={QuizSelector} />
      <Route path="/SubmitScore" component={SubmitScore}/>
      <PrivateRoute path="/UserList" component={UserList} />
    </div>
  );
}

export default App;
