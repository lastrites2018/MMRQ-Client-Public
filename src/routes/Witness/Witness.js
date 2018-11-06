import React, { Component } from 'react';

import WitnessSection1 from './Witness_section1';
import WitnessHeader from './Witness_header';
import WitnessButton from './Witness_button';
import Modal from './Modal';

import axios from 'axios';
import _ from 'lodash';

import './Witness.css';

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      witnessData: [],
      currentPageFirstIdx: 0,
      currentPageLastIdx: 1,
      dataLimit: 15,
      numberOfButtons: [],
      modalOpen: true
    };
    this.modalOpenSet = this.modalOpenSet.bind(this);
  }

  componentDidMount() {
    axios
      // .get(`http://localhost:5000/find?id_lte=${this.state.datalimit}`)
      .get('http://localhost:5000/witness')
      .then(res => {
        this.setState({
          witnessData: res.data,
          numberOfButtons: _.range(1, Math.ceil(res.data.length / 15) + 1)
        });
      })
      .catch(err => console.log(err));
  }

  _pageIdxChange = pageNumber => {
    this.setState({
      currentPageFirstIdx: pageNumber - 1,
      currentPageLastIdx: pageNumber
    });
  };

  _beforePageMove = () => {
    if (this.state.currentPageFirstIdx !== 0) {
      return this.setState({
        currentPageFirstIdx: this.state.currentPageFirstIdx - 1,
        currentPageLastIdx: this.state.currentPageLastIdx - 1
      });
    }
  };

  _nextPageMove = () => {
    if (this.state.currentPageLastIdx !== this.state.numberOfButtons.length) {
      return this.setState({
        currentPageFirstIdx: this.state.currentPageFirstIdx + 1,
        currentPageLastIdx: this.state.currentPageLastIdx + 1
      });
    }
  };

  modalOpenSet = () => {
    console.log('찍히나?');
  };

  _filterSearch = (city, district) => {
    let onlyCityURL = `http://localhost:5000/witness?citylocation=${city}`;
    let cityDistrictURL = `http://localhost:5000/witness?citylocation=${city}&districtlocation=${district}`;

    if (!district) {
      axios
        .get(onlyCityURL)
        .then(res => {
          this.setState(prevState => ({
            witnessData: res.data,
            pageCount: res.data.length / 15
          }));
        })
        .catch(err => console.log("error description:::", err));
    } else {
      axios
        .get(cityDistrictURL)
        .then(res => {
          console.log(res);
          this.setState(prevState => ({
            ...prevState,
            witnessData: res.data,
            pageCount: res.data.length / 15
          }));
        })
        .catch(err => console.log("error description:::", err));
    }
  };

  render() {
    const dataLimit = this.state.dataLimit;
    const FirstIdx = this.state.currentPageFirstIdx;
    const LastIdx = this.state.currentPageLastIdx;

    // {console.log(this.props.backGroundSet)}
    if (this.state.witnessData.length === 0) {
      return <div>loding....</div>;
    }
    return (
      <div className="component_body">
        <Modal
          backGroundSet={this.props.backGroundSet}
          modalOpenSet={this.modalOpenSet}
        />
        {/* {this.state.modalOpen ? <Modal backGroundSet={this.props.backGroundSet} modalOpenSet={this.modalOpenSet}/> : null} */}
        {/* <Modal backGroundSet={this.props.backGroundSet} modalOpenSet={this.modalOpenSet}/> */}
        <div className="witness_title">
          <div className="main_section2_plzfind">우리 아이를 찾아주세요</div>
          <div className="main_section2_plzfind_note">
            가족을 잃은 슬픔에 애타게 기다리고 있습니다
          </div>
          <div className="main_section2_plzfind_note">
            많은 관심과 제보 부탁드립니다.
          </div>
          <div>
            <WitnessHeader _filterSearch={this._filterSearch} />
          </div>
        </div>

        <WitnessSection1
          witnessData={this.state.witnessData.slice(
            FirstIdx * dataLimit,
            LastIdx * dataLimit
          )}
        />

        <div className="buttonForm">
          <button onClick={this._beforePageMove}>〈</button>
          {this.state.numberOfButtons.map((pageNumber, idx) => {
            return (
              <WitnessButton
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
          {/* <div>마지막 페이지 입니다</div> */}
        </div>
      </div>
    );
  }
}
