import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

const Login = ({ errors, touched, values, userLogin, history }) => {
  const handleLoginSubmit = e => {
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
        {touched.username && errors.username && (
          <div className="error"> {errors.username} </div>
        )}
        {touched.password && errors.password && (
          <div className="error"> {errors.password} </div>
        )}
        <label className="login-label"> Username: </label>
        <Field
          className="login-field"
          type="text"
          name="username"
          placeholder="Username"
        />
        <label className="login-label"> Password: </label>
        <Field
          className="login-field"
          type="password"
          name="password"
          placeholder="Password"
        />
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
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  })
})(Login);

export default connect(state => state, actionCreators)(FormikLogin);
