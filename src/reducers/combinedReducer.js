import * as types from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  username: user ? user.username : "",
  email: user ? user.email : "",
  password: "",
  loggedUser: [],
  transaction: false,
  error: null,
  score: [],
  celebrities: [],
  users: []
};

export const combinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return { ...state, loggedUser: action.payload };
    case types.LOGIN:
      return initialState;
    case types.LOGOUT:
      return state;
    case types.GET_CELEBS:
      return {
        ...state,
        transaction: false,
        celebrities: [...state.celebrities],
        error: ""
      };
    case types.GET_CELEBS_SUCCESS:
      return {
        ...state,

        transaction: true,

        error: "",

        celebrities: [...state.celebrities, ...action.payload]
      };

    case types.GET_CELEBS_FAILED:
      return {
        ...state,

        transaction: false,

        error: action.payload
      };
    case types.POST_SCORE_FORM:
      return {};
    case types.GET_USERS:
      return {
        ...state,
        transaction: false,
        users: [...state.users],
        error: ""
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        transaction: true,
        users: [...state.users, ...action.payload],
        error: ""
      };

    case types.GET_USERS_FAILED:
      return {
        ...state,
        transaction: false,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default [combinedReducer, initialState];
