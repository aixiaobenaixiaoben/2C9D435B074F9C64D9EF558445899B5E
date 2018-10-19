/** @flow */
import type {ActionAsync} from "../Constants"
import {ACTION_ABOUT_SUC} from "../Constants"


export const request = (): ActionAsync => {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_ABOUT_SUC,
      payload: {
        wechat: 'https://u.wechat.com/EDmUsSmpQ0_l0SYTSlKY75c',
        email: '357620917@qq.com',
      }
    })
  }
}

