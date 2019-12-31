import React, { Component } from "react";
import Celebrities from "./Celebrities";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class QuizEasy extends Component {
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
    axiosWithAuth()
      .get("/api/celebrities")
      .then(res => {
        var celebrities = res.data;
        this.setState({
          celebrities: celebrities,
          selectedIndex: 0
        });
      });
  }
  componentWillUnmount() {
    this.serverRequest.abort();
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
    let { selectedIndex, celebrities } = this.state;
    return (
      <div className="Quiz">
        <div className="celebQuiz">
          <Celebrities celebrities={celebrities[selectedIndex]} />
          <div className="answerbox">
            <div className="aliveBtn"> Alive </div>
            <div className="deadBtn"> Dead </div>
            <button className="toggle toggle--prev" onClick={this._TogglePrev}>
              Prev
            </button>
            <button className="toggle toggle--next" onClick={this._ToggleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
