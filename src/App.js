/** @flow */
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"
import {LocaleProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

import {app} from './modules'
import createStore from './createStore'
import {BrowserRouter as Router, Route} from "react-router-dom"

const {store, persistor} = createStore()

const App = () => {
  return (
    <LocaleProvider locale={zh_CN}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Route component={(props) => <app.AppMain {...props}/>}/>
          </Router>
        </PersistGate>
      </Provider>
    </LocaleProvider>
  )
}

export default App