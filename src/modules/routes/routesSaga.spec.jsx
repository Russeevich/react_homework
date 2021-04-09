import { recordSaga } from '../../recordSaga';
import { routesRequestFetch, routesRequestGet } from './routesSaga';
import {
    fetchRoutesRequest,
    fetchRoutesSuccess,
    getRoutesRequest,
    getRoutesSuccess
} from './actions';


const addr = ['123', '123']

const coords = [[123,123],[321,321]]

jest.mock('./api.jsx', () => ({
    fetchRoutesData: () => Promise.resolve({addresses: addr}),
    getRoutesData: () => Promise.resolve(coords)
}))

test( "routesRequestFetch" , async () => {
    const dispatched = await recordSaga(
        routesRequestFetch,
        fetchRoutesRequest()
    )

    expect(dispatched).toEqual([
        {
            type: fetchRoutesSuccess.toString(),
            payload:{
                addresses: addr
            }
        }
    ])
})

test( "routesRequestGet" , async () => {
    const dispatched = await recordSaga(
        routesRequestGet,
        getRoutesRequest({address1: addr[0], address2: addr[1]})
    )

    expect(dispatched).toEqual([
        {
            type: getRoutesSuccess.toString(),
            payload: coords
            
        }
    ])
})

