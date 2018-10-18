/** @flow */
import React, {Component} from "react"
import {Button, Layout, Menu} from 'antd'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import {Dispatch} from "redux"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import * as actions from "../actions/Main"
import './styles/Main.less'
import Home from "./Home"
import Feedback from "./Feedback"
import About from "./About"
import NotFound from "./NotFound"
import logo from '../../../logo.svg'

const {Header, Content, Footer} = Layout

class Main extends Component<any, any> {

  onPress = () => {
    this.props.setName(new Date().toLocaleString('zh-CN', {hour12: false}))
  }

  render() {
    const {name, location} = this.props
    const {pathname} = location
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
            <img src={logo} className="App-logo" alt="logo"/>
            <p className='brand'>回忆未来</p>

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

              <p>variable: {name}</p>
              <Button type='primary' size='large' onClick={this.onPress}>button</Button>

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

Main.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    name: state.app.app.name,
  }),
  (dispatch: Dispatch<*>) => ({
    setName: (name) => dispatch(actions.setName(name)),
  })
)(Main)

