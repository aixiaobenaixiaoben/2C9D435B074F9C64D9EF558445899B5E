/** @flow */
import React, {Component} from "react"
import QRCode from "qrcode.react"
import {PRIMARY_COLOR} from "../../../Style"
import './styles/About.less'

class About extends Component<any, any> {

  render() {
    const url = 'https://u.wechat.com/EDmUsSmpQ0_l0SYTSlKY75c'
    const email = '357620917@qq.com'

    return (
      <div className='about'>
        <QRCode value={url} size={256} fgColor={PRIMARY_COLOR}/>
        <p>作者的微信二维码</p>
        <br/>
        <p>作者的邮箱：{email}</p>
      </div>
    )
  }
}

export default About