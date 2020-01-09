import React, { Component } from "react";
import { connect } from "react-redux";
import { getCelebs } from "../actions/actionCreators";
import Timer from "./Timer";
import Celebrities from "./Celebrities";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      selectedIndex: 0,
      transaction: false
    };
    // this._TogglePrev = this._TogglePrev.bind(this);
    this._ToggleNext = this._ToggleNext.bind(this);
  }
  componentDidMount() {
    this.props.getCelebs();
  }

  GradeScore = answer => {
    if (
      answer ===
      this.props.celebrities.filter(el => {
        return el.difficulty === this.props.location.state.difficulty;
      })[this.state.selectedIndex].isAlive
    ) {
      console.log("correct");
      this.setState({
        score: this.state.score + 1
      });
      if (this.state.selectedIndex +1 ===
          this.props.celebrities.filter(el => {
            return el.difficulty === this.props.location.state.difficulty;
          }).length
      ) {
        console.log("Game Over Loser!");
        this.props.history.push("/SubmitScore")
      }
      this._ToggleNext();
    } else {
      this._ToggleNext();
      console.log("incorrect");
    }
  };

  _ToggleNext() {
    if (
      this.state.selectedIndex ===
      this.props.celebrities.filter(el => {
        return el.difficulty === this.props.location.state.difficulty;
      }).length -
        1
    )
      return;

    this.setState(prevState => ({
      selectedIndex: prevState.selectedIndex + 1
    }));
  }
  //_TogglePrev() {
  //   if (this.state.selectedIndex === 0) return;
  //
  //   this.setState(prevState => ({
  //     selectedIndex: prevState.selectedIndex - 1
  //   }));
  // }
  render() {
    if (!this.props.transaction) {
      return (
        <div className="status">
          <h3>Loading Quiz Data</h3>
        </div>
      );
    }

    return (
      <div className="Quiz">
        {console.log(
          "Current Item Being Scored:",
          this.props.celebrities.filter(el => {
            return el.difficulty === this.props.location.state.difficulty;
          })[this.state.selectedIndex].isAlive,
          this.props.celebrities.filter(el => {
            return el.difficulty === this.props.location.state.difficulty;
          })[this.state.selectedIndex].name
        )}

        <div className="stats">
          <p> Easy </p>
          <p>
            Time: <Timer />
          </p>
          <p>Score: {this.state.score}</p>
          <p>
            {console.log(
              "Current Quiz Selected Index:",
              this.state.selectedIndex
            )}
            {this.state.selectedIndex + 1}/
            {
              this.props.celebrities.filter(el => {
                return el.difficulty === this.props.location.state.difficulty;
              }).length
            }
          </p>
        </div>
        <div className="celebQuiz">
          <Celebrities
            celebrities={
              this.props.celebrities.filter(el => {
                return el.difficulty === this.props.location.state.difficulty;
              })[this.state.selectedIndex]
            }
          />
          <div className="answerbox">
            <button
              className="deadBtn"
              onClick={e => {
                e.preventDefault();
                this.GradeScore(0);
              }}
            >
              Dead
            </button>
            <button
              className="aliveBtn"
              onClick={e => {
                e.preventDefault();
                this.GradeScore(1);
              }}
            >
              Alive
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    celebrities: state.celebrities,
    transaction: state.transaction,
    token: state.token,
    user: state.user
  };
};
export default connect(mapStateToProps, { getCelebs })(Quiz);
