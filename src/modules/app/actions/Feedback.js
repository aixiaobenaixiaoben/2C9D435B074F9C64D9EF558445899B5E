/** @flow */
import Request from "axios/index"
import {Modal} from "antd"
import qs from "qs"
import type {Action, ActionAsync} from "../Constants"
import {
  ACTION_FEEDBACK_CAPTCHA_COUNT,
  ACTION_FEEDBACK_CAPTCHA_SEND,
  ACTION_FEEDBACK_FAIL,
  ACTION_FEEDBACK_RESET,
  ACTION_FEEDBACK_SUC,
  DURATION_MOBILE_CODE_EXPIRED,
  URL_FEEDBACK,
  URL_FEEDBACK_SEND_CODE
} from "../Constants"


export const feedbackCaptchaSend = (data: Object): ActionAsync => {
  return (dispatch) => {
    const param = {
      sfbusrseq: data.mobile,
    }
    Request.post(URL_FEEDBACK_SEND_CODE, qs.stringify(param)).then(response => {
      const {RTNCOD, ERRMSG} = response.data
      if (RTNCOD !== 'SUC') {
        Modal.error({title: ERRMSG})
        return
      }
      dispatch({type: ACTION_FEEDBACK_CAPTCHA_SEND, payload: data})
      let count = DURATION_MOBILE_CODE_EXPIRED
      let timer = setInterval(() => {
        dispatch({type: ACTION_FEEDBACK_CAPTCHA_COUNT})
        count = count - 1
        if (count === 0) {
          clearInterval(timer)
        }
      }, 1000)
    }).catch(error => Modal.error({title: error.message}))
  }
}

export const feedback = (data: Object): ActionAsync => {
  return (dispatch) => {
    const {mobile, feedback, captcha} = data
    const param = {
      sfbusrseq: mobile,
      sfbcommnt: feedback,
      sfbphotos: captcha,
    }
    Request.post(URL_FEEDBACK, qs.stringify(param)).then(response => {
      const {RTNCOD, ERRMSG} = response.data
      if (RTNCOD !== 'SUC') {
        Modal.error({title: ERRMSG})
        dispatch({type: ACTION_FEEDBACK_FAIL})
        return
      }
      dispatch({type: ACTION_FEEDBACK_SUC})

    }).catch(error => Modal.error({title: error.message}))
  }
}

export const feedbackReset = (): Action => {
  return {
    type: ACTION_FEEDBACK_RESET,
  }
}
