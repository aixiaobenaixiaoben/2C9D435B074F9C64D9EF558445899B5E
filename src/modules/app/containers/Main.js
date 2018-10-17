/** @flow */
import React, {Component} from "react"
import {Layout, Menu} from 'antd'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './styles/Main.less'

const {Header, Content, Footer} = Layout

const home = () => {
  return (
    <p>home</p>
  )
}

const about = () => {
  return (
    <p>about</p>
  )
}

const topic = () => {
  return (
    <p>topic</p>
  )
}

const noMatch = () => {
  return (
    <p>404 not found</p>
  )
}

class Main extends Component {

  render() {
    return (
      <Router>
        <Layout>

          <Header className="header">
            <div className="logo"/>

            <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">反馈</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/topics">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content className='content'>
            <div className='content-div'>

              <Switch>
                <Route exact path="/" component={home}/>
                <Route path="/about" component={about}/>
                <Route path="/topics" component={topic}/>
                <Route component={noMatch}/>
              </Switch>

            </div>
          </Content>

          <Footer className='footer'>
            Ant Design ©2018 Created by LI RUIFENG
          </Footer>

        </Layout>
      </Router>
    )
  }
}

export default Main

