/** @flow */
import {handleActions} from "redux-actions"
import {ACTION_ABOUT_SUC} from "../Constants"


type State = {
  wechat: string,
  email: string,
}

const initialState: State = {
  wechat: '',
  email: '',
}

export default handleActions(
  {
    [ACTION_ABOUT_SUC]: (state: State, action) => {
      const {wechat, email} = action.payload
      return {
        ...state,
        wechat,
        email,
      }
    },
  },
  initialState)
