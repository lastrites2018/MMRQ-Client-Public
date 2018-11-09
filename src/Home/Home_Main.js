import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeMainButton1 from "./Home_Main_Button1";
import HomeMainButton2 from "./Home_Main_Button2";

class HomeMain extends Component {
  goToMainPage = () => {
    this.props.history.push("/main");
  };

  render() {
    console.log(window.innerHeight);

    return (
      <div className="Home-main">
        {/* <div className="Home-main-header">
          <Link to="/main" className="Home-main-logo">
            <img id="logo" src={logo} alt="" />
          </Link>
        </div> */}
        <div className="Home-main-picture">
          <div className="test" />
          <div className="homeButtonsAll">
            <div className="Home-main-comment">뭘 넣을까요?</div>
            <div className="buttons">
              <HomeMainButton1 />
              <HomeMainButton2 />
            </div>
            <div className="homeToMain">
              <Link to="/main">Go Main</Link>
            </div>
          </div>
        </div>
        {/* <div className="Home-main-footer" /> */}
      </div>
    );
  }
}

export default HomeMain;
