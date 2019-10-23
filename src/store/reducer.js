import * as actionTypes from './action';
const initialState = {
    users: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === 'DECREMENT') {
        const newState = Object.assign({}, state);
        newState.users = action.resultEld

        return newState;
    }
    return state;
}

export default reducer;