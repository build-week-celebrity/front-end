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
import { connect } from "react-redux";

function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(Route, { exact: true, path: "/", component: Landing }),
    React.createElement(Route, { path: "/Login", component: Login }),
    React.createElement(Route, { path: "/SignUp", component: SignUp }),
    React.createElement(Route, { path: "/QuizSelector", component: QuizSelector }),
    React.createElement(Route, { path: "/SubmitScore", component: SubmitScore }),
    React.createElement(PrivateRoute, { path: "/UserList", component: UserList })
  );
}
var mapStateToProps = function mapStateToProps(state) {
  return {
    username: "",
    email: "",
    password: "",
    token: state.token,
    transaction: false,
    logintransaction: false,
    scorestransaction: false,
    error: null,
    score: 0,
    celebrities: state.celebrities,
    highscores: state.highscores,
    user: state.user
  };
};

export default connect(mapStateToProps, {})(App);