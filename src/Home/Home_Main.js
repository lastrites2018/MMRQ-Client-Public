import React, { Component } from "react";
import HomeMainButton1 from "./Home_Main_Button1";
import HomeMainButton2 from "./Home_Main_Button2";

class HomeMain extends Component {
  render() {
    return (
      <div className="Home-main">
        <div className="Home-main-header">
          <span className="Home-main-logo">MMRQ</span>
        </div>
        <div className="Home-main-comment">Please Help My Friends</div>
        <div className="buttons">
          <HomeMainButton1 />
          <HomeMainButton2 />
        </div>
        <div className="Home-main-footer" />
      </div>
    );
  }
}

export default HomeMain;
