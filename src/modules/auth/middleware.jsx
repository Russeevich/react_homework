import {
    fetchLoginFailure,
    fetchLoginRequest,
    fetchLoginSuccess,
    fetchRegisterRequest,
    fetchRegisterSuccess,
    fetchRegisterFailure
} from './actions';

const url = 'https://loft-taxi.glitch.me'

const loginRequest = (store, action) =>{
    fetch(url + '/auth', 
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
                store.dispatch(fetchLoginSuccess(data))
            else store.dispatch(fetchLoginFailure(data))
        })
        .catch(err =>{
            store.dispatch(fetchLoginFailure(err))
        })
}

const registerRequest = (store, action) =>{
    fetch(url + '/register', 
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
            store.dispatch(fetchRegisterSuccess(data))
        else store.dispatch(fetchRegisterFailure(data))
    })
    .catch(err =>{
        store.dispatch(fetchRegisterFailure(err))
    })
}


export const AuthMiddleware = store => next => action =>{
    switch(action.type){
        case fetchLoginRequest.toString():
            loginRequest(store, action)
        break
        case fetchRegisterRequest.toString():
            registerRequest(store, action)
            break
        default:
            next(action)
    }
    next(action)
}