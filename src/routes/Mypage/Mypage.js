import React, { Component } from 'react';
import './Mypage.css';
import { withCookies, Cookies } from 'react-cookie';
import Axios from 'axios';
import { instanceOf } from 'prop-types';

class Mypage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    userInfo: []
  };

  componentDidMount = () => {
    this._loadUser();
  };
  _loadUser = () => {
    // _loadUser = async () => {
    const { cookies } = this.props;
    const token = cookies.get('token');
    const config = {
      headers: { authorization: `Bearer ${token}` }
    };
    console.log('config', config);
    // Axios.get('http://localhost:5000/auth/check', config).then(response => {
    Axios.get('http://34.217.9.241/auth/check', config).then(response => {
      console.log('response', response.data.userInfo);
      this.setState({ userInfo: response.data.userInfo });
    });
    // let response = await Axios.get('http://34.217.9.241/auth/check', config);

    // if (response
    // await Axios.get('http://34.217.9.241/auth/check', config)
    // Axios.get('http://34.217.9.241/auth/check', config)
    // .then(response => {
    //   console.log('login - response', response);
    //   console.log('login - response.data', response.data);
    //   this.setState({ userInfo: response.data });
    // })
    // .catch(error => {
    //   this.setState(prevState => ({ loginTry: true }));
    // });
  };

  render() {
    if (!this.state.userInfo.name) {
      return <div>loading...</div>;
    }
    const successLogin = false;
    return (
      <div>
        <div>{`${this.state.userInfo.name}님 어서오세요.`}</div>
        <div>{`님의 번호는 ${this.state.userInfo.handphone}이고`}</div>
        <div>{`님의 이메일은 ${this.state.userInfo.email}이군요.`}</div>
        <div>{`지금 찾아갑니다.`}</div>
      </div>
    );
  }
}

export default withCookies(Mypage);
// export default Mypage;
