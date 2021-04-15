import { combineReducers } from "redux"
import { combineActions, handleActions } from "redux-actions"
import { logoutFromApp } from "../auth/actions"
import {
    fetchRoutesRequest,
    fetchRoutesFailure,
    fetchRoutesSuccess,
    getRoutesFailure,
    getRoutesRequest,
    getRoutesSuccess,
    deleteRoutesPoints
} from './actions';


const routes = handleActions({
    [combineActions(fetchRoutesFailure, fetchRoutesRequest, logoutFromApp)]: () => {},
    [fetchRoutesSuccess]: (state, action) => action.payload
}, {})

const points = handleActions({
    [combineActions(getRoutesRequest, logoutFromApp, deleteRoutesPoints)]: () => [],
    [getRoutesSuccess]: (state, action) => action.payload
}, [])

const error = handleActions({
    [combineActions(fetchRoutesRequest, getRoutesRequest)]: () => {},
    [combineActions(fetchRoutesFailure, getRoutesFailure)]: (state, action) => action.payload,
    [logoutFromApp]: (state, action) => action.payload
}, {})


export default combineReducers({
    routes,
    points,
    error
})