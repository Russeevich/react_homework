import reducer from './reducer'
import * as types from './actions'

describe('auth reducer', () => {
    const email = '123',
          password = '123',
          name = '123',
          surname = '123',
          token = 'ascjajkncasmkclk',
          status = true,
          err = 'Сообщение об ошибке';

    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
          auth: {},
          authStatus: {},
          error: {},
          isLoggedIn: false
        })
    })

    it('should handle FETCH_LOGIN_REQUEST', () => {
        expect(
          reducer({}, types.fetchLoginRequest({email, password}))
        ).toEqual({
            auth: {email, password},
            authStatus:{},
            error: {},
            isLoggedIn: false
        })
    })

    it('should handle FETCH_LOGIN_SUCCESS', () => {
        expect(
          reducer({
              auth: {email, password}
          }, types.fetchLoginSuccess({success: status, token}))
        ).toEqual({
            auth: {email, password},
            authStatus:{success: status, token},
            error: {},
            isLoggedIn: true
        })
    })

    it('should handle FETCH_LOGIN_FAILURE', () => {
        expect(
          reducer({
              auth: {email, password}
          }, types.fetchLoginFailure({success: !status, error: err}))
        ).toEqual({
            auth: {},
            authStatus:{},
            error: {
                error: err,
                success: !status
            },
            isLoggedIn: false
        })
    })

    it('should handle FETCH_REGISTER_REQUEST', () => {
        expect(
          reducer({}, types.fetchRegisterRequest({email, password, name, surname}))
        ).toEqual({
            auth: {email, password, name, surname},
            authStatus:{},
            error: {},
            isLoggedIn: false
        })
    })

    it('should handle FETCH_REGISTER_SUCCESS', () => {
        expect(
          reducer({
            auth: {email, password, name, surname}
          }, types.fetchRegisterSuccess({success: status, token}))
        ).toEqual({
            auth: {email, password, name, surname},
            authStatus:{success: status, token},
            error: {},
            isLoggedIn: true
        })
    })

    it('should handle FETCH_REGISTER_FAILURE', () => {
        expect(
          reducer({
              auth: {email, password, name, surname}
          }, types.fetchRegisterFailure({success: !status, error: err}))
        ).toEqual({
            auth: {},
            authStatus:{},
            error: {
                error: err,
                success: !status
            },
            isLoggedIn: false
        })
    })

})