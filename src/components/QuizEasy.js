import React, { Component } from "react";
import { connect } from "react-redux";
import { getCelebs } from "../actions/actionCreators";
import Celebrities from "./Celebrities";

class QuizEasy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celebrities: [],
      selectedIndex: 0
    };
    this._TogglePrev = this._TogglePrev.bind(this);
    this._ToggleNext = this._ToggleNext.bind(this);
  }
  componentDidMount() {
    this.props.getCelebs();
  }
  _ToggleNext() {
    if (this.state.selectedIndex === this.state.celebrities.length - 1) return;

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
    if (this.props.GET_CELEBS) {
      return <h3>Loading Quiz Data</h3>;
    }
    return (
      <div className="Quiz">
        <div className="xclose">X</div>
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
    getCelebs: state.getCelebs
  };
};
export default connect(mapStateToProps, { getCelebs })(QuizEasy);
