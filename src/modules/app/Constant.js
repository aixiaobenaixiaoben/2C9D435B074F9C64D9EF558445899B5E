/** @flow */
/** name of this modules */
export const NAME = 'app'

/** action types */
export const ACTION_HOME = `${NAME}/ACTION_HOME`

/** action return type */
export type Action = {
  type: string,
  payload?: Object,
}