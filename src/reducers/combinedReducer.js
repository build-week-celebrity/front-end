import * as types from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
    username: user ? user.username : "",
    email: user ? user.email : "",
    password: "",
    score: [],
    celebrities: []
};

export const combinedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP:
            return state;
        case types.LOGIN:
            return initialState;
        case types.LOGOUT:
            return state;
        case types.GET_CELEBS:
            return {
                ...state,
                celebrities: action.payload
            };
        case types.POST_SCORE_FORM:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default [combinedReducer, initialState];