/** @flow */
/** name of this modules */
export const NAME = 'app'

/** action return type */
export type Action = {
  type: string,
  payload?: Object,
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

/** 验证码失效时间(s) */
export const DURATION_MOBILE_CODE_EXPIRED = 120

/** action types */
export const ACTION_HOME_SUC = `${NAME}/ACTION_HOME_SUC`

export const ACTION_ABOUT_SUC = `${NAME}/ACTION_ABOUT_SUC`

export const ACTION_FEEDBACK_CAPTCHA_SEND = `${NAME}/ACTION_FEEDBACK_CAPTCHA_SEND`
export const ACTION_FEEDBACK_CAPTCHA_COUNT = `${NAME}/ACTION_FEEDBACK_CAPTCHA_COUNT`
export const ACTION_FEEDBACK_SUC = `${NAME}/ACTION_FEEDBACK_SUC`
export const ACTION_FEEDBACK_FAIL = `${NAME}/ACTION_FEEDBACK_FAIL`
export const ACTION_FEEDBACK_RESET = `${NAME}/ACTION_FEEDBACK_RESET`

/** URL type */
export const URL_APP_INFO = '/index/appInfo'
export const URL_AUTHOR_INFO = '/index/authorInfo'
export const URL_FEEDBACK = '/index/webFeedback'
export const URL_FEEDBACK_SEND_CODE = '/index/webFeedbackSendCode'
