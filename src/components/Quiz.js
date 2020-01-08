import React, { Component } from "react";
import { connect } from "react-redux";
import { getCelebs } from "../actions/actionCreators";
import Timer from "./Timer";
import Celebrities from "./Celebrities";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      transaction: false
    };
    // this._TogglePrev = this._TogglePrev.bind(this);
    this._ToggleNext = this._ToggleNext.bind(this);
  }
  componentDidMount() {
    this.props.getCelebs();
  }
  
  GradeScore = (grading) => {
    var score = 0;
    console.log(this.score);
    if (grading === this.props.celebrities.isAlive) {
      console.log(this.score);
        this.score +1
      this._ToggleNext();
    }
    else {
      this._ToggleNext();
    }
  }


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
  _TogglePrev() {
    if (this.state.selectedIndex === 0) return;

    this.setState(prevState => ({
      selectedIndex: prevState.selectedIndex - 1
    }));
  }
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
        {/* {console.log(this.props.token)}
        {console.log(this.props.user)} */}
        <div className="stats">
          <p> Easy </p>
          <p>
            Time:{""} <Timer />
          </p>
          <p>
            {this.state.selectedIndex + 1}/{" "}
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
            <button className="deadBtn" onClick={ e => {e.preventDefault(); this.GradeScore(0)}}>
              Dead
            </button>
            <button className="aliveBtn" onClick={ e => {e.preventDefault(); this.GradeScore(1)}}>
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
    user: state.user,
    score: state.score
  };
};
export default connect(mapStateToProps, { getCelebs })(Quiz);
