import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import styled from 'styled-components';
import { Form } from 'informed';
import Axios from 'axios';

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

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = data => {
    console.log('data', data);
    Axios.post('http://34.217.9.241/users', data)
      .then(response => {
        console.log('response', response);
        console.log(this, '회원가입 완료');
        // 가입 처리 하고
        // 로그인 확인을 해야 한다. setcookie에서 지정해주거나?
        // 어디선가 해줘야겠지?
      })
      .catch(error => console.log('error', error));
  };

  render() {
    return (
      <Wrapp>
        <Form id="validate-form">
          <AuthContent title="회원가입">
            <label htmlFor="validate-color">이메일 </label>
            {/* <Text field="email" id="validate-email" validate={validate} /> */}
            <InputWithLabel label="이메일" name="email" placeholder="이메일" />
            <InputWithLabel
              label="연락처"
              name="handphone"
              placeholder="연락처"
            />
            <InputWithLabel
              label="닉네임"
              name="username"
              placeholder="닉네임"
            />
            <InputWithLabel
              label="비밀번호"
              name="password"
              placeholder="비밀번호"
            />
            <InputWithLabel
              label="비밀번호 확인"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
            />
            <AuthButton onClick={this.submit}>회원가입</AuthButton>
          </AuthContent>
        </Form>
      </Wrapp>
    );
  }
}
