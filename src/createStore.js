/** @flow */
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'

import {app} from './modules'

const persistConfig = {
  key: 'root',
  storage,
}

const middleware = applyMiddleware(thunk)

export default (data: Object = {}) => {
  const rootReducer = combineReducers({
    [app.NAME]: app.reducer
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  let store = createStore(persistedReducer, data, middleware)
  let persistor = persistStore(store)

  return {store, persistor}
}