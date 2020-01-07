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
        {touched.username && errors.username && (
          <div className="error"> {errors.username} </div>
        )}
        {touched.email && errors.email && (
          <div className="error"> {errors.email} </div>
        )}
        {touched.password && errors.password && (
          <div className="error"> {errors.password} </div>
        )}
        <label className="signup-label"> Username </label>
        <Field
          className="signup-field"
          type="text"
          name="username"
          placeholder="username"
        />
        <small>
          <em> (Between 2 - 10 characters) </em>
        </small>
        <label className="signup-label"> Email: </label>
        <Field
          className="signup-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        <label className="signup-label"> Password: </label>
        <Field
          className="signup-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        <small>
          <em> (Must be longer than 4 characters) </em>
        </small>
        <button className="btn" type="submit">
          SIGN UP
        </button>
      </Form>
      <NavLink className="form-link" to="/login">
        <em> Already have an account ? </em>
      </NavLink>
    </div>
  );
};

const FormikSignup = withFormik({
  mapPropsToValues({ email, username, password }) {
    return {
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, "Minimum 2 Charecters")
      .max(10, "Maximum 10 Charecters")
      .required("Username is required"),
    email: Yup.string()
      .email("Must Be Valid Email Format")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Minimum 4")
      .required("Password is required")
  })
})(SignUp);

export default connect(state => state, actionCreators)(FormikSignup);
