import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

var Login = function Login(_ref) {
  var errors = _ref.errors,
      touched = _ref.touched,
      values = _ref.values,
      userLogin = _ref.userLogin,
      history = _ref.history;

  var handleLoginSubmit = function handleLoginSubmit(e) {
    e.preventDefault();
    userLogin(values, history);
  };
  var handleclose = function handleclose() {
    history.goBack();
  };
  return React.createElement(
    "div",
    { className: "login-container" },
    React.createElement(
      "div",
      { className: "xclose", onClick: handleclose },
      "X"
    ),
    React.createElement(
      Form,
      { className: "login-form", onSubmit: handleLoginSubmit },
      touched.username && errors.username && React.createElement(
        "div",
        { className: "error" },
        " ",
        errors.username,
        " "
      ),
      touched.password && errors.password && React.createElement(
        "div",
        { className: "error" },
        " ",
        errors.password,
        " "
      ),
      React.createElement(
        "label",
        { className: "login-label" },
        " Username: "
      ),
      React.createElement(Field, {
        className: "login-field",
        type: "text",
        name: "username",
        placeholder: "Username"
      }),
      React.createElement(
        "label",
        { className: "login-label" },
        " Password: "
      ),
      React.createElement(Field, {
        className: "login-field",
        type: "password",
        name: "password",
        placeholder: "Password"
      }),
      React.createElement(
        "button",
        null,
        " Login "
      )
    ),
    React.createElement(
      NavLink,
      { className: "form-link", to: "/signup" },
      "Dont have an account ?"
    )
  );
};

var FormikLogin = withFormik({
  mapPropsToValues: function mapPropsToValues(_ref2) {
    var username = _ref2.username,
        password = _ref2.password;

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

export default connect(function (state) {
  return state;
}, actionCreators)(FormikLogin);