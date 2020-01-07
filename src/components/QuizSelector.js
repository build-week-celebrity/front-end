import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import HighScores from "./HighScores";
import PrivateRoute from "./PrivateRoute";
import QuizEasy from "./QuizEasy";
import UserList from "./UserList";
import Header from "./Header";

function QuizSelector({ token, userdata, ...props }) {
  return (
    <Router>
      <div className="QuizSelector">
        <Header />
        <h2> Choose A Quiz </h2>
        <div className="QuizType">
          <Link
            to="/QuizEasy"
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            <p>Easy</p>
          </Link>
        </div>
        <div className="QuizType">
          <p>Medium</p>
        </div>
        <div className="QuizType">
          <p>Hard</p>
        </div>
        <div className="QuizType">
          <p>Custom</p>
        </div>
        <Link to="/HighScores" style={{ textDecoration: "none" }}>
          <div className="QuizType">
            <p>High Scores</p>
          </div>
        </Link>
        <p>
          Dig your own grave & sign up <Link to="/SignUp">Here.</Link>
        </p>
      </div>
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/QuizEasy" component={QuizEasy} />
      <Route path="/HighScores" component={HighScores} />
      <PrivateRoute path="/UserList" component={UserList} />
    </Router>
  );
}

export default QuizSelector;
