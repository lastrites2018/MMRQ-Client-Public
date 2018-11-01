import React, { Component } from "react";
import "./main.css";
import MainSection1 from "./main_section1"
import MainSection2 from "./main_section2"
import axios from "axios";


export default class Main extends Component {
    state ={
      data:[]
    }

  componentDidMount() {
    axios.get("http://localhost:5000/find")
      .then(res => {
        console.log("asdasdasd",res.data);
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err))
    }
  
  
  render() {
    // console.log(this.state.data)
    if (this.state.data.length === 0) {
      return <div>loding....</div>;
    }
    
    return (
      <div className="component_body">
      <MainSection1 findData={this.state.data}/>
      <MainSection2 findData={this.state.data}/>
      </div>
    );
  }
}


