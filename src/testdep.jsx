import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import authReducer from './modules/auth/reducer'
import cardReducer from './modules/card/reducer'
import {render as rtlRender} from '@testing-library/react'

const rootReducer = combineReducers({
    authReducer,
    cardReducer
})

function render(
    ui,
    {
      initialState,
      store = createStore(rootReducer, initialState),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export { render }