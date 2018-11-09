import React, { Component } from 'react';

class Mypage_section1 extends Component {
  render() {
    return (
      <div>
        <div className="mypageFrame1">
        <div className="mypageTitle">마이페이지</div>
        </div>
        <div className="mypageFrame1">
          <div className="myInformation">
            <div className="myInform"><span>{this.props.userInfo.username}</span>님 안녕하세요</div>
            <div className="myInform"><span>내연락처</span></div>
            <div className="myInform">{this.props.userInfo.handphone.slice(0,3)}.{this.props.userInfo.handphone.slice(3,7)}.{this.props.userInfo.handphone.slice(7,11)}</div>
            <div className="myInform"><span>ID</span></div>
            <div className="myInform">{this.props.userInfo.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage_section1;