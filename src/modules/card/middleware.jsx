import {
    fetchCardRequest,
    fetchCardSuccess,
    fetchCardFailure,
    getCardRequest,
    getCardSuccess,
    getCardFailure
} from './actions';


const url = 'https://loft-taxi.glitch.me'


const cardRequestFetch = (store, action) =>{
    fetch(url + '/card', 
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        })
        .then(resp => resp.json())
        .then(data =>{
            if(data.success)
                store.dispatch(fetchCardSuccess(data))
            else store.dispatch(fetchCardFailure(data))
        })
        .catch(err =>{
            store.dispatch(fetchCardFailure(err))
        })
}

const cardRequestGet = (store, action) =>{
    fetch(url + '/card?' +  new URLSearchParams(action.payload), 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data =>{
        if(data.cardName){
            delete data.id
            store.dispatch(getCardSuccess(data))
        }
        else store.dispatch(getCardFailure(data))
    })
    .catch(err =>{
        store.dispatch(getCardFailure(err))
    })
}



export const CardMiddleware = store => next => action =>{
    switch(action.type){
        case fetchCardRequest.toString():
            cardRequestFetch(store, action)
        break
        case getCardRequest.toString():
            cardRequestGet(store, action)
        break
        default:
            next(action)
    }
    next(action)
}