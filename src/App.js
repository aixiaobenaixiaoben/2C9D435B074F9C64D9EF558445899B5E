/** @flow */
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"

import {app} from './modules'
import createStore from './createStore'
import {BrowserRouter as Router, Route} from "react-router-dom"

const {store, persistor} = createStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route component={(props) => <app.AppMain {...props}/>}/>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App