import React, { Component } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Header from "./Header";
import SignUp from "./SignUp";
import { BrowserRouter as Route, Link } from "react-router-dom";
class SubmitScore extends Component {
  userID = localStorage.getItem("userID");
  username = localStorage.getItem("username");
  handleclose = () => {
    this.props.history.push("/QuizSelector");
  };
  handleSubmit() {
    axiosWithAuth()
      .put(`/users/${this.userID}`, {
        username: this.username,
        score: this.props.my_score,
        id: this.userID
      })
      .catch(err => console.log(err));
    this.props.history.push("/QuizSelector");
  }
  render() {
    return (
      <div className={"scoreSubmitContainer"}>
        <Header />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(this.props.my_score);
          }}
        >
          <div className="header">
            <h1> Game Over!</h1>
            <h1> Submit Score ? </h1> <p>Score:{this.props.my_score}</p>
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
    transaction: state.transaction,
    token: state.token,
    user: state.user,
    my_score: state.my_score
  };
};
export default connect(mapStateToProps, {})(SubmitScore);
