import React from 'react'
import {fireEvent, screen} from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import App from './App';
import {render} from './testdep'
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {BrowserRouter} from 'react-router-dom'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn(),
    })),
    NavigationControl: jest.fn(),
}));

const initialState = {
    "authReducer":{
      "auth":{
        "email":"123",
        "password":"123"
      },
      "authStatus":{
        "success":true,
        "token":"recfGA07y57sV41Xs"
      },
      "isLoggedIn":true,
      "error":{}
    },
    "cardReducer":{
      "card":{
        "expiryDate":"",
        "cardNumber":"",
        "cvc":"",
        "cardName":""
      },
      "cardStatus":{},
      "error":{}
    }
}

describe('auth', () =>{
  const pass = '123',
        email = '123',
        name = '12312 123123'
        
    it('login', () =>{
      render(
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
      </BrowserRouter>
    , {initialState: {}})
      const loginInput = screen.getByPlaceholderText('mail@mail.ru'),
            passInput = screen.getByPlaceholderText('************')

      act(() =>{
        fireEvent.change(loginInput, {target: {value: email}})
        fireEvent.change(passInput, {target: {value: pass}})
      })

      expect(loginInput).toHaveValue(email)
      expect(passInput).toHaveValue(pass)

      const btn = screen.getByTestId('register_login')

      act(() =>{
        fireEvent.click(btn)
      })

      setTimeout(()=>{
        const link = screen.getByTestId('map')
  
        expect(link).toBeInTheDocument()
      }, 2000)
    })

    it('register', () =>{
      render(
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
      </BrowserRouter>
    , {initialState: {}})

      const changeForm = screen.getByTestId('register_form')
      
      act(() =>{
        fireEvent.click(changeForm)
      })

      const loginInput = screen.getByPlaceholderText('mail@mail.ru'),
            passInput = screen.getByPlaceholderText('************'),
            nameInput = screen.getByPlaceholderText('Петр Александрович')

      act(() =>{
        fireEvent.change(loginInput, {target: {value: email}})
        fireEvent.change(passInput, {target: {value: pass}})
        fireEvent.change(nameInput, {target: {value: name}})
      })

      expect(loginInput).toHaveValue(email)
      expect(passInput).toHaveValue(pass)
      expect(nameInput).toHaveValue(name)

      const btn = screen.getByTestId('register_login')

      act(() =>{
        fireEvent.click(btn)
      })

      setTimeout(()=>{
        const link = screen.getByTestId('map')
  
        expect(link).toBeInTheDocument()
      }, 2000)
    })
})

describe('topbar', () =>{
    it('topbar logout', () =>{
        render(
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
        , { initialState})
        const logout = screen.getByTestId('logout')
        expect(logout).toBeInTheDocument()

        act(() =>{
            fireEvent.click(logout)
        })

        const btn = screen.getByTestId('register_login')
        expect(btn).toBeInTheDocument()
    })
})