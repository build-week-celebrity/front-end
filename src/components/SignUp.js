import React from "react";

import { Form, Field, withFormik } from "formik";

import * as Yup from "yup";

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

import * as actionCreators from "../actions/actionCreators";

const SignUp = ({ errors, touched, values, userSignup, history }) => {
    const handleSignupSubmit = e => {
        console.log("in handleSignupSubmit", values);

        e.preventDefault();

        userSignup(values, history);
    };
    const handleclose = () => {
        history.goBack();
    };

    return ( <
        div className = "signup-container" >
        <
        div className = "xclose"
        onClick = { handleclose } >
        X <
        /div> <
        Form className = "signup-form"
        onSubmit = { handleSignupSubmit } >
        <
        label className = "signup-label" > Username < /label> <
        Field className = "signup-field"
        type = "text"
        name = "username"
        placeholder = "username" /
        >
        <
        small > (Between 2 - 24 characters) < /small> {
            touched.username && errors.username && ( <
                span className = "error" > { errors.first_name } < /span>
            )
        } <
        label className = "signup-label" > Email: < /label> <
        Field className = "signup-field"
        type = "email"
        name = "email"
        placeholder = "Email" /
        > {
            touched.email && errors.email && ( <
                span className = "error" > { errors.email } < /span>
            )
        } <
        label className = "signup-label" > Password: < /label> <
        Field className = "signup-field"
        type = "password"
        name = "password"
        placeholder = "Password" /
        >
        <
        small > (Must be longer than 4 characters) < /small> {
            touched.password && errors.password && ( <
                span className = "error" > { errors.password } < /span>
            )
        } <
        button className = "btn"
        type = "submit" >
        SIGN UP <
        /button> <
        /Form> <
        NavLink className = "form-link"
        to = "/login" >
        Already have an account ?
        <
        /NavLink> <
        /div>
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

            .min(2, "Need at least 2 characters")

            .max(24, "No more than 24 characters")

            .required("User Name is required"),

        email: Yup.string().required("User Name is required"),

        password: Yup.string()

            .min(4, "Need at least 4 characters")

            .required("Password is required")
    })
})(SignUp);

//!!! withFormik validation and Yup Error Messages //

export default connect(state => state, actionCreators)(FormikSignup);