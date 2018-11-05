import React, { Component } from 'react';

class Find_button extends Component {
  constructor(props){
    super(props)
    this.buttonNode = React.createRef();
  }

  
  _changeCurrentPage = (e) => {
    // console.log(e.target.innerText)
    this.props.pageIdxChange(this.props.pageNumber);
  }

  _changePageNumberColor = () => {

  }

  render() {
    // {console.log(`this.myRef${this.props.pageNumber}`)}
    return (
      <button id={`pageButton${this.props.pageNumber}`} onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
      // <button ref={this.buttonNode} classList={`pageButton${this.props.pageNumber}`} onClick={this._changeCurrentPage}>{this.props.pageNumber}</button>
    );
  }
}

export default Find_button;