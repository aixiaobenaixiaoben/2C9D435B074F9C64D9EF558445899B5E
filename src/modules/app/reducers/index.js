/** @flow */
import {combineReducers} from "redux"

import home from "./Home"
import about from "./About"
import feedback from "./Feedback"

export default combineReducers({
  home,
  about,
  feedback,
})