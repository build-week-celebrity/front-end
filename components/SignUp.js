import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

var SignUp = function SignUp(_ref) {
  var errors = _ref.errors,
      touched = _ref.touched,
      values = _ref.values,
      userSignup = _ref.userSignup,
      history = _ref.history;

  var handleSignupSubmit = function handleSignupSubmit(e) {
    e.preventDefault();
    userSignup(values, history);
  };
  var handleclose = function handleclose() {
    history.goBack();
  };

  return React.createElement(
    "div",
    { className: "signup-container" },
    React.createElement(
      "div",
      { className: "xclose", onClick: handleclose },
      "X"
    ),
    React.createElement(
      Form,
      { className: "signup-form", onSubmit: handleSignupSubmit },
      touched.username && errors.username && React.createElement(
        "div",
        { className: "error" },
        " ",
        errors.username,
        " "
      ),
      touched.email && errors.email && React.createElement(
        "div",
        { className: "error" },
        " ",
        errors.email,
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
        { className: "signup-label" },
        " Username "
      ),
      React.createElement(Field, {
        className: "signup-field",
        type: "text",
        name: "username",
        placeholder: "username"
      }),
      React.createElement(
        "small",
        null,
        React.createElement(
          "em",
          null,
          " (Between 2 - 10 characters) "
        )
      ),
      React.createElement(
        "label",
        { className: "signup-label" },
        " Email: "
      ),
      React.createElement(Field, {
        className: "signup-field",
        type: "email",
        name: "email",
        placeholder: "Email"
      }),
      React.createElement(
        "label",
        { className: "signup-label" },
        " Password: "
      ),
      React.createElement(Field, {
        className: "signup-field",
        type: "password",
        name: "password",
        placeholder: "Password"
      }),
      React.createElement(
        "small",
        null,
        React.createElement(
          "em",
          null,
          " (Must be longer than 4 characters) "
        )
      ),
      React.createElement(
        "button",
        { className: "btn", type: "submit" },
        "SIGN UP"
      )
    ),
    React.createElement(
      NavLink,
      { className: "form-link", to: "/login" },
      React.createElement(
        "em",
        null,
        " Already have an account ? "
      )
    )
  );
};

var FormikSignup = withFormik({
  mapPropsToValues: function mapPropsToValues(_ref2) {
    var email = _ref2.email,
        username = _ref2.username,
        password = _ref2.password;

    return {
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },


  validationSchema: Yup.object().shape({
    username: Yup.string().min(2, "Minimum 2 Charecters").max(10, "Maximum 10 Charecters").required("Username is required"),
    email: Yup.string().email("Must Be Valid Email Format").required("Email is required"),
    password: Yup.string().min(4, "Minimum 4").required("Password is required")
  })
})(SignUp);

export default connect(function (state) {
  return state;
}, actionCreators)(FormikSignup);