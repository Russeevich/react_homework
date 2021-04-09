import {createAction} from 'redux-actions'

// ROUTES

export const fetchRoutesRequest = createAction("FETCH_ROUTES_REQUEST")
export const fetchRoutesSuccess = createAction("FETCH_ROUTES_SUCCESS")
export const fetchRoutesFailure = createAction("FETCH_ROUTES_FAILURE")

export const getRoutesRequest = createAction("GET_ROUTES_REQUEST")
export const getRoutesSuccess = createAction("GET_ROUTES_SUCCESS")
export const getRoutesFailure = createAction("GET_ROUTES_FAILURE")

//