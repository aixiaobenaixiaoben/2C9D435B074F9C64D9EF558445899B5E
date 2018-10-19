/** @flow */
import type {Action} from "../Constants"
import {ACTION_HOME} from "../Constants"


export const setName = (name: string): Action => {
  return {
    type: ACTION_HOME,
    payload: {name},
  }
}