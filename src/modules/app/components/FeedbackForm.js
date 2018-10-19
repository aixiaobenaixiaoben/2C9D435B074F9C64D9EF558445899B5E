/** @flow */
import React, {Component} from "react"
import {Button, Col, Form, Input, Row, Select} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const TextArea = Input.TextArea

class FeedbackForm extends Component<any, any> {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.form.resetFields()
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    }
    const tailFormItemLayout = {
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{width: 70}}>
        <Option value="86">+86</Option>
      </Select>
    )

    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem {...formItemLayout} label="你的建议">
          {getFieldDecorator('feedback', {
            rules: [{max: 128, message: '建议太长啦!'}, {required: true, message: '请输入建议!'}],
          })(
            <TextArea row={4}/>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="你的手机号码">
          {getFieldDecorator('mobile', {
            rules: [{pattern: /^[0-9]{11}$/, message: '手机号码格式不正确!'}, {required: true, message: '请输入手机号码!'}],
          })(
            <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="验证码" extra="我们需要确认是你本人在操作.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{pattern: /^[0-9]{6}$/, message: '验证码格式不正确!'}, {required: true, message: '请输入你的手机收到的验证码!'}],
              })(
                <Input/>
              )}
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    )
  }
}


export default FeedbackForm