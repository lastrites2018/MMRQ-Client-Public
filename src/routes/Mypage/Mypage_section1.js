import React, { Component } from 'react';

class Mypage_section1 extends Component {
  render() {
    return (
      <div className="mypageFrame">
        <div className="mypageInsideFrame">
          <div>My Info</div>
          {/* </div> */}
          {/* <div className="usernameDiv"> */}
          <div>이름 </div>
          <div>{this.props.userInfo.writer}</div>
          {/* </div> */}
          {/* <div className="phoneNumberDiv"> */}
          <div>연락처</div>
          <div>{this.props.userInfo.handphone}</div>
          {/* </div> */}
          {/* <div className="emailDiv"> */}
          <div>Email</div>
          <div>{this.props.userInfo.email}</div>
          {/* </div> */}
          <div className="commentDiv"></div>
          <div>{`지금 찾아갑니다.`}</div>
        </div>
      </div>
    );
  }
}

export default Mypage_section1;