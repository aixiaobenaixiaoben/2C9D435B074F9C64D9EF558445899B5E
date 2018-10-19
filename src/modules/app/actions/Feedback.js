/** @flow */
import type {Action, ActionAsync} from "../Constants"
import {
  ACTION_FEEDBACK_CAPTCHA_COUNT,
  ACTION_FEEDBACK_CAPTCHA_SEND,
  ACTION_FEEDBACK_RESET,
  ACTION_FEEDBACK_SUC,
  DURATION_MOBILE_CODE_EXPIRED
} from "../Constants"


export const feedbackCaptchaSend = (data: Object): ActionAsync => {
  return (dispatch, getState) => {

    dispatch({type: ACTION_FEEDBACK_CAPTCHA_SEND, payload: data})

    let count = DURATION_MOBILE_CODE_EXPIRED
    let timer = setInterval(() => {
      dispatch({type: ACTION_FEEDBACK_CAPTCHA_COUNT})
      count = count - 1
      if (count === 0) {
        clearInterval(timer)
      }
    }, 1000)
  }
}

export const feedback = (data: Object): ActionAsync => {
  return (dispatch, getState) => {
    dispatch({type: ACTION_FEEDBACK_SUC})
  }
}

export const feedbackReset = (): Action => {
  return {
    type: ACTION_FEEDBACK_RESET,
  }
}
