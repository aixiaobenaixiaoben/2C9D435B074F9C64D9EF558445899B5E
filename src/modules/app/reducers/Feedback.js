/** @flow */
import {handleActions} from "redux-actions"
import {
  ACTION_FEEDBACK_CAPTCHA_COUNT,
  ACTION_FEEDBACK_CAPTCHA_SEND,
  ACTION_FEEDBACK_RESET,
  ACTION_FEEDBACK_SUC,
  DURATION_MOBILE_CODE_EXPIRED
} from "../Constants"


type State = {
  isFeedbackSuc: boolean,
  mobile: string,
  count: number,
}

const initialState: State = {
  isFeedbackSuc: false,
  mobile: '',
  count: -1,
}

export default handleActions(
  {
    [ACTION_FEEDBACK_CAPTCHA_SEND]: (state: State, action) => {
      return {
        ...state,
        mobile: action.payload.mobile,
        count: DURATION_MOBILE_CODE_EXPIRED,
      }
    },
    [ACTION_FEEDBACK_CAPTCHA_COUNT]: (state: State, action) => {
      let {count} = state
      return {
        ...state,
        count: count > 0 ? count - 1 : count,
      }
    },
    [ACTION_FEEDBACK_SUC]: (state: State, action) => {
      return {
        ...state,
        isFeedbackSuc: true,
      }
    },
    [ACTION_FEEDBACK_RESET]: (state: State, action) => {
      return {
        ...state,
        isFeedbackSuc: false,
        mobile: '',
        count: -1,
      }
    },
  },
  initialState)
