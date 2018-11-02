import React, { Component } from 'react';
import Formsy from 'formsy-react';
import MyInput from './MyInput';
import styled from 'styled-components';
import './login.css';

const LoginStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  width: 1100px;
  margin: auto;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { canSubmit: false };
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  submit(data) {
    alert(JSON.stringify(data, null, 4));
  }

  render() {
    return (
      <LoginStyle>
        <div>
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

export default Login;
