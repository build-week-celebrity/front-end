import React, { Component } from "react";
//import axios from "axios";
// import { Form} from "formik";
// import * as Yup from "yup";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import * as actionCreators from "../actions/actionCreators";

class SubmitScore extends Component {
  //componentDidMount() {
  //     };
  userID = localStorage.getItem("userID");
  username = localStorage.getItem("username");
  handleSubmit() {
    console.log("Sending Score:", this.props.score);
    axiosWithAuth()
      .put(`/users/${this.userID}`, {
        username: this.username,
        score: this.props.my_score,
        id: this.userID
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.props.history.push("/QuizSelector");
  }
  render() {
    return (
      <div>
        {console.log(this.props.user)}
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(this.props.my_score);
          }}
        >
          <div className="header">
            <h1> Submit Score ? </h1> <p>Score:{this.props.my_score}</p>
          </div>
          <button> Submit </button>
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
