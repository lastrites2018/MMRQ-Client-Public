import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import styled from 'styled-components';
// import { Form } from 'informed';
import Axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Redirect } from 'react-router-dom';
// import { Formik } from 'formik';

// const validate = value => {
//   return !value || value.length < 4
//     ? '최소 4글자 이상은 입력해주셔야 합니다.'
//     : null;
// };

// const numberValidate = value => {
//   // pattern="^\d{3}-\d{4}-\d{4}$"
//   return !value || value.length < 4
//     ? '최소 4글자 이상은 입력해주셔야 합니다.'
//     : null;
// };

const Wrapp = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  width: 1100px;
  margin: auto;
`;

class SignUp extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      email: false,
      handphone: false,
      username: false,
      password: false,
      passwordConfirm: false
    };
    this.submit = this.submit.bind(this);
  }

  submit = (email, handphone, username, password, passwordConfirm) => {
    const { cookies } = this.props;
    console.log('arg', email, handphone, username);
    cookies.remove('token');
    if (!email || !handphone || !username || !password || !passwordConfirm) {
      console.log(' 실행 체크');
      alert('데이터를 전부 입력해주세요.');
      return;
    }

    // console.log('아래 실행 체크');
    Axios.post('http://34.217.9.241/users', {
      email: email,
      handphone: handphone,
      username: username,
      password: password,
      passwordConfirm: passwordConfirm
    })
      .then(response => {
        console.log('response', response);
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
            console.log('1 초 지나고!');
            resolve();
          }, 1000);
        });
      })
      .then(response => {
        console.log('response2', response);
        // return Axios.post('http://localhost:5000/auth/login', {
        return Axios.post('http://34.217.9.241/auth/login', {
          email: email,
          password: password
        });
      })
      .then(response => {
        console.log('respons3', response);
        this.props.cookieSet(response.data);
        this.props._loadUser();
      });
  };

  render() {
    // console.log('this.state.email:::', this.state.email)
    // console.log('this.state.handphone:::', this.state.handphone)
    // console.log('this.state.username:::', this.state.username)
    // console.log('this.state.password:::', this.state.password)
    // console.log('this.state.passwordConfirm:::', this.state.passwordConfirm)
    return (
      <Wrapp>
        {this.props.login && <Redirect to="/main" />}
        <form id="validate-form">
          <AuthContent title="회원가입">
            {/* <label htmlFor="validate-color">이메일 </label> */}
            {/* <Text field="email" id="validate-email" validate={validate} /> */}
            <InputWithLabel
              onChange={event => this.setState({ email: event.target.value })}
              label="이메일"
              name="email"
              placeholder="이메일"
            />
            <InputWithLabel
              onChange={event =>
                this.setState({ handphone: event.target.value })
              }
              label="연락처"
              name="handphone"
              placeholder="연락처"
            />
            <InputWithLabel
              onChange={event =>
                this.setState({ username: event.target.value })
              }
              label="닉네임"
              name="username"
              id="validate-nickname"
              placeholder="닉네임"
            />
            <InputWithLabel
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              label="비밀번호"
              name="password"
              placeholder="비밀번호"
            />
            <InputWithLabel
              onChange={event =>
                this.setState({ passwordConfirm: event.target.value })
              }
              label="비밀번호 확인"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
            />
            <AuthButton
              onClick={() =>
                this.submit(
                  this.state.email,
                  this.state.handphone,
                  this.state.username,
                  this.state.password,
                  this.state.passwordConfirm
                )
              }
            >
              회원가입
            </AuthButton>
          </AuthContent>
        </form>
      </Wrapp>
    );
  }
}

export default withCookies(SignUp);
