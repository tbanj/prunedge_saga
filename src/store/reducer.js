import * as actionTypes from './action';
const initialState = {
    user: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.LOGIN_USER) {
        const newState = Object.assign({}, state);
        newState.user = action.resultEld

        return newState;
    }
    return state;
}

export default reducer;