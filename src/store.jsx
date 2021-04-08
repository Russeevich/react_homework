import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import authReducer from './modules/auth/reducer'
import cardReducer from './modules/card/reducer'
import routesReducer from './modules/routes/reducer'
import rootSaga from './rootSaga'

const rootReducer = combineReducers({
    authReducer,
    cardReducer,
    routesReducer
})

const saga = createSagaMiddleware()

const initialStore = JSON.parse(localStorage.getItem('store')) || {}

export const store = createStore(
    rootReducer,
    initialStore,
    compose(
        applyMiddleware(saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

saga.run(rootSaga)

store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()))
})