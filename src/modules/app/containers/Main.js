/** @flow */
import React, {Component} from "react"
import {Button, Layout, Menu} from 'antd'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import {Dispatch} from "redux"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import * as actions from "../actions/Main"
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

  onPress = () => {
    this.props.setName(new Date().toLocaleString('zh-CN', {hour12: false}))
  }

  render() {
    const {name} = this.props

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

