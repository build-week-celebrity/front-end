import React, { Component } from "react";
import { connect } from "react-redux";
import { getCelebs } from "../actions/actionCreators";
import Celebrities from "./Celebrities";
import Timer from "./Timer";

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
        <div className="celebQuiz">
        <Timer/>
          <Celebrities
            celebrities={this.props.celebrities[this.state.selectedIndex]}
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
export default connect(mapStateToProps, {getCelebs})(QuizEasy);
