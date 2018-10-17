/** @flow */
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"

import {app} from './modules'
import createStore from './createStore'

const {store, persistor} = createStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <app.AppMain/>
      </PersistGate>
    </Provider>
  )
}

export default App