import React, { Component } from "react";
import "./Mypage.css";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

class Mypage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    userInfo: this.props.userInfo,
    findData: [],
    witnessData: []
  };

  render() {
    if (!this.state.userInfo) {
      return <div>loading...</div>;
    }
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
