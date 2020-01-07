import React, { Component } from "react";
import { connect } from "react-redux";
import { getCelebs } from "../actions/actionCreators";
import Timer from "./Timer";
import Celebrities from "./Celebrities";

class QuizEasy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      transaction: false
    };
    this._TogglePrev = this._TogglePrev.bind(this);
    this._ToggleNext = this._ToggleNext.bind(this);
  }
  componentDidMount() {
    this.props.getCelebs();
  }

  _ToggleNext() {
    if (this.state.selectedIndex === this.props.celebrities.length - 1) return;

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
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    if (!this.props.transaction) {
      return (
        <div className="status">
          <h3>Loading Quiz Data</h3>
        </div>
      );
    }

    console.log(this.props.celebrities.filter((el) => {return el.difficulty === this.props.location.state.difficulty}));

    console.log(this.props.location.state.difficulty);
    this.shuffle(this.props.celebrities);
    return (
      <div className="Quiz">
        <div className="stats">
          <p> Easy </p>
          <p>
            Time:{""} <Timer />
          </p>
          <p>
            {this.state.selectedIndex + 1}/ {this.props.celebrities.length}
          </p>
        </div>
        <div className="celebQuiz">
          <Timer />
          <Celebrities
            celebrities={this.props.celebrities.filter((el) => {return el.difficulty === this.props.location.state.difficulty})[this.state.selectedIndex]}
          />
          <div className="answerbox">
            <div className="deadBtn" onClick={this._TogglePrev}>
              Dead
            </div>
            <div className="aliveBtn" onClick={this._ToggleNext}>
              Alive
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    celebrities: state.celebrities,
    transaction: state.transaction
  };
};
export default connect(mapStateToProps, { getCelebs })(QuizEasy);
