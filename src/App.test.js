import { fireEvent, render, screen } from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import App from './App'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}))

describe('App test', () =>{
  
  const mail = 'test@test.com',
        password = '123123'
  
  it('change email', () => {
    render(<App/>)
    const email = screen.getByPlaceholderText('mail@mail.ru')
  
    fireEvent.change(email, {
      target: {
        value: mail
      }
    })
  
    expect(email).toHaveValue(mail)
  })

  it('change password', () => {
    render(<App/>)
    const pass = screen.getByPlaceholderText('************')
  
    fireEvent.change(pass, {
      target: {
        value: password
      }
    })
  
    expect(pass).toHaveValue(password)
  })

  // it('change to map', () =>{
  //   render(<App/>)
  //   const email = screen.getByPlaceholderText('mail@mail.ru'),
  //         pass = screen.getByPlaceholderText('************'),
  //         btn = screen.getByRole('button' , {
  //           type: /submit/i
  //         })
  
  //   fireEvent.change(email, {
  //     target: {
  //       value: mail
  //     }
  //   })

  //   fireEvent.change(pass, {
  //     target: {
  //       value: password
  //     }
  //   })
  
  //   expect(email).toHaveValue(mail)
  //   expect(pass).toHaveValue(password)
    
  //   act(() =>{
  //     fireEvent.click(btn)
  //   })

  // })
})