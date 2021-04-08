import {fork, all} from 'redux-saga/effects'
import * as authSagas from './modules/auth/authSaga'
import * as cardSagas from './modules/card/cardSaga'
import * as routesSagas from './modules/routes/routesSaga'

export default function* rootSaga() {
    yield all([...Object.values(authSagas), 
               ...Object.values(cardSagas), 
               ...Object.values(routesSagas)].map(fork))
}