import { call, put, takeEvery } from "@redux-saga/core/effects";
import {
    fetchRoutesFailure,
    fetchRoutesRequest,
    fetchRoutesSuccess,
    getRoutesFailure,
    getRoutesRequest,
    getRoutesSuccess
} from './actions';
import { fetchRoutesData, getRoutesData } from './api';

export function* routesRequestFetch(){
    try{
        const data = yield call(fetchRoutesData)
        if(data.addresses)
            yield put(fetchRoutesSuccess(data))
        else yield put(fetchRoutesFailure(data))
    }catch(error){
        yield put(fetchRoutesFailure(error))
    }
}

export function* fetchRoutesSagaRequest(){
    yield takeEvery(fetchRoutesRequest.toString(), routesRequestFetch)
}

export function* routesRequestGet({payload}){
    try{
        const data = yield call(getRoutesData, payload)
        if(data.length > 0)
            yield put(getRoutesSuccess(data))
        else yield put(getRoutesFailure(data))
    }catch(error){
        yield put(getRoutesFailure(error))
    }
}

export function* getRoutesSagaRequest(){
    yield takeEvery(getRoutesRequest.toString(), routesRequestGet)
}