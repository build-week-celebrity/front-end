import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export var userSignup = function userSignup(userData, history) {
    return function (dispatch) {
        axiosWithAuth().post("/auth/register", userData).then(function (res) {
            dispatch({ type: types.SIGN_UP });

            localStorage.setItem("token", res);

            history.push("/QuizSelector");
        }).catch(function (err) {
            return console.log(err);
        });
    };
};

export var userLogin = function userLogin(loginData, history) {
    return function (dispatch) {
        axiosWithAuth().post("/auth/login", loginData).then(function (res) {
            return dispatch({
                type: types.LOGIN,
                token: res.data.token,
                user: res.data.id
            }) & localStorage.setItem("token", res.data.token) &
            //console.log("Username in state:", res.data.username) &
            //console.log("token in localStorage:", localStorage.getItem("token")) &
            //console.log(res.data) &
            history.push("/QuizSelector");
        }).catch(function (err) {
            return console.log(err);
        });
    };
};

export var userLogout = function userLogout() {
    localStorage.removeItem("token");
    return { type: types.LOGOUT };
};

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export var getCelebs = function getCelebs() {
    return function (dispatch) {
        dispatch({ type: types.GET_CELEBS });

        axios.get("https://celeb-doa-api.herokuapp.com/api/celebrities").then(function (res) {
            var newRes = shuffle(res.data);
            // console.log("Original Array:", res.data);
            // console.log("Shuffled Array:", newRes.data);
            dispatch({ type: types.GET_CELEBS_SUCCESS, payload: newRes });
        }).catch(function (err) {
            dispatch({ type: types.GET_CELEBS_FAILED, payload: err.res });
        });
    };
};

export var getHighScores = function getHighScores() {
    return function (dispatch) {
        dispatch({ type: types.GET_HIGHSCORES });
        axios.get("https://celeb-doa-api.herokuapp.com/api/highscores/").then(function (res) {
            dispatch({ type: types.GET_HIGHSCORES_SUCCESS, payload: res.data });
        }).catch(function (err) {
            dispatch({ type: types.GET_HIGHSCORES_FAILED, payload: err.res });
        });
    };
};

export var editUser = function editUser() {
    return function (dispatch) {};
};