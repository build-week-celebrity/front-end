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
    putscoretransaction: false,
    error: null,
    celebrities: [],
    highscores: [],
    users: [],
    score: 0
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
        case types.PUT_SCORE:
            return {
                ...state,
                putscoretransaction: false,
                score: [state.score],
                error: ""
            };
        case types.PUT_SCORE_SUCCESS:
            return {
                ...state,

                putscoretransaction: true,

                error: "",

                score: [...state.score]
            };

        case types.PUT_SCORE_FAILED:
            return {
                ...state,

                putscoretransaction: false,

                error: action.payload
            };

        case "SET_SCORE":
            return {
                score: action.payload
            };

        default:
            return {
                ...state
            };
    }
};

export default [combinedReducer, initialState];