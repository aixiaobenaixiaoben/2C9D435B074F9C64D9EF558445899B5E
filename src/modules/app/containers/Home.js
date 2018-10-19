/** @flow */
import React, {Component} from "react"
import QRCode from "qrcode.react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import * as actions from "../actions/Home"
import {PRIMARY_COLOR} from "../../../Style"
import './styles/Home.less'


class Home extends Component<any, any> {

  componentWillMount() {
    this.props.request()
  }

  render() {
    const {downloadUrl} = this.props
    return (
      <div className='home'>
        {downloadUrl.length > 0 &&
        <>
          <QRCode value={downloadUrl} size={256} fgColor={PRIMARY_COLOR}/>
          <p>iOS版本下载</p>
          <br/>
        </>
        }

        <p>回忆未来是一个工具类app</p>
        <p>她是一个日记本</p>
        <p>也是一个日程规划工具</p>
        <p>最重要的是</p>
        <p>她可以将你的记录在你的任何手机上同步</p>
      </div>
    )
  }
}

Home.propTypes = {
  downloadUrl: PropTypes.string.isRequired,
  request: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    downloadUrl: state.app.home.downloadUrl,
  }),
  dispatch => ({
    request: () => dispatch(actions.request()),
  })
)(Home)
