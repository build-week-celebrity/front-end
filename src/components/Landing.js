import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import QuizSelector from "./QuizSelector";
import Header from "./Header";

function Landing() {
  return (
    <div className="landing">
      <Header />
      <h2> Think you know everything about stars and celebrities ? </h2>
      <h3> You might be right...or wrong.. </h3> <h3> DEAD WRONG. </h3>
      <div className="skullsimg">
        <p>
          <br />
          The quiz game where getting a high score is a matter of life or death!
        </p>
      </div>
      <div className="list">
        <ul>
          <li> Test your knowledge with 3 difficulty settings. </li>
          <li> Leaderboards show how you stack up vs the world. </li>
          <li> Create custom quizzes to challenge yourself or friends </li>
        </ul>
      </div>
      <Link to="/QuizSelector" style={{ textDecoration: "none" }}>
        <div className="getstarted">
          <p> Get Started </p>
        </div>
      </Link>
      <Route path="/QuizSelector" component={QuizSelector} />
    </div>
  );
}

export default Landing;
