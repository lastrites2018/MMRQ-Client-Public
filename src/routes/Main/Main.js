import React, { Component } from "react";
import "./main.css";
import MainSection11 from "./Main_section11";
import MainSection22 from "./Main_section22"
import MainSection33 from "./Main_section33"


import axios from "axios";


export default class Main extends Component {
    state ={
      findData:[],
      witnessData:[]
    }

  componentDidMount() {
    axios.get("http://localhost:5000/find?id_lte=8")
      .then(res => {
        console.log("axios_get",res.data);
        this.setState({
          findData: res.data
        })
      })
      .catch(err => console.log(err))
      
    axios.get("http://localhost:5000/witness?id_lte=8")
      .then(res => {
        console.log("axios_get",res.data);
        this.setState({
          witnessData: res.data
        })
      })
      .catch(err => console.log(err))
  }
  
  
  render() {
    if (this.state.findData.length === 0 || this.state.witnessData.length === 0) {
      return <div>loding....</div>;
    }
    return <div className="component_body">
        {/* <MainSection1 findData={this.state.findData} /> */}
        <MainSection11 findData={this.state.findData} />
        <MainSection22 findData={this.state.findData} />
        <MainSection33 witnessData={this.state.witnessData} />
      </div>;
  }
}


