import React, { Component } from 'react'
import FindSection1 from "./Find_section1"
import FindButton from "./Find_button"

import axios from "axios"
import _ from "lodash"

import "./Find.css"


export default class Find extends Component {
  
  state = {
    findData: [],
    currentPageFirstIdx: 0,
    currentPageLastIdx: 1,
    dataLimit: 12,
    numberOfButtons: [],
  }
  
  componentDidMount() {
    axios
      // .get(`http://localhost:5000/find?id_lte=${this.state.datalimit}`)
      .get("http://localhost:5000/find")
      .then(res => {
        console.log("axios_get", res.data);
        // console.log("이게 레인지",_range)
        this.setState({
          findData: res.data,
          numberOfButtons: _.range(1, Math.ceil(res.data.length/12)+1)
        });
        console.log(this.state.numberOfButtons)
      })
      .catch(err => console.log(err));
  }

  _pageIdxChange = (pageNumber) =>{
    console.log("pageIdxChange실행되나??")
    console.log("pageNumber: ",pageNumber)
    this.setState({
      currentPageFirstIdx : pageNumber -1,
      currentPageLastIdx : pageNumber
    })
  }



  render() {
    const dataLimit = this.state.dataLimit
    const FirstIdx = this.state.currentPageFirstIdx
    const LastIdx = this.state.currentPageLastIdx

    if (
      this.state.findData.length === 0 
    ) {
      return <div>loding....</div>;
    }
    return (
      <div className="component_body">
      {/* {console.log(this.state.da)} */}
      <FindSection1 findData={this.state.findData.slice(FirstIdx*dataLimit, LastIdx*dataLimit)} />
      <FindButton pageIdxChange={this._pageIdxChange}/>
    </div>
    )}
  }
