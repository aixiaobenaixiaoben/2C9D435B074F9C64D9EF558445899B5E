/** @flow */
import React, {Component} from "react"
import QRCode from "qrcode.react"
import {PRIMARY_COLOR} from "../../../Style"
import './styles/Home.less'


class Home extends Component<any, any> {

  render() {
    const url = 'https://itunes.apple.com/cn/app/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90-%E9%9F%B3%E4%B9%90%E7%9A%84%E5%8A%9B%E9%87%8F/id590338362?l=en&mt=8'
    return (
      <div className='home'>
        <QRCode value={url} size={256} fgColor={PRIMARY_COLOR}/>
        <p>iOS版本下载</p>
        <br/>
        <p>回忆未来是一个工具类app</p>
        <p>她是一个日记本</p>
        <p>也是一个日程规划工具</p>
        <p>最重要的是</p>
        <p>她可以将你的记录在你的任何手机上同步</p>
      </div>
    )
  }
}

export default Home