/** @flow */
import {combineReducers} from "redux"

import app from "./Main"
import home from "./Home"
import feedback from "./Feedback"

export default combineReducers({
  app,
  home,
  feedback,
})