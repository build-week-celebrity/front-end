import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import HighScores from "./HighScores";
import PrivateRoute from "./PrivateRoute";
import Quiz from "./Quiz";
import UserList from "./UserList";
import Header from "./Header";
import SubmitScore from "./SubmitScore";

function QuizSelector() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      { className: "QuizSelector" },
      React.createElement(Header, null),
      React.createElement(
        "h2",
        null,
        " Choose A Quiz "
      ),
      React.createElement(
        Link,
        {
          to: { pathname: "/quiz", state: { difficulty: "easy" } },
          style: { textDecoration: "none" }
        },
        React.createElement(
          "button",
          { className: "QuizType" },
          "Easy"
        )
      ),
      React.createElement(
        Link,
        {
          to: { pathname: "/quiz", state: { difficulty: "medium" } },
          style: { textDecoration: "none" }
        },
        React.createElement(
          "button",
          { className: "QuizType" },
          "Medium"
        )
      ),
      React.createElement(
        Link,
        {
          to: { pathname: "/quiz", state: { difficulty: "hard" } },
          style: { textDecoration: "none" }
        },
        React.createElement(
          "button",
          { className: "QuizType" },
          "Hard"
        )
      ),
      React.createElement(
        "button",
        { className: "QuizType" },
        React.createElement(
          "p",
          null,
          "Custom"
        )
      ),
      React.createElement(
        Link,
        { to: "/HighScores", style: { textDecoration: "none" } },
        React.createElement(
          "button",
          { className: "QuizType", id: "HighScore" },
          React.createElement(
            "p",
            null,
            "High Scores"
          )
        )
      ),
      React.createElement(
        "p",
        null,
        "Dig your own grave & sign up ",
        React.createElement(
          Link,
          { to: "/SignUp" },
          "Here."
        )
      )
    ),
    React.createElement(Route, { path: "/SignUp", component: SignUp }),
    React.createElement(Route, { path: "/Login", component: Login }),
    React.createElement(Route, { path: "/Quiz", component: Quiz }),
    React.createElement(Route, { path: "/SubmitScore", component: SubmitScore }),
    React.createElement(Route, { path: "/HighScores", component: HighScores }),
    React.createElement(PrivateRoute, { path: "/UserList", component: UserList })
  );
}

export default QuizSelector;