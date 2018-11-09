import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';

import MypageButton1 from "./MypageButton1";
import MypageButton2 from "./MypageButton2";
import "../Modal/Modal.css"


class Mypage_section2 extends Component {
  
  state = {
    findData: [],
    witnessData: [],
    fCurrentPage: 1,
    wCurrentPage: 1,
    limitPage: 7
  }
  
  _findPageChange = (pageNumber) => {
    console.log("pageNumber:", pageNumber)
    this.setState({
      fCurrentPage: pageNumber
    })
  }

  _witnessPageChange = (pageNumber) => {
    this.setState({
      wCurrentPage: pageNumber
    })    
  }

  render() {
    console.log(this.props.personalFindData)
    const numOfFind = _.range(1, Math.ceil(this.props.personalFindData.length / this.state.limitPage) + 1);
    const numOfWitness = _.range(1, Math.ceil(this.props.personalWitnessData.length / this.state.limitPage) + 1);
    const findData = this.props.personalFindData.slice((this.state.fCurrentPage-1)*this.state.limitPage, this.state.limitPage*this.state.fCurrentPage) 

    const witnessData = this.props.personalWitnessData.slice((this.state.wCurrentPage-1)*this.state.limitPage, this.state.limitPage*this.state.wCurrentPage) 
    const modalDataChange = this.props.modalDataChange
    
    return (
      <div className="mypageFrame2">
          <div className="mypageMyPost">내가 쓴글</div>
        <div>
          <div className="mypageTitle2">찾아주세요</div>
              <table className="mypageTable">
                <tr>
                  <th className="tableRowNumber">번호</th>
                  <th className="tableRowTitle">제목</th>
                  <th className="tableRowDate">게시일</th>
                </tr>
                <tr></tr>
              {findData.map((data, idx)=>{
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td className="tDataTitle"><Link to="/find" onClick={() => modalDataChange(data)}>{data.title}</Link></td>
                    <td>{data.postdate.slice(0,10)}</td>
                  </tr>
                )})}
              </table>
          <div className="mypageButton">
            {numOfFind.map((pageNumber) => {
              return (
              <MypageButton1
                pageNumber={pageNumber}
                _findPageChange={this._findPageChange}
              />
                )
            })}
          </div>
        
        </div>
        <div>
          <div className="mypageTitle2">목격했어요</div>
          <table>
            <tr>
              <th className="tableRowNumber">번호</th>
              <th className="tableRowTitle">제목</th>
              <th className="tableRowDate">게시일</th>
            </tr>
            <tr></tr>
            {witnessData.map((data, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td className="tDataTitle"><Link to="/witness" onClick={() => modalDataChange(data)}>{data.title}</Link></td>
                  <td>{data.postdate.slice(0, 10)}</td>
                </tr>
              )
            })}
          </table>
          <div className="mypageButton">
            {numOfFind.map((pageNumber) => {
              return (
                <MypageButton2
                  pageNumber={pageNumber}
                  _witnessPageChange={this._witnessPageChange}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage_section2;


