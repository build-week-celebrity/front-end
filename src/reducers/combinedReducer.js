import * as types from "../actions/actionTypes";

export const initialState = {
    username: "",
    email: "",
    password: "",
    token: [],
    transaction: false,
    logintransaction: false,
    scorestransaction: false,
    usertransaction: false,
    error: null,
    score: 0,
    celebrities: [],
    highscores: [],
    users: [],
    my_score: 0
};

export const combinedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP:
            return {...state, token: action.payload, user: action.payload };
        case types.LOGIN:
            return {
                ...state,
                error: "",
                token: [action.payload],
                logintransaction: false,
                user: [action.payload]
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                logintransaction: true,
                error: "",
                token: [...action.payload],
                user: [...action.payload]
            };

        case types.LOGIN_FAILED:
            return {
                ...state,

                logintransaction: false,

                error: action.payload
            };
        case types.LOGOUT:
            return state;
        case types.GET_CELEBS:
            return {
                transaction: false,
                celebrities: [],
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
                highscores: [],
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
        case types.GET_USERS:
            return {
                ...state,
                usertransaction: false,
                users: [],
                error: ""
            };
        case types.GET_USERS_SUCCESS:
            return {
                ...state,

                usertransaction: true,

                error: "",

                users: [...state.users, ...action.payload]
            };

        case types.GET_USERS_FAILED:
            return {
                ...state,

                usertransaction: false,

                error: action.payload
            };
        case types.POST_SCORE_FORM:
            return {};

        case "SET_SCORE":
            return {
                my_score: action.payload
            };

        default:
            return {
                ...state
            };
    }
};

export default [combinedReducer, initialState];