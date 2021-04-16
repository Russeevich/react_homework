import { recordSaga } from '../../recordSaga';
import { cardRequestFetch, cardRequestGet } from './cardSaga';
import { fetchCardRequest, fetchCardSuccess, getCardRequest, getCardSuccess } from './actions';


const cardInfo = {"id":"rec4NwqbXyWY2Ju7E","cardNumber":"123","expiryDate":"123","cardName":"123","cvc":"123"}

jest.mock('./api.jsx', () => ({
    fetchCardData: () => Promise.resolve({success:true}),
    getCardData: () => Promise.resolve({...cardInfo})
}))

test( "cardRequestFetch" , async () => {
    const dispatched = await recordSaga(
        cardRequestFetch,
        fetchCardRequest({cardInfo})
    )

    expect(dispatched).toEqual([
        {
            type: fetchCardSuccess.toString(),
            payload: {
                success: true
            }
        }
    ])
})

test( "cardRequestGet" , async () => {
    const dispatched = await recordSaga(
        cardRequestGet,
        getCardRequest({token: '123'})
    )

    delete cardInfo.id

    expect(dispatched).toEqual([
        {
            type: getCardSuccess.toString(),
            payload:cardInfo
        }
    ])
})