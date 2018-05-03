import {createAction} from 'redux-actions';
import * as constants from './constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);

export const userSignUpRequest = createAction(constants.USER_SIGNUP_REQUEST);
export const userSignUpSuccess = createAction(constants.USER_SIGNUP_SUCCESS);
export const userSignUpError = createAction(constants.USER_SIGNUP_ERROR);
