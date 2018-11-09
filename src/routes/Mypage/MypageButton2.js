import React, { Component } from "react";

class MypageButton2 extends Component {
  
  _changeCurrentPage = e => {
    console.log(e.target.innerText);
    this.props._witnessPageChange(e.target.innerText);
  };

  render() {
    return (
      <button onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
    );
  }
}

export default MypageButton2;
