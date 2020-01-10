import React, { Component } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class SubmitScore extends Component {
  userID = localStorage.getItem("userID");
  username = localStorage.getItem("username");
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
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(this.props.my_score);
          }}
        >
          <div className="header">
            <h1> Submit Score ? </h1> <p>Score:{this.props.my_score}</p>
          </div>
          <button className={"submitButton"}> Submit </button>
        </form>
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
