import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
    getCardRequest,
    getCardSuccess,
    getCardFailure
} from './actions';


const url = 'https://loft-taxi.glitch.me'

function fetchCardData(payload){
    return fetch(url + '/card', 
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
}

function* cardRequestFetch({payload}){
    try{
        const data = yield call(fetchCardData, payload)
        if(data.success)
            yield put(fetchCardSuccess(data))
        else yield put(fetchCardFailure(data))
    }catch(error){
        yield put(fetchCardFailure(error))
    }
}

export function* fetchCardSagaRequest(){
    yield takeEvery(fetchCardRequest.toString(), cardRequestFetch)
}

function getCardData(payload){
    return fetch(url + '/card?' +  new URLSearchParams(payload), 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
}

function* cardRequestGet({payload}){
    try{
        const data = yield call(getCardData, payload)
        if(data.cardName){
            delete data.id
            yield put(getCardSuccess(data))
        }
        else yield put(getCardFailure(data))
    }catch(error){
        yield put(getCardFailure(error))
    }
}


export function* getCardSagaRequest(){
    yield takeEvery(getCardRequest.toString(), cardRequestGet)
}