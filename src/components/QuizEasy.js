import React, { Component } from "react";
import { connect } from "react-redux";
import { getCelebs } from "../actions/actionCreators";
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
          <Celebrities
            celebrities={this.props.celebrities[this.state.selectedIndex]}
          />
          {console.log(this.props.celebrities)}
          <div className="answerbox">
            <div className="aliveBtn"> Alive </div>
            <div className="deadBtn"> Dead </div>
            <button className="toggle toggle-prev" onClick={this._TogglePrev}>
              Prev
            </button>
            <button className="toggle toggle-next" onClick={this._ToggleNext}>
              Next
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
    transaction: state.transaction
  };
};
export default connect(mapStateToProps, { getCelebs })(QuizEasy);
