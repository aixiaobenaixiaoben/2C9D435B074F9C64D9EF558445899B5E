/** @flow */
import {combineReducers} from "redux"

import app from "./Main"
import home from "./Home"
import about from "./About"
import feedback from "./Feedback"

export default combineReducers({
  app,
  home,
  about,
  feedback,
})