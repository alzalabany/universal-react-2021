import React from 'react'
import { Provider } from 'react-redux'

import store from 'Services/redux'

import App from './src'

export default function RootApp () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
