import React, { Component } from 'react';

import FindSection1 from './Find_section1';
import FindButton from './Find_button';

import axios from 'axios';
import _ from 'lodash';

import './Find.css';

export default class Find extends Component {
  state = {
    findData: [],
    currentPageFirstIdx: 0,
    currentPageLastIdx: 1,
    dataLimit: 15,
    numberOfButtons: [],
    nowPage: 1
  };

  _toggle = clickedpage => {
    this.setState({ nowPage: clickedpage });
  };

  componentDidMount() {
    axios
      // .get(`http://localhost:5000/find?id_lte=${this.state.datalimit}`)
      .get('http://localhost:5000/find')
      .then(res => {
        // console.log("axios_get", res.data);
        this.setState({
          findData: res.data,
          // numberOfButtons: Math.ceil(res.data.length/12)
          numberOfButtons: _.range(1, Math.ceil(res.data.length / 15) + 1)
        });
        // console.log(this.state.numberOfButtons);
      })
      .catch(err => console.log(err));
  }

  _pageIdxChange = pageNumber => {
    // console.log("pageIdxChange실행되나??")
    this.setState({
      currentPageFirstIdx: pageNumber - 1,
      currentPageLastIdx: pageNumber
    });
    // console.log("pageNumber: ",pageNumber)
  };

  _beforePageMove = () => {
    this.state.currentPageFirstIdx !== 0
      ? this.setState({
          currentPageFirstIdx: this.state.currentPageFirstIdx - 1,
          currentPageLastIdx: this.state.currentPageLastIdx - 1
        })
      : console.log('!콘솔을 못지움....');
    // console.log("numberOfButtons", this.state.numberOfButtons.length);
  };

  _nextPageMove = () => {
    // {console.log(this.state.numberOfButtons.length)}
    this.state.currentPageLastIdx !== this.state.numberOfButtons.length
      ? this.setState({
          currentPageFirstIdx: this.state.currentPageFirstIdx + 1,
          currentPageLastIdx: this.state.currentPageLastIdx + 1
        })
      : console.log('!콘솔을 못지움....'); // if문으로 고치는게 나음
  };

  render() {
    const dataLimit = this.state.dataLimit;
    const FirstIdx = this.state.currentPageFirstIdx;
    const LastIdx = this.state.currentPageLastIdx;

    if (this.state.findData.length === 0) {
      return <div>loding....</div>;
    }
    return (
      <div className="component_body">
        <FindSection1
          findData={this.state.findData.slice(
            FirstIdx * dataLimit,
            LastIdx * dataLimit
          )}
        />
        <div className="buttonForm">
          <button onClick={this._beforePageMove}>〈</button>

          {this.state.numberOfButtons.map((pageNumber, idx) => {
            return (
              <FindButton
                pageIdxChange={this._pageIdxChange}
                pageNumber={pageNumber}
                nowPage={this.state.nowPage}
                toggle={this._toggle}
                currentPage={LastIdx}
                key={idx}
              />
            );
          })}
          <button onClick={this._nextPageMove}>〉</button>
        </div>
      </div>
    );
  }
}
