import React, { Component } from "react";
import "./Mypage.css";
import { withCookies, Cookies } from "react-cookie";
import Axios from "axios";
import { instanceOf } from "prop-types";

class Mypage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    userInfo: [],
    findData: [],
    witnessData: []
  };

  componentDidMount = () => {
    this._loadUser();
  };
  _loadUser = () => {
    // _loadUser = async () => {
    const { cookies } = this.props;
    const token = cookies.get("token");
    const config = {
      headers: { authorization: `Bearer ${token}` }
    };
    console.log("config", config);
    // Axios.get('http://localhost:5000/auth/check', config).then(response => {
    Axios.get("http://34.217.9.241/auth/check", config).then(response => {
      console.log("responseUserInfo", response.data.userInfo);
      this.setState({ userInfo: response.data.userInfo });
    });

    Axios.get("http://34.217.9.241/find").then(response => {
      this.setState({
        findData: response.data
      });
      console.log(this.state.findData, "finnnnnnnd");
    });

    Axios.get("http://34.217.9.241/witness").then(response => {
      this.setState({
        witnessData: response.data
      });
      console.log(this.state.witnessData, "wittttttttt");
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
      <div className="mypageFrame">
        <div className="mypageInsideFrame">
          <div className="myInfoDiv">
            <span>My Info</span>
          </div>
          <div className="usernameDiv">
            <span>이름 </span>
            {":"}
            <span>{this.state.userInfo.name}</span>
          </div>
          <div className="phoneNumberDiv">
            <span>연락처</span>
            {":"}
            <span>{this.state.userInfo.handphone}</span>
          </div>
          <div className="emailDiv">
            <span>Email</span>
            {":"}
            <span>{this.state.userInfo.email}</span>
          </div>
          <div className="commentDiv">
            <span>{`지금 찾아갑니다.`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(Mypage);
// export default Mypage;
