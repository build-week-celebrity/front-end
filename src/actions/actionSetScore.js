export const setScore = score => dispatch => {
    dispatch({ type: "SET_SCORE", payload: score });
};