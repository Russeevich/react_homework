import reducer from './reducer'
import * as types from './actions'

describe('routes reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
          points: [],
          routes: {},
          error: {}
        })
    })

    it('should handle FETCH_ROUTES_SUCCESS', () => {
        expect(
          reducer({}, types.fetchRoutesSuccess({addresses:['123','321']}))
        ).toEqual({
            points:[],
            routes: {
                addresses:[
                    '123',
                    '321'
                ]
            },
            error: {}
        })
    })

    it('should handle GET_ROUTES_SUCCESS', () => {
        expect(
          reducer({}, types.getRoutesSuccess([[123,3123],[123,3213]]))
        ).toEqual({
            points:[[123,3123],[123,3213]],
            routes: {},
            error: {}
        })
    })


    
})