import React, { Component } from 'react';


class Find_button extends Component {
  
  state = {
    clickedPage: 1
  }
  
  _changeCurrentPage = (e) => {
    console.log(e.target.innerText)
    this.props.pageIdxChange(this.props.pageNumber);
    this._changePageNumberColor(e.target.innerText)
  }
  
  _changePageNumberColor = (pageNumber) => {
    this.setState((prevState) => ({
      clickedPage: pageNumber
    }))
  } 
  
  render() {
    // {console.log(this.props.currentPage)}
    {console.log(this.props.pageNumber)}
    return (
      // <button classList={`pageButton${this.props.pageNumber}`} onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
      // <button className={`pageButton${this.state.clickedPage}` === `pageButton${this.state.clickedPage}` ? "clickedButton" : ""} 
      //   onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
    <div>
      {
        `pageButton${this.props.pageNumber}` === `pageButton${this.state.clickedPage}`
        ? 
        <button className='clickedButton' onClick={this._changeCurrentPage}>{this.props.pageNumber}</button> 
        :
        <button className='unclickedButton' onClick={this._changeCurrentPage}>{this.props.pageNumber}</button> 
      }
      {console.log("11111", this.props.pageNumber)}
      {console.log('22222', this.state.clickedPage)}
      </div>

    );
  }
}

export default Find_button;