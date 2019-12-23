import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import QuizSelector from "./components/QuizSelector";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <PrivateRoute path="/QuizSelector" component={QuizSelector} />
    </div>
  );
}

export default App;
