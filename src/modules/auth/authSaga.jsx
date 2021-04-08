import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
    fetchLoginFailure,
    fetchLoginRequest,
    fetchLoginSuccess,
    fetchRegisterRequest,
    fetchRegisterSuccess,
    fetchRegisterFailure
} from './actions';

const url = 'https://loft-taxi.glitch.me'

function fetchLoginData(payload){
    return fetch(url + '/auth', 
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

function* loginRequest({payload}){
    try{
        const data = yield call(fetchLoginData, payload)
        if(data.success)
            yield put(fetchLoginSuccess(data))
        else yield put(fetchLoginFailure(data))
    }catch(error){
        yield put(fetchLoginFailure(error))
    }
}

export function* loginSagaRequest(){
    yield takeEvery(fetchLoginRequest.toString(), loginRequest)
}

function fetchRegisterData(payload){
    return fetch(url + '/register', 
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

function* registerRequest({payload}){
    try{
        const data = yield call(fetchRegisterData, payload)
        if(data.success)
            yield put(fetchRegisterSuccess(data))
        else yield put(fetchRegisterFailure(data))
    }catch(error){
        yield put(fetchRegisterFailure(error))
    }
}

export function* registerSagaRequest(){
    yield takeEvery(fetchRegisterRequest.toString(), registerRequest)
}