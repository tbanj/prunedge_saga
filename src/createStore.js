import { createStore, applyMiddleware } from 'redux';
// is use for redux middleware implementation 
import reduxThunk from 'redux-thunk';
import reducer from './store/reducers/reducer.js';



export const middlewares = [reduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(reducer);