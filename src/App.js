import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Api from '../src/util/Api'

import './app.css'

import Main from './routes/Main/Main'
import Post from './routes/Post/Post'
import Login from './routes/Login/Login'
import Mypage from './routes/Mypage/Mypage'
import SignUp from './routes/SignUp/SignUp'
import Find from './routes/Find/Find'
import Witness from './routes/Witness/Witness'
import NoMatch from './routes/NoMatch/NoMatch'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { withCookies, Cookies } from 'react-cookie'
import { instanceOf } from 'prop-types'

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      backGround: false,
      modalPage: 1,
      modalData: [],
      modalStatus: false
    }
    const { cookies } = props

    cookies.get('token')
      ? (this.state = { login: true })
      : (this.state = { login: false })

    this.cookieSet = this.cookieSet.bind(this)
    this.logout = this.logout.bind(this)
  }

  modalDataChange = data => {
    this.setState({
      modalData: data,
      modalStatus: true
    })
  }

  componentDidMount = () => {
    if (this.state.login) {
      this._loadUser()
    }
  }

  cookieSet = data => {
    const { cookies } = this.props
    cookies.set('token', data.access_token, { path: '/', maxAge: 3600 })
    this.setState(prevState => ({ login: true }))
    // this.setState(({ login: true }));
  }

  _loadUser = () => {
    const { cookies } = this.props
    const token = cookies.get('token')
    const config = {
      headers: { authorization: `Bearer ${token}` }
    }

    axios
      .get(Api.authCheck, config)
      .then(response => {
        console.log('response', response)
        this.setState(prevState => ({ userInfo: response.data.userInfo }))
      })
      .catch(error => {
        console.log('유저정보획득실패', error)
        cookies.remove('token') // 잘못된 쿠키 삭제
      })
  }

  logout = () => {
    const { cookies } = this.props
    cookies.remove('token')
    this.setState(prevState => ({ login: false, userInfo: false }))
  }

  modalOpenChange = () => {
    this.setState({
      modalStatus: !this.state.modalStatus
    })
  }

  render() {
    console.log(this.state)
    if (this.state.login && !this.state.userInfo) {
      return <div>loading.....</div>
    }
    return (
      <Router>
        <div>
          <div>
            <Header login={this.state.login} logout={this.logout} />
          </div>
          <Switch>
            <Route
              path="/main"
              render={() => (
                <Main
                  modalData={this.state.modalData}
                  modalStatus={this.state.modalStatus}
                  modalOpenChange={this.modalOpenChange}
                  modalDataChange={this.modalDataChange}
                />
              )}
            />
            <Route
              path="/post"
              render={() => <Post userInfo={this.state.userInfo} />}
            />
            <Route
              path="/login"
              // component={Login}
              render={() => (
                <Login
                  cookieSet={this.cookieSet}
                  _loadUser={this._loadUser}
                  login={this.state.login}
                />
              )}
            />
            <Route
              path="/mypage"
              render={() => (
                <Mypage
                  userInfo={this.state.userInfo}
                  modalDataChange={this.modalDataChange}
                />
              )}
            />
            <Route
              path="/signUp"
              render={() => (
                <SignUp
                  login={this.state.login}
                  _loadUser={this._loadUser}
                  cookieSet={this.cookieSet}
                />
              )}
            />
            <Route
              path="/find"
              render={() => (
                <Find
                  modalData={this.state.modalData}
                  modalStatus={this.state.modalStatus}
                  modalOpenChange={this.modalOpenChange}
                  modalDataChange={this.modalDataChange}
                />
              )}
            />
            <Route
              path="/witness"
              render={() => (
                <Witness
                  modalData={this.state.modalData}
                  modalStatus={this.state.modalStatus}
                  modalOpenChange={this.modalOpenChange}
                  modalDataChange={this.modalDataChange}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default withCookies(App)
