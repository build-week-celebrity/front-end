import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import HighScores from "./HighScores";
import PrivateRoute from "./PrivateRoute";
import UserList from "./UserList";
import Header from "./Header";

function QuizSelector() {
  return (
    <Router>
      <div className="QuizSelector">
        <div className="Header">
          <Header />
        </div>

        <h2> Choose A Quiz </h2>
        <div className="QuizType">Easy</div>
        <div className="QuizType">Medium</div>
        <div className="QuizType">Hard</div>
        <Link to="/UserList">
          <div className="QuizType">Custom</div>
        </Link>
        <Link to="/HighScores">
          <div className="QuizType">High Scores</div>
        </Link>
        <p>
          Dig your own grave & sign up <Link to="/SignUp">Here.</Link>
        </p>
      </div>
      <Route path="/SignUp" component={SignUp} />
      <PrivateRoute path="/HighScores" component={HighScores} />
      <PrivateRoute path="/UserList" component={UserList} />
    </Router>
  );
}

export default QuizSelector;
