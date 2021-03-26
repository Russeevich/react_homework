import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import { Profile } from './profile'

describe('profile check', () =>{
    const number = '1231231212312314',
        date = '02/02' 

    it('profile change cardnumber', () =>{
        render(<Profile/>)
        const cardnumber = screen.getByPlaceholderText('0000 0000 0000 0000')

        fireEvent.input(cardnumber, {
            target: {
            value: number
        }})


        expect(cardnumber).toHaveValue(number)
    })

    it('profile change date', () =>{
        render(<Profile/>)
        const carddate = screen.getByPlaceholderText('01/01')

        fireEvent.change(carddate, {
            target: {
            value: date
        }})

        expect(carddate).toHaveValue(date)
    })
})