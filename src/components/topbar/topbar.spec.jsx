import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import TopBar from './topbar';
import { AuthState } from '../context/auth/authState';
import { AuthContext } from '../context/auth/authContext';
import App from '../../App';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}))

describe('topbar', () =>{
    const checkemail = 'asdasdads',
    checkpassword = 'asdasdasasdasads'


    it('topbar logout', () =>{
        let isLoggedIn,
        login,
        props = {
            setPath: jest.fn(),
            path: 'profile'
        }

        render(
                <AuthState>
                    <AuthContext.Consumer>
                    {
                        (value) =>{
                            isLoggedIn = value.auth.isLoggedIn
                            login = value.login
                            return <TopBar props={{...props}}/>
                        }
                    }
                    </AuthContext.Consumer>
                </AuthState>
        )
        const logout = screen.getByTestId('logout')

        act(() =>{
            login(checkemail, checkpassword)
        })

        expect(isLoggedIn).toBe(true)

        act(() =>{
            fireEvent.click(logout)
        })
        
        expect(isLoggedIn).toBe(false)
    })
})