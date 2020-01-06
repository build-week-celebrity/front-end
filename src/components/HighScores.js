import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router-dom";
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
    <div className="ScoreList">
      <h1> High Scores: </h1>

      <div className="userscore">
        <ol>
          {highScores.map(score => (
            <li key={score.id}>
              <p>{score.id}</p>
              <p>{score.username}</p>
              <p>{score.score}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="closebutton" onClick={handleclose}>
        Close
      </div>
      <Route path="/QuizSelector" component={QuizSelector} />
    </div>
  );
}
export default HighScores;
