import {createAction} from 'redux-actions'

// LOGIN

export const fetchLoginRequest = createAction("FETCH_LOGIN_REQUEST")
export const fetchLoginSuccess = createAction("FETCH_LOGIN_SUCCESS")
export const fetchLoginFailure = createAction("FETCH_LOGIN_FAILURE")

// 

// REGISTER

export const fetchRegisterRequest = createAction("FETCH_REGISTER_REQUEST")
export const fetchRegisterSuccess = createAction("FETCH_REGISTER_SUCCESS")
export const fetchRegisterFailure = createAction("FETCH_REGISTER_FAILURE")

// 

// LOGOUT

export const logoutFromApp = createAction("LOGOUT_FROM_APP")