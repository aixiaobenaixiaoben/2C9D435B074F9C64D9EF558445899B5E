/** @flow */
import React, {Component} from "react"
import QRCode from "qrcode.react"
import {PRIMARY_COLOR} from "../../../Style"


class Home extends Component<any, any> {

  render() {
    const url = 'https://itunes.apple.com/cn/app/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90-%E9%9F%B3%E4%B9%90%E7%9A%84%E5%8A%9B%E9%87%8F/id590338362?l=en&mt=8'
    return (
      <div>
        <QRCode value={url} size={256} fgColor={PRIMARY_COLOR}/>
        <p>Home</p>
      </div>
    )
  }
}

export default Home