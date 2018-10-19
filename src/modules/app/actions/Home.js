/** @flow */
import type {ActionAsync} from "../Constants"
import {ACTION_HOME_SUC} from "../Constants"


export const request = (): ActionAsync => {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_HOME_SUC,
      payload: {
        downloadUrl: 'https://itunes.apple.com/cn/app/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90-%E9%9F%B3%E4%B9%90%E7%9A%84%E5%8A%9B%E9%87%8F/id590338362?l=en&mt=8',
      }
    })
  }
}

