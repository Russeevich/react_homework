import React from 'react'
import { AuthContext } from './authContext'
import {render} from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import { AuthState } from './authState';

describe('authContext', () =>{
    describe('Login', () =>{
        const checkemail = 'asdasdads',
              checkpassword = 'asdasdasasdasads'
        it('LoggedIn is true', () =>{
            let isLoggedIn,
                login

            render(
                <AuthState>
                    <AuthContext.Consumer>
                        {
                            (value) =>{
                                isLoggedIn = value.auth.isLoggedIn
                                login = value.login
                                return null
                            }
                        }
                    </AuthContext.Consumer>
                </AuthState>
            )

            expect(isLoggedIn).toBe(false)
            act(() =>{
                login(checkemail, checkpassword)
            })
            expect(isLoggedIn).toBe(true)
        })

        it('test valid password and login', () =>{
            let login,
                email,
                password

            render(
                <AuthState>
                    <AuthContext.Consumer>
                        {
                            (value) =>{
                                email = value.auth.email
                                password = value.auth.password
                                login = value.login
                                return null
                            }
                        }
                    </AuthContext.Consumer>
                </AuthState>
            )

            act(() =>{
                login(checkemail, checkpassword)
            })
            expect(email).toBe(checkemail) 
            expect(password).toBe(checkpassword) 
        })

        it('check logout func', () =>{
            let login,
                isLoggedIn,
                logout

            render(
                <AuthState>
                    <AuthContext.Consumer>
                        {
                            (value) =>{
                                isLoggedIn = value.auth.isLoggedIn
                                logout = value.logout
                                login = value.login
                                return null
                            }
                        }
                    </AuthContext.Consumer>
                </AuthState>
            )

            expect(isLoggedIn).toBe(false)

            act(() =>{
                login(checkemail, checkpassword)
            })

            expect(isLoggedIn).toBe(true)

            act(() =>{
                logout()
            })

            expect(isLoggedIn).toBe(false)
            
        })
    })
})