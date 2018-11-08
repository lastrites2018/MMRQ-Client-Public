import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import styled from 'styled-components';
import { Form } from 'informed';
import Axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Redirect } from 'react-router-dom';

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
      email: null,
      handphone: null,
      username: null,
      password: null,
      passwordConfirm: null
    };
    this.submit = this.submit.bind(this);
  }

  submit = async (email, handphone, username, password, passwordConfirm) => {
    //event.preventDefault();
    //console.log('signup data:::')

    Axios.post('http://34.217.9.241/users', {
      email: email,
      handphone: handphone,
      username: username,
      password: password,
      passwordConfirm: passwordConfirm
    })
      .then(response => {
        console.log('response', response);
        return Axios.post('http://34.217.9.241/auth/login', {
          email: email,
          password: password
        });
      })
      .then(response => {
        console.log('response2', response);
        this.props.cookieSet(response.data);
      });
  };

  // await console.log('response', response);

  // const response2 = await Axios.post('http://34.217.9.241/auth/login', {
  //   email: email,
  //   password: password
  // });
  // await console.log('response2', response2);

  // await this.setState({ isLogin: true });

  // Axios.post('http://34.217.9.241/users', {
  //   email: email,
  //   handphone: handphone,
  //   username: username,
  //   password: password,
  //   passwordConfirm: passwordConfirm
  // })
  //   // .then(
  //   //   Axios.get('http://34.217.9.241/')
  //   // )
  //   .then(response => {

  //     console.log('response:::', response.data);
  //     console.log(this, '회원가입 완료');
  //     //this.props.cookieSet(response.data);
  //     // 가입 처리 하고
  //     // 로그인 확인을 해야 한다. setcookie에서 지정해주거나?
  //     // 어디선가 해줘야겠지?
  //     this.setState({isLogin: true});
  //     this.props.cookieSet(response.data);
  //   })
  //   .catch(error => console.log('error', error));

  render() {
    // console.log('this.state.email:::', this.state.email)
    // console.log('this.state.handphone:::', this.state.handphone)
    // console.log('this.state.username:::', this.state.username)
    // console.log('this.state.password:::', this.state.password)
    // console.log('this.state.passwordConfirm:::', this.state.passwordConfirm)
    return (
      <Wrapp>
        {this.state.isLogin && <Redirect to="/main" />}
        <Form id="validate-form">
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
        </Form>
      </Wrapp>
    );
  }
}

export default withCookies(SignUp);
