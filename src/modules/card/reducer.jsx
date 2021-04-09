import { combineActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    fetchCardFailure,
    fetchCardRequest,
    fetchCardSuccess,
    getCardRequest,
    getCardSuccess,
    getCardFailure
} from './actions';
import { logoutFromApp } from '../auth/actions';

const initialState = {
    expiryDate: '',
    cardNumber: '',
    cvc: '',
    cardName: ''
}


const card = handleActions({
    [combineActions(getCardRequest, fetchCardFailure)]: () => {},
    [combineActions(fetchCardRequest, getCardSuccess)]: (state, action) => action.payload,
    [logoutFromApp]: () => initialState
}, initialState)

const cardStatus = handleActions({
    [fetchCardSuccess]: (state, action) => action.payload,
    [logoutFromApp]: (state, action) => action.payload
}, {})

const error = handleActions({
    [combineActions(fetchCardRequest, getCardRequest)]: () => {},
    [combineActions(fetchCardFailure, getCardFailure)]: (state, action) => action.payload,
    [logoutFromApp]: (state, action) => action.payload
}, {})


export default combineReducers({
    card,
    cardStatus,
    error
})