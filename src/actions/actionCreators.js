import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("/api/users", userData)

    .then(({ data }) => {
      dispatch({ type: types.SIGN_UP });

      localStorage.setItem("token", data.token);

      history.push("/QuizSelector");
    })

    .catch(err => console.log(err));
};

export const userLogin = (loginData, history) => dispatch => {
  axiosWithAuth()
    .post("/api/auth", loginData)

    .then(({ data }) => {
      dispatch({ type: types.LOGIN });

      localStorage.setItem("token", data.payload);

      history.push("/QuizSelector");
    })

    .catch(err => console.log(err));
};

export const userLogout = () => {
  localStorage.removeItem("token");

  return { type: types.LOGOUT };
};

export const postScoreForm = recData => dispatch => {
  const stringObjRecData = JSON.stringify(recData);
  axiosWithAuth()
    .post(`/api/score/${stringObjRecData}`, { body: stringObjRecData })
    .then(({ data }) => {
      dispatch(displayScoreList(data));
    })
    .catch(err => console.log(err));
};
export const displayScoreList = scores => {
  return { type: types.GET_SCORES, payload: scores };
};
export const getCelebs = () => dispatch => {
  dispatch({ type: types.GET_CELEBS });

  axios
    .get("http://localhost:5000/api/celebrities")

    .then(res => {
      dispatch({ type: types.GET_CELEBS_SUCCESS, payload: res.data });
    })

    .catch(err => {
      dispatch({ type: types.GET_CELEBS_FAILED, payload: err.res });
    });
};
