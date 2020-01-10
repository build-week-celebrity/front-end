import React, { Component } from "react";
// import { Form} from "formik";
// import * as Yup from "yup";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import * as actionCreators from "../actions/actionCreators";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class SubmitScore extends Component {
  //componentDidMount() {
  //     };

  handleSubmit(score) {
    console.log("Sending Score:", score);
    axiosWithAuth()
      .put(`/users/:1`, score)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="scoreSubmitContainer">
        {console.log(this.props.user)}
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(this.props.my_score);
          }}
        >
          <div className="header">
            <h1> Submit Score? </h1> <p>Score:{this.props.my_score}</p>
          </div>
          <button className="submitButton"> Submit </button>
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
