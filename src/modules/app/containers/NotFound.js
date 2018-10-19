/** @flow */
import React, {Component} from "react"
import './styles/NotFound.less'

class NotFound extends Component<any, any> {

  render() {
    return (
      <div className='notMatch'>
        <p className='text'>404</p>
        <p>你要找的页面不存在</p>
        <a href="/">返回首页</a>
      </div>
    )
  }
}

export default NotFound