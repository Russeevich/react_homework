import { call, put, takeEvery } from "@redux-saga/core/effects";
import {
    fetchRoutesFailure,
    fetchRoutesRequest,
    fetchRoutesSuccess,
    getRoutesFailure,
    getRoutesRequest,
    getRoutesSuccess
} from './actions';

const url = 'https://loft-taxi.glitch.me'

function fetchRoutesData(){
    return fetch(url + '/addressList', 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
}


function* routesRequestFetch(){
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

function getRoutesData(payload){
    return fetch(url + '/route?' + new URLSearchParams(payload), 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
}

function* routesRequestGet({payload}){
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