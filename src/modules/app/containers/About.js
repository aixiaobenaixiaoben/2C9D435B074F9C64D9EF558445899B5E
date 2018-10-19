/** @flow */
import React, {Component} from "react"
import QRCode from "qrcode.react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import * as actions from "../actions/About"
import {PRIMARY_COLOR} from "../../../Style"
import './styles/About.less'

class About extends Component<any, any> {

  componentWillMount() {
    this.props.request()
  }

  render() {
    const {wechat, email} = this.props
    return (
      <div className='about'>
        {wechat.length > 0 &&
        <>
          <QRCode value={wechat} size={256} fgColor={PRIMARY_COLOR}/>
          <p>作者的微信二维码</p>
          <br/>
        </>
        }
        <p>作者的邮箱：{email}</p>
      </div>
    )
  }
}

About.propTypes = {
  wechat: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  request: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    wechat: state.app.about.wechat,
    email: state.app.about.email,
  }),
  dispatch => ({
    request: () => dispatch(actions.request()),
  })
)(About)