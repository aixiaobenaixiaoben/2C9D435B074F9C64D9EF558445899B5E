/** @flow */
import Request from "axios/index"
import {Modal} from "antd"
import type {ActionAsync} from "../Constants"
import {ACTION_HOME_SUC, URL_APP_INFO} from "../Constants"


export const request = (): ActionAsync => {
  return (dispatch) => {
    Request.post(URL_APP_INFO).then(response => {
      const {RTNCOD, RTNDTA, ERRMSG} = response.data
      if (RTNCOD !== 'SUC') {
        Modal.error({title: ERRMSG})
        return
      }
      const {APP_UPDATE_URL} = RTNDTA
      dispatch({
        type: ACTION_HOME_SUC,
        payload: {
          downloadUrl: APP_UPDATE_URL,
        }
      })
    }).catch(error => Modal.error({title: error.message}))
  }
}

