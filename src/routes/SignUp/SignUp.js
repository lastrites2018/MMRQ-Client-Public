import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import styled from 'styled-components';
import { Form, Text } from 'informed';

const validate = value => {
  return !value || value.length < 4
    ? '최소 4글자 이상은 입력해주셔야 합니다.'
    : null;
};

const numberValidate = value => {
  // pattern="^\d{3}-\d{4}-\d{4}$"
  return !value || value.length < 4
    ? '최소 4글자 이상은 입력해주셔야 합니다.'
    : null;
};
const Wrapp = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  width: 1100px;
  margin: auto;
`;

export default class SignUp extends Component {
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
            <AuthButton>회원가입</AuthButton>
          </AuthContent>
        </Form>
      </Wrapp>
    );
  }
}
