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
          // numberOfButtons: Math.ceil(res.data.length/12)
          numberOfButtons: _.range(1, Math.ceil(res.data.length / 12) + 1)
        });
        // console.log(this.state.numberOfButtons)
        console.log(this.state.numberOfButtons);
      })
      .catch(err => console.log(err));
  }

  _pageIdxChange = (pageNumber) =>{
    console.log("pageIdxChange실행되나??")
    this.setState({
      currentPageFirstIdx : pageNumber -1,
      currentPageLastIdx : pageNumber
    })
    // console.log("pageNumber: ",pageNumber)
  }

  _beforePageMove = () => {
    this.setState({
      currentPageFirstIdx: this.state.currentPageFirstIdx - 1,
      currentPageLastIdx: this.state.currentPageLastIdx - 1
    });
  }

  _nextPageMove = () => {
    this.setState({
      currentPageFirstIdx: this.state.currentPageFirstIdx + 1,
      currentPageLastIdx: this.state.currentPageLastIdx + 1
    });
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
      <FindSection1 findData={this.state.findData.slice(FirstIdx*dataLimit, LastIdx*dataLimit)} />
      <div className="buttonForm">
      <button onClick={this._beforePageMove}>〈</button>
      {this.state.numberOfButtons.map((pageNumber)=>{
        return (
        <FindButton pageIdxChange={this._pageIdxChange} pageNumber={pageNumber}/>
        )})}
      <button onClick={this._beforePageMove}>〉</button>
      </div>
    </div>
    )}
  }
