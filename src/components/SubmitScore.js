import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import SignUp from "./SignUp";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { putScore } from "../actions/actionCreators";

class SubmitScore extends Component {
  handleclose = () => {
    this.props.history.push("/QuizSelector");
  };
  handleSubmit() {
    this.props.putScore(this.props.score);
    console.log(this.props.score, "submitted Score");
    this.handleclose();
  }
  render() {
    return (
      <div className={"scoreSubmitContainer"}>
        <Header />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <div className="header">
            <h1> Game Over!</h1>
            <h1> Submit Score ? </h1> <p>Score:{this.props.score}</p>
          </div>
          <button className={"submitButton"}> Submit </button>
          <button className="submitButton" onClick={this.handleclose}>
            Dont Submit
          </button>
        </form>
        <Link to="/SignUp">
          <button className="submitButton">Sign Up</button>
        </Link>
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
