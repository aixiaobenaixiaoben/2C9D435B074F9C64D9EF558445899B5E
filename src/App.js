/** @flow */
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"
import {LocaleProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Request from "axios/index"

import {app} from './modules'
import createStore from './createStore'
import {BrowserRouter as Router, Route} from "react-router-dom"

Request.defaults.baseURL = 'https://forfreedomandlove.com'

Request.interceptors.request.use(
  function (config) {
    config.url += '.action'
    return config
  }, function (error) {
    return Promise.reject(error)
  })

Request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.message.indexOf('Network Error') !== -1) {
      error.message = '网络错误'
    }
    return Promise.reject(error)
  }
)

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