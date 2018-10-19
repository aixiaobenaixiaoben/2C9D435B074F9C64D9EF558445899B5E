/** @flow */
import {combineReducers} from "redux"

import app from "./Main"
import feedback from "./Feedback"

export default combineReducers({
  app,
  feedback,
})