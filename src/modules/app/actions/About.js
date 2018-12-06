/** @flow */
import Request from "axios/index"
import {Modal} from "antd"
import type {ActionAsync} from "../Constants"
import {ACTION_ABOUT_SUC, URL_AUTHOR_INFO} from "../Constants"


export const request = (): ActionAsync => {
  return (dispatch) => {
    Request.post(URL_AUTHOR_INFO).then(response => {
      const {RTNCOD, RTNDTA, ERRMSG} = response.data
      if (RTNCOD !== 'SUC') {
        Modal.error({title: ERRMSG})
        return
      }
      const {AUTHOR_WECHAT, AUTHOR_EMAIL} = RTNDTA
      dispatch({
        type: ACTION_ABOUT_SUC,
        payload: {
          wechat: AUTHOR_WECHAT,
          email: AUTHOR_EMAIL,
        }
      })
    }).catch(error => Modal.error({title: error.message}))
  }
}

