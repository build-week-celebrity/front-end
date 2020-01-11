import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { putScore } from "../actions/actionCreators";

class SubmitScore extends Component {
  handleclose = () => {
    this.props.history.push("/QuizSelector");
  };
  handleSubmit() {
    this.props.putScore(this.props.score);
    this.handleclose();
  }
  render() {
    return (
      <div className={"scoreSubmitContainer"}>
        <div className="Header">
          <div className="Logo">
            <h1> Dead or Alive </h1> <h3> Do you know who is ? </h3>
          </div>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <div className="header">
            <h1> Game Over!</h1>
            <h1> Submit Score ? </h1> <p>Score: {this.props.score}</p>
          </div>
          <button className={"submitButton"}> Submit </button>
          <button className="submitButton" onClick={this.handleclose}>
            Play Again
          </button>
        </form>
        <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
          <button className="submitButton">Log-in</button>
        </Link>
        <Link to="/SignUp">
          <button className="submitButton">Sign Up</button>
        </Link>
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    celebrities: state.celebrities,
    scoretransaction: state.scoretransaction,
    token: state.token,
    user: state.user,
    score: state.score
  };
};
export default connect(mapStateToProps, { putScore })(SubmitScore);
