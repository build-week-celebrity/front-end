function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import * as types from "../actions/actionTypes";

// const user = JSON.parse(localStorage.getItem("user"));

export var initialState = {
    username: "",
    email: "",
    password: "",
    token: [],
    transaction: false,
    logintransaction: false,
    scorestransaction: false,
    error: null,
    score: 0,
    celebrities: [],
    highscores: [],
    user: [],
    my_score: 0
};

export var combinedReducer = function combinedReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case types.SIGN_UP:
            return Object.assign({}, state, { token: action.payload, user: action.payload });
        case types.LOGIN:
            return Object.assign({}, state, {
                error: "",
                token: [action.payload],
                logintransaction: false,
                user: [action.payload]
            });
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                logintransaction: true,
                error: "",
                token: [].concat(_toConsumableArray(action.token)),
                user: [].concat(_toConsumableArray(action.payload))
            });

        case types.LOGIN_FAILED:
            return Object.assign({}, state, {

                logintransaction: false,

                error: action.payload
            });
        case types.LOGOUT:
            return state;
        case types.GET_CELEBS:
            return {
                transaction: false,
                celebrities: [],
                error: ""
            };
        case types.GET_CELEBS_SUCCESS:
            return Object.assign({}, state, {

                transaction: true,

                error: "",

                celebrities: [].concat(_toConsumableArray(state.celebrities), _toConsumableArray(action.payload))
            });

        case types.GET_CELEBS_FAILED:
            return Object.assign({}, state, {

                transaction: false,

                error: action.payload
            });
        case types.GET_HIGHSCORES:
            return Object.assign({}, state, {
                scorestransaction: false,
                highscores: [],
                error: ""
            });
        case types.GET_HIGHSCORES_SUCCESS:
            return Object.assign({}, state, {

                scorestransaction: true,

                error: "",

                highscores: [].concat(_toConsumableArray(state.highscores), _toConsumableArray(action.payload))
            });

        case types.GET_HIGHSCORES_FAILED:
            return Object.assign({}, state, {

                scorestransaction: false,

                error: action.payload
            });
        case types.POST_SCORE_FORM:
            return {};

        case "SET_SCORE":
            return {
                my_score: action.payload
            };

        default:
            return Object.assign({}, state);
    }
};

export default [combinedReducer, initialState];