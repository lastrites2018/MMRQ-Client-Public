import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./main.css";
import MainSection1 from "./Main_section1";
import MainSection2 from "./Main_section2"
import MainSection3 from "./Main_section3"


import axios from "axios";

class Main extends Component {
  state = {
    findData: [],
    witnessData: []
  };

  componentDidMount() {
    axios
      .get("http://34.217.9.241/find?id_lte=7")
      .then(res => {
        // console.log("axios_get", res.data);
        this.setState({
          findData: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("http://34.217.9.241/witness?id_lte=7")
      .then(res => {
        // console.log("axios_get", res.data);
        this.setState({
          witnessData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (
      this.state.findData.length === 0 ||
      this.state.witnessData.length === 0
    ) {
      return <div style={{textAlign:"center"}}><img src="http://blog.hivelab.co.kr/wp-content/uploads/2017/10/004.gif" /></div>;
      // return <div>loding....</div>;
    }
    return (
      <div>
        <div className="component_body">
        <div className="mainBackGround">
        </div>
        <MainSection1 findData={this.state.findData} modalDataChange={this.props.modalDataChange}/>
          <MainSection2 
            findData={this.state.findData} 
            modalData={this.props.modalData}
            modalStatus={this.props.modalStatus}
            modalOpenChange={this.props.modalOpenChange}
            modalDataChange={this.props.modalDataChange}
            />
          <MainSection3 witnessData={this.state.witnessData} modalOpenSet={this.props.modalOpenSet}/>
        </div>
      </div>
    )}
}

export default Main