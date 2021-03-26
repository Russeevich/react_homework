import { useState } from 'react'
import { AuthContext } from './authContext';

export const AuthState = ({ children }) => {

    const initialState = {
        email: null,
        password: null,
        isLoggedIn: false
    },
    [auth, setAuth] = useState(initialState)


    const login = (email, password) => {
        setAuth({email, password, isLoggedIn: true})
    }

    const logout = () =>{
        setAuth(initialState)
    }

    return ( 
    <AuthContext.Provider value = {{ auth, login, logout }}> 
        { children } 
    </AuthContext.Provider>
    )
}