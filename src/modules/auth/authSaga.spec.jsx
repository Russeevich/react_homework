import { fetchLoginRequest, fetchLoginSuccess, fetchRegisterRequest, fetchRegisterSuccess } from './actions';
import { recordSaga } from '../../recordSaga';
import { loginRequest, registerRequest } from './authSaga';



jest.mock('./api.jsx', () => ({
    fetchLoginData: () => Promise.resolve({success: true, token:'123'}),
    fetchRegisterData: () => Promise.resolve({success: true, token:'1234'})
}))

test( "loginRequest" , async () => {
    const dispatched = await recordSaga(
        loginRequest,
        fetchLoginRequest({email: '123', password: '123'})
    )

    expect(dispatched).toEqual([
        {
            type: fetchLoginSuccess.toString(),
            payload:{
                success: true,
                token: "123"
            }
        }
    ])
})

test( "registerRequest" , async () => {
    const dispatched = await recordSaga(
        registerRequest,
        fetchRegisterRequest({email: '123', password: '123'})
    )

    expect(dispatched).toEqual([
        {
            type: fetchRegisterSuccess.toString(),
            payload:{
                success: true,
                token: "1234"
            }
        }
    ])
})

