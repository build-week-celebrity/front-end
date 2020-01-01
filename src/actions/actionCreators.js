import * as types from "./actionTypes";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("/api/users", userData)

    .then(({ data }) => {
      dispatch({ type: types.SIGN_UP });

      localStorage.setItem("token", data.token);

      history.push("/QuizSelector");
      console.log(userData);
      console.log({ data });
    })

    .catch(err => console.log(err));
};

export const userLogin = (loginData, history) => dispatch => {
  axiosWithAuth()
    .post("/api/auth", loginData)

    .then(({ data }) => {
      dispatch({ type: types.LOGIN });

      localStorage.setItem("token", data.payload);
      console.log({ data });

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
export const displayCelebList = celebrities => {
  return { type: types.GET_CELEBS, payload: celebrities };
};
export const getCelebList = () => dispatch => {
  axiosWithAuth()
    .get("/api/celebrities")
    .then(({ data }) => {
      dispatch(displayCelebList(data));
      console.log(data);
    })
    .catch(err => console.log(err));
};
