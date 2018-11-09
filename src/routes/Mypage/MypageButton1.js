import React, { Component } from 'react';

class MypageButton1 extends Component {

  _changeCurrentPage = e => {
    console.log(e.target.innerText)
    this.props._findPageChange(e.target.innerText)
    // this.props.pageIdxChange(this.props.pageNumber);
  };

  render() {
    return (
      // <button onClick={(e) => { this.props._findPageChange(e.target.innertext)}}>{this.props.pageNumber}</button>
      <button onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
    );
  }
}

export default MypageButton1;