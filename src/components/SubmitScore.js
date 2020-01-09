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

  handleSubmit() {
    axiosWithAuth().put(`/user/:${this.props.user}`, this.props.my_score);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="header">
            <h1> Submit Score ? </h1> <p>Score:{this.props.my_score}</p>
            {console.log(this.props.my_score)}
            {console.log(this.props.celebrities)}
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
