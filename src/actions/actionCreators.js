import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const userSignup = (userData, history) => dispatch => {
    axiosWithAuth()
        .post("/auth/register", userData)

    .then(({ data }) => {
        dispatch({ type: types.SIGN_UP });

        localStorage.setItem("token", data);

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
                user: res.data.username
            }) &
            localStorage.setItem("token", res.data.token) &
            console.log("token in state:", res.data.token) &
            console.log("token in localStorage:", localStorage.getItem("token")) &
            console.log(res.data) &
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
        .get("https://celeb-doa-api.herokuapp.com/api/celebrities/")

    .then(res => {
        const newRes = shuffle(res.data);
        console.log("Original Array:", res);
        console.log("Shuffled Array:", newRes);
        dispatch({ type: types.GET_CELEBS_SUCCESS, payload: newRes });
    })

    .catch(err => {
        dispatch({ type: types.GET_CELEBS_FAILED, payload: err.res });
    });
};

export const getHighScores = () => dispatch => {
    dispatch({ type: types.GET_HIGHSCORES });
    axios
        .get("https://celeb-doa-api.herokuapp.com/api/highscores/")
        .then(res => {
            dispatch({ type: types.GET_HIGHSCORES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: types.GET_HIGHSCORES_FAILED, payload: err.res });
        });
};

export const editUser = () => dispatch => {};