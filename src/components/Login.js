import React from "react";

import { Form, Field, withFormik } from "formik";

import * as Yup from "yup";

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

import * as actionCreators from "../actions/actionCreators";

const Login = ({ errors, touched, values, userLogin, history }) => {
  const handleLoginSubmit = e => {
    console.log("in handleLoginSubmit", values);

    e.preventDefault();

    userLogin(values, history);
  };
  const handleclose = () => {
    history.goBack();
  };
  return (
    <div className="login-container">
      <div className="xclose" onClick={handleclose}>
        X
      </div>
      <Form className="login-form" onSubmit={handleLoginSubmit}>
        <label className="login-label"> Email: </label>
        <Field
          className="login-field"
          type="email"
          name="username"
          placeholder="Email"
        />
        {touched.username && errors.username && (
          <span className="error"> {errors.username} </span>
        )}
        <label className="login-label"> Password: </label>
        <Field
          className="login-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span className="error"> {errors.password} </span>
        )}
        <button> Login </button>
      </Form>
      <NavLink className="form-link" to="/signup">
        Dont have an account ?
      </NavLink>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",

      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()

      .required("Email is required")

      .email("Must provide a valid Email Address"),

    password: Yup.string()

      .min(4, "Need at least 4 characters")

      .required("Password is required")
  })
})(Login);

//!!! withFormik validation and Yup Error Messages //

export default connect(state => state, actionCreators)(FormikLogin);
