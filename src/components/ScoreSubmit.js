import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

const SubmitScore = () => {

    return (
    <div>
      <form>
         <div className={"head"}>
             <h1>Submit Score</h1>
             <h2>152</h2>
         </div>
         <button>Submit</button>
      </form>
    </div>
    )}

export default SubmitScore;