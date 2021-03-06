import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes'
import { logoutSaga, checkAuthTimeoutSaga } from './auth.js';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);

}