import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Router, Route } from "react-router-dom";
import QuizSelector from "./QuizSelector";
import { createBrowserHistory } from "history";

function HighScores(props) {
  const [highScores, setHighScores] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/HighScores")
      .then(res => setHighScores(res.data));
  }, []);

  const handleclose = () => {
    history.goBack();
  };
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="ScoreList">
        <h1> High Scores: </h1>

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
