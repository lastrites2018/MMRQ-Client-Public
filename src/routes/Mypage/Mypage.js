import React, { Component } from "react";
import axios from "axios";
import MyPageSection1 from "./Mypage_section1"
import MyPageSection2 from "./Mypage_section2"

import _ from "lodash";
import "./Mypage.css";

class Mypage extends Component {
  state = {
    // userInfo: this.props.userInfo,  //데이터 제대로 들어오면 이거로 사용해야됨
    userInfo: {email: "test@test.com",handphone: "054-4981-3393",id: 1,writer: "예은",password: "test",userid: 1},
    personalFindData: [],
    personalWitnessData: []
  };

  
  componentDidMount() {
    console.log(this.state.userInfo)
    axios
    .get("http://34.217.9.241/find")
    .then(res => {
      const reversedData = _.reverse(res.data);
      console.log('reversedData',reversedData)
      // console.log('this.state.userInfo',reversedData)
      const userData = []
      reversedData.map((data) => {
        if(data.writer.slice(0,2) === this.state.userInfo.writer){
          userData.push(data);
        }
      })
      this.setState({
        personalFindData: userData,
      });
    })
    .catch(err => console.log(err));

    axios
      .get("http://34.217.9.241/witness")
      .then(res => {
        const reversedData = _.reverse(res.data);
        const userData = []
        reversedData.map((data) => {
          // console.log("reversedData", data.writer)
          // console.log("111111", this.state.userInfo.writer)
          if (data.writer.slice(0, 2) === this.state.userInfo.writer) {
            userData.push(data);
          }
        })
        this.setState({
          personalWitnessData: userData,
        });
      })
      .catch(err => console.log(err));
  }



  render() {
    if (!this.state.userInfo) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <MyPageSection1 personalFindData={this.state.personalFindData} userInfo={this.state.userInfo} />
        <MyPageSection2 
          personalFindData={this.state.personalFindData} 
          personalWitnessData={this.state.personalWitnessData} 
          userInfo={this.state.userInfo} />
      </div>
    );
  }
}

export default Mypage;
