/** @flow */
import type {Action} from "../Constant"
import {ACTION_HOME} from "../Constant"


export const setName = (name: string): Action => {
  return {
    type: ACTION_HOME,
    payload: {name},
  }
}