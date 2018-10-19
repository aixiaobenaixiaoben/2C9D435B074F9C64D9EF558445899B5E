/** @flow */
import {handleActions} from "redux-actions"
import {ACTION_HOME_SUC} from "../Constants"


type State = {
  downloadUrl: string,
}

const initialState: State = {
  downloadUrl: '',
}

export default handleActions(
  {
    [ACTION_HOME_SUC]: (state: State, action) => {
      return {
        ...state,
        downloadUrl: action.payload.downloadUrl,
      }
    },
  },
  initialState)
