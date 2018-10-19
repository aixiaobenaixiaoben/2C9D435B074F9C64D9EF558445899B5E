/** @flow */
import React, {Component} from "react"
import {Layout, Menu} from 'antd'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './styles/Main.less'
import Home from "./Home"
import Feedback from "./Feedback"
import About from "./About"
import NotFound from "./NotFound"
import logo from '../../../logo.svg'

const {Header, Content, Footer} = Layout

class Main extends Component<any, any> {

  render() {
    const {pathname} = this.props.location
    let menuIndex = ''
    if (pathname === '/') {
      menuIndex = '1'
    } else if (pathname === '/feedback') {
      menuIndex = '2'
    } else if (pathname === '/about') {
      menuIndex = '3'
    }

    return (
      <Router>
        <Layout>

          <Header className="header">
            <a href="/">
              <img src={logo} className="App-logo" alt="logo"/>
              <p className='brand'>回忆未来</p>
            </a>

            <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={[menuIndex]}>
              <Menu.Item key="1">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/feedback">反馈</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content className='content'>
            <div className='content-div'>

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/feedback" component={Feedback}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
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

