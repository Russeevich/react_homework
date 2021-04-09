import {fork, all} from 'redux-saga/effects'
import {loginSagaRequest, registerSagaRequest} from './modules/auth/authSaga'
import {getCardSagaRequest, fetchCardSagaRequest} from './modules/card/cardSaga'
import {getRoutesSagaRequest, fetchRoutesSagaRequest} from './modules/routes/routesSaga'

export default function* rootSaga() {
    yield all([
        loginSagaRequest,
        registerSagaRequest,
        getCardSagaRequest,
        fetchCardSagaRequest,
        getRoutesSagaRequest,
        fetchRoutesSagaRequest
    ].map(fork))
}