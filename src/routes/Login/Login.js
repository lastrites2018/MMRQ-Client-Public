import React, { Component } from 'react'
import Formsy from 'formsy-react'
import MyInput from './MyInput'
import styled from 'styled-components'
import './login.css'
import Axios from 'axios'
// import { Router, Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
// import { withRouter, Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie'
import { instanceOf } from 'prop-types'
import Api from '../../util/Api'

const LoginStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  width: 1100px;
  margin: auto;
`

class Login extends Component {
  // _isLogin = false;
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false,
      loginTry: false
    }

    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  submit = data => {
    Axios.post(Api.login, data)
      .then(response => {
        this.props.cookieSet(response.data)
        this.props._loadUser()
      })
      .catch(error => {
        this.setState(prevState => ({ loginTry: true }))
      })
  }

  render() {
    return (
      <LoginStyle>
        <div>
          {this.props.login && <Redirect to="/main" />}
          {this.state.loginTry ? (
            <div>이메일과 비밀번호가 일치하지 않습니다.</div>
          ) : null}
          <Formsy
            onSubmit={this.submit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            className="login"
          >
            <MyInput
              name="email"
              title="이메일"
              validations="isEmail"
              validationError="정확한 이메일 주소를 입력해주세요."
              required
            />
            <MyInput
              name="password"
              title="비밀번호"
              type="password"
              required
            />
            <button
              type="submit"
              disabled={!this.state.canSubmit}
              className={!this.state.canSubmit ? 'disabled' : null}
            >
              로그인
            </button>
          </Formsy>
        </div>
      </LoginStyle>
    )
  }
}

export default withCookies(Login)
