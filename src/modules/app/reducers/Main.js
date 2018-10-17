/** @flow */
import {handleActions} from "redux-actions"
import {ACTION_HOME} from "../Constant"


type State = {
  name: string,
}

const initialState: State = {
  name: 'hello react',
}

export default handleActions(
  {
    [ACTION_HOME]: (state: State, action) => {
      return {...state, name: action.payload.name}
    },
  },
  initialState)
