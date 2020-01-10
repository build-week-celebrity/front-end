export var setScore = function setScore(score) {
    return function (dispatch) {
        dispatch({ type: "SET_SCORE", payload: score });
    };
};