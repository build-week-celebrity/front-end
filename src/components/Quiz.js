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
    this._TogglePrev = this._TogglePrev.bind(this);
    this._ToggleNext = this._ToggleNext.bind(this);
  }
  componentDidMount() {
    this.props.getCelebs();
  }

  componentWillUnmount() {}

  _ToggleNext() {
    if (this.state.selectedIndex === this.props.celebrities.filter((el) => {return el.difficulty === this.props.location.state.difficulty}).length - 1) return;

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

    this.shuffle(this.props.celebrities.filter((el) => {return el.difficulty === this.props.location.state.difficulty}));
    return (
      <div className="Quiz">
        <div className="stats">
          <p> Easy </p>
          <p>
            Time:{""} <Timer />
          </p>
          <p>
            {this.state.selectedIndex + 1}/ {this.props.celebrities.filter((el) => {return el.difficulty === this.props.location.state.difficulty}).length}
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
export default connect(mapStateToProps, { getCelebs })(Quiz);
