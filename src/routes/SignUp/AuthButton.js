import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: ${oc.blue[6]};
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  left: 50%;
  width: 50%;
  margin: auto;
  margin-top: 2rem;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${oc.blue[5]};
  }

  &:active {
    background: ${oc.blue[7]};
  }
`;

const AuthButton = ({ children, onClick }) => (
  <Wrapper onClick={onClick}>
    {/* <Wrapper onClick={this.props.submit}> */}
    {children}
  </Wrapper>
);

export default AuthButton;
