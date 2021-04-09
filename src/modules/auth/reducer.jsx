import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import {
    fetchLoginFailure,
    fetchLoginRequest,
    fetchLoginSuccess,
    logoutFromApp,
    fetchRegisterSuccess,
    fetchRegisterFailure,
    fetchRegisterRequest
} from './actions';


const auth = handleActions({
    [combineActions(fetchLoginRequest, fetchRegisterRequest)]: (state, action) => action.payload,
    [combineActions(fetchLoginFailure, fetchRegisterFailure)]: () => {},
    [logoutFromApp]: (state, action) => action.payload
}, {})

const authStatus = handleActions({
    [combineActions(fetchRegisterSuccess, fetchLoginSuccess, logoutFromApp)]: (state, action) => action.payload
}, {})

const isLoggedIn = handleActions({
    [combineActions(fetchRegisterSuccess, fetchLoginSuccess)]: () => true,
    [combineActions(fetchRegisterFailure, fetchRegisterRequest, fetchLoginRequest, fetchLoginFailure, logoutFromApp)]: () => false
}, false)

const error = handleActions({
    [combineActions(fetchLoginRequest, fetchRegisterRequest)]: () => {},
    [combineActions(fetchLoginFailure, fetchRegisterFailure)]: (state, action) => action.payload
}, {})



export default combineReducers({
    auth,
    authStatus,
    isLoggedIn,
    error
})