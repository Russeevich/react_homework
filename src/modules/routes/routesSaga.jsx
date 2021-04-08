import { call, put, takeEvery } from "@redux-saga/core/effects";
import { fetchRoutesFailure, fetchRoutesRequest, fetchRoutesSuccess } from "./actions";

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

export function* routesSagaRequest(){
    yield takeEvery(fetchRoutesRequest.toString(), routesRequestFetch)
}