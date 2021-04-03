import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import authReducer from './modules/auth/reducer'
import cardReducer from './modules/card/reducer'
import { AuthMiddleware } from './modules/auth/middleware';
import { CardMiddleware } from './modules/card/middleware';

const rootReducer = combineReducers({
    authReducer,
    cardReducer
})

const initialStore = JSON.parse(localStorage.getItem('store')) || {}

export const store = createStore(
    rootReducer,
    initialStore,
    compose(
        applyMiddleware(AuthMiddleware),
        applyMiddleware(CardMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()))
})