import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
    fetchLoginFailure,
    fetchLoginRequest,
    fetchLoginSuccess,
    fetchRegisterRequest,
    fetchRegisterSuccess,
    fetchRegisterFailure
} from './actions';
import { fetchRegisterData, fetchLoginData } from './api';

export function* loginRequest({payload}){
    if(!payload)
        return
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