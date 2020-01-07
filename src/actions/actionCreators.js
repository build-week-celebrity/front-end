import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const userSignup = (userData, history) => dispatch => {
    axiosWithAuth()
        .post("/auth/register", userData)

    .then(({ res }) => {
        dispatch({ type: types.SIGN_UP });

        localStorage.setItem("token", res.data.token);

        history.push("/QuizSelector");
    })

    .catch(err => console.log(err));
};

export const userLogin = (loginData, history) => dispatch => {
    axiosWithAuth()
        .post("/auth/login", loginData)
        .then(
            res =>
            dispatch({ type: types.LOGIN }) &
            localStorage.setItem("token", res.data.token) &
            console.log("token in state:", res.data.token) &
            console.log("token in localStorage:", localStorage.getItem("token")) &
            history.push("/QuizSelector")
        )

    .catch(err => console.log(err));
};

export const userLogout = () => {
    localStorage.removeItem("token");

    return { type: types.LOGOUT };
};

export const displayUserList = () => dispatch => {
    const token = localStorage.getItem("token");
    console.log("token in displayusers get:", token);
    dispatch({ type: types.GET_USERS });

    axiosWithAuth()
        .get("/users", token)
        .then(res => {
            console.log(res);
            dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: types.GET_USERS_FAILED, payload: err.res });
        });
};
export const getCelebs = () => dispatch => {
    dispatch({ type: types.GET_CELEBS });

    axios
        .get("https://celeb-doa-api.herokuapp.com/api/celebrities/")


    .then(res => {
        dispatch({ type: types.GET_CELEBS_SUCCESS, payload: res.data });
    })

    .catch(err => {
        dispatch({ type: types.GET_CELEBS_FAILED, payload: err.res });
    });
};