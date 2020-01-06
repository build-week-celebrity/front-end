import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

const SignUp = ({ errors, touched, values, userSignup, history }) => {
  const handleSignupSubmit = e => {
    e.preventDefault();
    userSignup(values, history);
  };
  const handleclose = () => {
    history.goBack();
  };

  return (
    <div className="signup-container">
      <div className="xclose" onClick={handleclose}>
        X
      </div>
      <Form className="signup-form" onSubmit={handleSignupSubmit}>
        <label className="signup-label"> Username </label>
        <Field
          className="signup-field"
          type="text"
          name="username"
          placeholder="username"
        />
        <small> (Between 2 - 24 characters) </small>
        {touched.username && errors.username && (
          <span className="error"> {errors.username} </span>
        )}
        <label className="signup-label"> Email: </label>
        <Field
          className="signup-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span className="error"> {errors.email} </span>
        )}
        <label className="signup-label"> Password: </label>
        <Field
          className="signup-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        <small> (Must be longer than 4 characters) </small>
        {touched.password && errors.password && (
          <span className="error"> {errors.password} </span>
        )}
        <button className="btn" type="submit">
          SIGN UP
        </button>
      </Form>
      <NavLink className="form-link" to="/login">
        Already have an account ?
      </NavLink>
    </div>
  );
};

const FormikSignup = withFormik({
  mapPropsToValues({ username, email, password }) {
    return {
      username: username || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, "Minimum 2 Charecters")
      .max(10, "Maximum 10 Charecters")
      .required("User Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(4, "Minimum 4")
      .required("Password is required")
  })
})(SignUp);

export default connect(state => state, actionCreators)(FormikSignup);
