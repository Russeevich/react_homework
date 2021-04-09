import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
    getCardRequest,
    getCardSuccess,
    getCardFailure
} from './actions';
import { getCardData, fetchCardData } from './api';

export function* cardRequestFetch({payload}){
    if(!payload)
        return
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


export function* cardRequestGet({payload}){
    if(!payload)
        return
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