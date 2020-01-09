import React from "react";
// import { Form} from "formik";
// import * as Yup from "yup";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actionCreators from "../actions/actionCreators";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SubmitScore = (score, id) => {
    function handleSubmit(score, id) {
        axiosWithAuth()
        .put(`/user/:${id}`,score)
    }
    console.log(score);
    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <div className="header">
                    <h1>Submit Score?</h1>
                    {/* <p>{props.score}</p> */}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SubmitScore;