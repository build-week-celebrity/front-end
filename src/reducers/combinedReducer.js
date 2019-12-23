import * as types from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  username: user ? user.username : "",

  email: user ? user.email : "",

  password: "",

  highScore: []
};

export const combinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return state;

    case types.LOGIN:
      return initialState;
    case types.LOGOUT:
      return state;

    default:
      return state;
  }
};

export default [combinedReducer, initialState];
