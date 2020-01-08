import React, { Component } from "react";

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };
  componentDidMount() {
    this.startTimer();
  }
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };
  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    return (
      <div>
        {minutes}:{seconds}
      </div>
    );
  }
}
export default Timer;
