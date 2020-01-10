import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const userSignup = (userData, history) => dispatch => {
    axiosWithAuth()
        .post("/auth/register", userData)

    .then(res => {
        dispatch({ type: types.SIGN_UP });
        history.push("/QuizSelector");
    })

    .catch(err => console.log(err));
};

export const userLogin = (loginData, history) => dispatch => {
    axiosWithAuth()
        .post("/auth/login", loginData)
        .then(
            res =>
            dispatch({
                type: types.LOGIN,
                token: res.data.token,
                user: res.data.id
            }) &
            localStorage.setItem("Authorization", res.data.token) &
            localStorage.setItem("userID", res.data.id) &
            localStorage.setItem("username", res.data.username) &
            history.push("/QuizSelector")
        )

    .catch(err => console.log(err));
};

export const userLogout = () => {
    localStorage.removeItem("token");
    return { type: types.LOGOUT };
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const getCelebs = () => dispatch => {
    dispatch({ type: types.GET_CELEBS });

    axios
        .get("https://celeb-doa-api.herokuapp.com/api/celebrities")

    .then(res => {
        const newRes = shuffle(res.data);
        dispatch({ type: types.GET_CELEBS_SUCCESS, payload: newRes });
    })

    .catch(err => {
        dispatch({ type: types.GET_CELEBS_FAILED, payload: err.res });
    });
};

export const displayUserList = () => dispatch => {
    dispatch({ type: types.GET_USERS });
    axiosWithAuth()
        .get("/users")
        .then(res => {
            dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: types.GET_USERS_FAILED, payload: err.res });
        });
};

export const getHighScores = () => dispatch => {
    dispatch({ type: types.GET_HIGHSCORES });
    axiosWithAuth()
        .get("https://celeb-doa-api.herokuapp.com/api/highscores/")
        .then(res => {
            dispatch({ type: types.GET_HIGHSCORES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: types.GET_HIGHSCORES_FAILED, payload: err.res });
        });
};