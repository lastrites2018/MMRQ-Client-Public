import React, { Component } from 'react';

class Find_button extends Component {
  
  state = {
    currentPage: 1
  }
  _changeCurrentPage = (e) => {
    console.log(e.target.innerText)
    this.setState({
      currentPage: e.target.innerText
    })
    this.props.pageIdxChange(this.state.currentPage);
    console.log(this.props);
  }

  render() {
    return (
      <div className="buttonForm">
        <button onClick={this._changeCurrentPage}>1</button>
        <button onClick={this._changeCurrentPage}>2</button>
        <button onClick={this._changeCurrentPage}>3</button>
        <button onClick={this._changeCurrentPage}>4</button>
      </div>
    );
  }
}

export default Find_button;