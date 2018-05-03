import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { loginRequest } from './login/action/';
import { signUpRequest } from './signUp/action/';

export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.USER_SIGNUP_REQUEST, signUpRequest);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
