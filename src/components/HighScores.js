import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuizSelector from "./QuizSelector";

function HighScores(props) {
  const [highScores, setHighScores] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/HighScores")
      .then(res => setHighScores(res.data));
  }, []);

  const handleclose = props => {
    props.history.push("/");
  };
  return (
    <Router>
      <div className="ScoreList">
        <h1>High Scores:</h1>
        <hr></hr>
        <div className="list">
          <ul>
            {highScores.map(score => (
              <div key={score.id}>
                <li>
                  <h3> {score.username} </h3> <p> {score.score} </p>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="closebutton" onClick={handleclose}>
          Close
        </div>
      </div>
      <Route path="/QuizSelector" component={QuizSelector} />
    </Router>
  );
}
export default HighScores;
