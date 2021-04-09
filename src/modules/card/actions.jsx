import {createAction} from 'redux-actions'

// CARD

export const fetchCardRequest = createAction("FETCH_CARD_REQUEST")
export const fetchCardSuccess = createAction("FETCH_CARD_SUCCESS")
export const fetchCardFailure = createAction("FETCH_CARD_FAILURE")

export const getCardRequest = createAction("GET_CARD_REQUEST")
export const getCardSuccess = createAction("GET_CARD_SUCCESS")
export const getCardFailure = createAction("GET_CARD_FAILURE")

//