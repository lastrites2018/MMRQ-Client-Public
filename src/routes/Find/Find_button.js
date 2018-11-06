import React, { Component } from 'react';

class Find_button extends Component {
  constructor(props) {
    super(props);
    console.log('tp', this.props);
    this.state = {
      clickedPage: 1
    };
  }
  _changeCurrentPage = e => {
    console.log(e.target.innerText);
    this.props.pageIdxChange(this.props.pageNumber);
    this._changePageNumberColor(e.target.innerText);
  };

  _changePageNumberColor = pageNumber => {
    this.props.toggle(pageNumber);
  };

  render() {
    console.log('pageNumber', this.props.pageNumber);
    console.log('nowPage', this.props.nowPage);
    console.log('clickedPage', this.state.clickedPage);
    return (
      <div>
        <button
          className={
            `pageButton${this.props.pageNumber}` ===
            `pageButton${this.props.nowPage}`
              ? 'clickedButton'
              : null
          }
          onClick={this._changeCurrentPage}
        >
          {this.props.pageNumber}
        </button>
      </div>
      // <button classList={`pageButton${this.props.pageNumber}`} onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
      // <button className={`pageButton${this.state.clickedPage}` === `pageButton${this.state.clickedPage}` ? "clickedButton" : ""}
      //   onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
      // <div>
      //   {
      //     `pageButton${this.props.pageNumber}` === `pageButton${this.state.clickedPage}`
      //     ?
      //     <button className='clickedButton' onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
      //     :
      //     <button className='unclickedButton' onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
      //   }
    );
  }
}

export default Find_button;
