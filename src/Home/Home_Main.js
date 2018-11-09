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
        <div className="Home-main-picture">
          <div className="test" />
          <div className="homeButtonsAll">
            <div className="Home-main-comment">
              <span>
                <span id="mm">멍멍</span>
                <span id="line"> | </span>
                <span id="rq">레스Q</span>
              </span>
            </div>
            <div className="buttons">
              <HomeMainButton1 />
              <HomeMainButton2 />
            </div>
            <div className="homeToMain">
              <Link to="/main">메인으로</Link>
            </div>
          </div>
        </div>
        {/* <div className="Home-main-footer" /> */}
      </div>
    );
  }
}

export default HomeMain;
