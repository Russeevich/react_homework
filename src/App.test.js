import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}))

describe('App test', () =>{
  render(<App/>)

  const mail = 'test@test.com'

  it('change email', () => {
    const email = screen.getByPlaceholderText('mail@mail.ru')
  
    fireEvent.change(email, {
      target: {
        value: mail
      }
    })
  
    expect(email).toHaveValue(mail)
  })
})