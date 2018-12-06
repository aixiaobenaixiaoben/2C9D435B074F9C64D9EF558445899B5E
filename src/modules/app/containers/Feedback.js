/** @flow */
import React, {Component} from "react"
import {Button, Col, Form, Input, Modal, Row, Select} from 'antd'
import * as actions from "../actions/Feedback"
import {connect} from "react-redux"
import PropTypes from "prop-types"

const FormItem = Form.Item
const Option = Select.Option
const TextArea = Input.TextArea

class Feedback extends Component<any, any> {

  state = {
    loading: false,
  }

  componentWillMount() {
    this.props.feedbackReset()
  }

  shouldComponentUpdate(nextProps) {
    if (!this.props.isFeedbackSuc && nextProps.isFeedbackSuc) {
      Modal.success({
        title: '提交成功，感谢你的反馈！',
        onOk: () => {
          this.props.form.resetFields()
          this.setState({loading: false})
          this.props.feedbackReset()
        }
      })
    }
    if (this.props.version !== nextProps.version) {
      this.setState({loading: false})
    }
    return true
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (values.mobile !== this.props.mobile) {
          Modal.error({title: '验证码错误！'})
          return
        }
        this.props.feedback(values)
        this.setState({loading: true})
      }
    })
  }

  formItemLayout = () => {
    return {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    }
  }

  tailFormItemLayout = () => {
    return {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
  }

  sendCaptcha = () => {
    const mobile = this.props.form.getFieldValue('mobile') || ''
    const regular = /^[0-9]{11}$/
    if (!regular.test(mobile)) {
      Modal.error({title: '手机号码格式不正确'})
      return
    }
    this.props.feedbackCaptchaSend({mobile})
  }

  render() {
    const {loading} = this.state
    const {count} = this.props
    const disabled = count > 0
    let captcha = ''
    if (count === -1) {
      captcha = '获取验证码'
    } else if (count === 0) {
      captcha = '重新获取'
    } else {
      captcha = count + '秒后重新获取'
    }

    const {getFieldDecorator} = this.props.form
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{width: 70}}>
        <Option value="86">+86</Option>
      </Select>
    )

    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem {...this.formItemLayout()} label="你的建议">
          {getFieldDecorator('feedback', {
            rules: [{max: 128, message: '建议太长啦!'}, {required: true, message: '请输入建议!'}],
          })(
            <TextArea row={4}/>
          )}
        </FormItem>

        <FormItem {...this.formItemLayout()} label="你的手机号码">
          {getFieldDecorator('mobile', {
            rules: [{pattern: /^[0-9]{11}$/, message: '手机号码格式不正确!'}, {required: true, message: '请输入手机号码!'}],
          })(
            <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
          )}
        </FormItem>

        <FormItem {...this.formItemLayout()} label="验证码" extra="我们需要确认是你本人在操作.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{pattern: /^[0-9]{6}$/, message: '验证码格式不正确!'}, {required: true, message: '请输入你的手机收到的验证码!'}],
              })(
                <Input/>
              )}
            </Col>
            <Col span={12}>
              <Button disabled={disabled} onClick={this.sendCaptcha}>{captcha}</Button>
            </Col>
          </Row>
        </FormItem>

        <FormItem {...this.tailFormItemLayout()}>
          <Row gutter={8}>
            <Col span={12}>
              <Button block type="primary" htmlType="submit" loading={loading}>提交</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    )
  }
}

Feedback.propTypes = {
  isFeedbackSuc: PropTypes.bool.isRequired,
  mobile: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  version: PropTypes.number.isRequired,
  feedbackCaptchaSend: PropTypes.func.isRequired,
  feedback: PropTypes.func.isRequired,
  feedbackReset: PropTypes.func.isRequired,
}

export default Form.create()(
  connect(
    state => ({
      isFeedbackSuc: state.app.feedback.isFeedbackSuc,
      mobile: state.app.feedback.mobile,
      count: state.app.feedback.count,
      version: state.app.feedback.version,
    }),
    dispatch => ({
      feedbackCaptchaSend: (data) => dispatch(actions.feedbackCaptchaSend(data)),
      feedback: (data) => dispatch(actions.feedback(data)),
      feedbackReset: () => dispatch(actions.feedbackReset()),
    })
  )(Feedback)
)
