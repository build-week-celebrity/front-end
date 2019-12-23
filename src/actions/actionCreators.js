import * as types from "./actionTypes";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("/api/user", userData)

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
    .post("/api/login", loginData)

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
