import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("/auth/register", userData)

    .then(res => {
      dispatch({ type: types.SIGN_UP });
      history.goBack();
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
          payload: res.token
        }) &
        localStorage.setItem("Authorization", res.data.token) &
        localStorage.setItem("userID", res.data.id) &
        localStorage.setItem("username", res.data.username) &
        history.goBack()
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
      dispatch({
        type: types.GET_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: types.GET_USERS_FAILED, payload: err.res });
    });
};
function scoresSorted(array) {
  return array.sort(function(a, b) {
    return b.score - a.score;
  });
}
const userID = localStorage.getItem("userID"),
  username = localStorage.getItem("username");
export const putScore = score => dispatch => {
  dispatch({ type: types.PUT_SCORE });
  axiosWithAuth()
    .put(`/users/${userID}`, {
      username: username,
      score: score,
      id: userID
    })
    .then(res => {
      dispatch({
        type: types.PUT_SCORE_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({ type: types.PUT_SCORE_FAILED, payload: err.res });
    });
};

export const getHighScores = () => dispatch => {
  dispatch({ type: types.GET_HIGHSCORES });
  axiosWithAuth()
    .get("https://celeb-doa-api.herokuapp.com/api/highscores/")
    .then(res => {
      const newlist = scoresSorted(res.data);
      dispatch({
        type: types.GET_HIGHSCORES_SUCCESS,
        payload: newlist
      });
    })
    .catch(err => {
      dispatch({ type: types.GET_HIGHSCORES_FAILED, payload: err.res });
    });
};
