import React, { Component } from "react";
import { connect } from "react-redux";
import { getHighScores } from "../actions/actionCreators";
import { BrowserRouter as Route } from "react-router-dom";
import QuizSelector from "./QuizSelector";
class HighScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scorestransaction: false
    };
  }
  handleclose = () => {
    this.props.history.goBack();
  };
  componentDidMount() {
    this.props.getHighScores();
  }

  render() {
    if (!this.props.scorestransaction) {
      return (
        <div className="status">
          <h3>Loading High Scores</h3>
        </div>
      );
    }
    return (
      <div className="ScoreList">
        <h1> High Scores: </h1>
        <div className="userscore">
          {console.log(this.props.highscores)}
          <ol>
            {this.props.highscores.map((score, index) => (
              <li key={index}>
                <p> {score.username} </p>
                <p> {score.score} </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="closebutton" onClick={this.handleclose}>
          Close
        </div>
        <Route path="/QuizSelector" component={QuizSelector} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    highscores: state.highscores,
    scorestransaction: state.scorestransaction
  };
};
export default connect(mapStateToProps, { getHighScores })(HighScores);
