import * as types from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
    username: user ? user.username : "",
    email: user ? user.email : "",
    password: "",
    token: [],
    users: [],
    transaction: false,
    scorestransaction: false,
    error: null,
    score: [],
    celebrities: [],
    highscores: []
};

export const combinedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP:
            return {...state, token: action.payload };
        case types.LOGIN:
            return {...state, error: "", token: action.payload };
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
        case types.GET_HIGHSCORES:
            return {
                ...state,
                scorestransaction: false,
                highscores: [...state.highscores],
                error: ""
            };
        case types.GET_HIGHSCORES_SUCCESS:
            return {
                ...state,

                scorestransaction: true,

                error: "",

                highscores: [...state.highscores, ...action.payload]
            };

        case types.GET_HIGHSCORES_FAILED:
            return {
                ...state,

                scorestransaction: false,

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