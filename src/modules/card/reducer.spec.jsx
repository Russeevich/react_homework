import reducer from './reducer'
import * as types from './actions'

describe('card reducer', () => {
    const token = '123132123asadsads',
          expiryDate = '12/31',
          cardNumber = '0000 0000 0000 0000',
          cvc = '312',
          cardName = 'people',
          status = true

    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
          card:{
              cardName: '',
              cardNumber: '',
              cvc: '',
              expiryDate: ''
          },
          cardStatus: {},
          error: {}
        })
    })

    it('should handle FETCH_CARD_REQUEST', () => {
        expect(
          reducer({}, types.fetchCardRequest({expiryDate, cardNumber, cardName, cvc}))
        ).toEqual({
            card: {expiryDate, cardNumber, cardName, cvc},
            cardStatus:{},
            error: {}
        })
    })

    it('should handle FETCH_CARD_SUCCESS', () => {
        expect(
          reducer({
              card: {expiryDate, cardNumber, cardName, cvc}
            }, types.fetchCardSuccess({success: status}))
        ).toEqual({
            card: {expiryDate, cardNumber, cardName, cvc},
            cardStatus:{success: status},
            error: {}
        })
    })

    it('should handle FETCH_CARD_FAILURE', () => {
        expect(
          reducer({
              card: {expiryDate, cardNumber, cardName, cvc}
            }, types.fetchCardFailure({success: !status}))
        ).toEqual({
            card: {
                cardName: '',
                cardNumber: '',
                cvc: '',
                expiryDate: ''
            },
            cardStatus:{},
            error: {success: !status}
        })
    })

    it('should handle GET_CARD_REQUEST', () => {
        expect(
          reducer({}, types.getCardRequest({token}))
        ).toEqual({
            card: {
                cardName: '',
                cardNumber: '',
                cvc: '',
                expiryDate: ''
            },
            cardStatus:{},
            error: {}
        })
    })

    it('should handle GET_CARD_SUCCESS', () => {
        expect(
          reducer({}, types.getCardSuccess({expiryDate, cardNumber, cardName, cvc}))
        ).toEqual({
            card: {expiryDate, cardNumber, cardName, cvc},
            cardStatus:{},
            error: {}
        })
    })


    it('should handle GET_CARD_FAILURE', () => {
        expect(
          reducer({
              card: {expiryDate, cardNumber, cardName, cvc}
            }, types.getCardFailure({token}))
        ).toEqual({
            card: {expiryDate, cardNumber, cardName, cvc},
            cardStatus:{},
            error: {token}
        })
    })
    
})