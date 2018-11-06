import React, { Component } from 'react';
import Formsy from 'formsy-react';
import MyInput from './MyInput';
import styled from 'styled-components';
import './login.css';
import Axios from 'axios';
// import { Router, Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import { withRouter, Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

const LoginStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  width: 1100px;
  margin: auto;
`;

class Login extends Component {
  // _isLogin = false;
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    // console.log('로그인 쿠키셋 체크', this.props.cookieSet);
    const { cookies } = props;
    console.log('cookie!', cookies.get('test'));
    this.state = {
      canSubmit: false,
      isLogin: false
    };
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  submit = data => {
    // console.log('data', data);
    Axios.post('http://localhost:5000/users', data)
      .then(response => {
        // console.log('response', response);
        // console.log(this, '로그인 완료');
        this.setState({ isLogin: true });
        this.props.cookieSet(data);
        // this._isLogin = true;
        // cookies.set('test', data.email, { path: '/', maxAge: 3600 });
        // Cookies.save('token', 'token-value', {
        //   maxAge: 3600 // Will expire after 1hr (value is in number of sec.)
        // });

        // this.props.history.push('/main');
        // response && <Redirect to="/main" />;
      })
      .catch(error => console.log('error', error));

    // alert(JSON.stringify(data, null, 4));
  };

  render() {
    return (
      <LoginStyle>
        <div>
          {this.state.isLogin && <Redirect to="/main" />}
          {/* {!this.isLogin ? <div>로그인이 필요합니다 </div> : null} */}
          {/* <h3>로그인</h3> */}
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
              validationError="정확한 이메일 주소가 아닙니다."
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
    );
  }
}

// import React, { Component } from 'react'

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//         Login
//       </div>
//     )
//   }
// }

export default withCookies(Login);
// export default withRouter(Login);
