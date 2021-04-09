import { take, call, put } from "@redux-saga/core/effects";
import { fetchLoginRequest, fetchLoginSuccess} from './actions';
import { recordSaga } from './recordSaga';
import { loginRequest} from './authSaga';

jest.mock('./api.jsx', () => ({ 
    fetchLoginData: jest.fn(() => Promise.resolve({success: true, token:'123'}))}))

test( "should dispatch TODO_ADDED action when adding new todo is successful" , async () => {
    const dispatched = await recordSaga(
        loginRequest,
        fetchLoginRequest({email: '123', password: '123'})
    )

    expect(dispatched).toEqual([
        {
            type: fetchLoginSuccess.toString()
        }
    ])
})