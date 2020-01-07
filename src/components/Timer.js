<<<<<<< HEAD
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
      <div className="Timer">
        {minutes} : {seconds}
=======
import React, {Component} from "react";

class Timer extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      };
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
      <div className="Timer">
        <div>
          {minutes} : {seconds}
            <div>
              {this.state.timerOn === false && this.state.timerTime === 0 && (
                <button onClick={this.startTimer}>Start</button>
              )}
              {this.state.timerOn === true && (
                <button onClick={this.stopTimer}>Stop</button>
              )}
            </div>
        </div>
>>>>>>> a54692a05734c620e113f988c8613a3f4e81c06a
      </div>
    );
  }
}
<<<<<<< HEAD

export default Timer;
=======
export default Timer;
>>>>>>> a54692a05734c620e113f988c8613a3f4e81c06a
