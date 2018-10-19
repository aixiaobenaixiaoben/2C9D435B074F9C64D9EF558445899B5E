/** @flow */
import React, {Component} from "react"
import {Form} from 'antd'
import FeedbackForm from "../components/FeedbackForm"

const WrappedFeedbackForm = Form.create()(FeedbackForm)

class Feedback extends Component<any, any> {

  render() {
    return (
      <WrappedFeedbackForm/>
    )
  }
}

export default Feedback