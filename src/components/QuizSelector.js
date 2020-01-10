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
  return (
    <Router>
      <div className="QuizSelector">
        <Header />
        <h2> Choose A Quiz </h2>
        <Link
          to={{ pathname: "/quiz", state: { difficulty: "easy" } }}
          style={{ textDecoration: "none" }}
        >
          <button className="QuizType">Easy</button>
        </Link>
        <Link
          to={{ pathname: "/quiz", state: { difficulty: "medium" } }}
          style={{ textDecoration: "none" }}
        >
          <button className="QuizType">Medium</button>
        </Link>
        <Link
          to={{ pathname: "/quiz", state: { difficulty: "hard" } }}
          style={{ textDecoration: "none" }}
        >
          <button className="QuizType">Hard</button>
        </Link>
        <button className="QuizType">
          <p>Custom</p>
        </button>
        <Link to="/HighScores" style={{ textDecoration: "none" }}>
          <button className="QuizType" id={"HighScore"}>
            <p>High Scores</p>
          </button>
        </Link>
        <p>
          Dig your own grave & sign up <Link to="/SignUp">Here.</Link>
        </p>
      </div>
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/Quiz" component={Quiz} />
      <Route path="/SubmitScore" component={SubmitScore} />
      <Route path="/HighScores" component={HighScores} />
    </Router>
  );
}

export default QuizSelector;
