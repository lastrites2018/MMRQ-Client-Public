import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class HomeMain extends Component {
  setRedirectButton1 = () => (
    <Redirect to="/posts" />
  )
  setRedirectButton2 = () => (
    <Redirect to="/search" />
  )

  render() {
    return (
      <div className="Home-main">
        <div className="Home-main-header">
          <span className="Home-main-logo">MMRQ</span>
        </div>
        <div className="Home-main-comment">Please Help My Friends</div>
        <div className="buttons">
          <span className="Home-main-button1">
            <button onClick={this.setRedirectButton1}>버튼1</button>
          </span>
          <span className="Home-main-button2">
            <button onClick={this.setRedirectButton2}>버튼2</button>
          </span>
        </div>
        <div className="Home-main-footer" />
      </div>
    );
  }
}

export default HomeMain;
