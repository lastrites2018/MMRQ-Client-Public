import React, { Component } from 'react';

class Find_button extends Component {
  _changeCurrentPage = e => {
    // console.log(e.target.innerText)
    this.props.pageIdxChange(this.props.pageNumber);
  };

  render() {
    return (
      <button
        className={
          `pageButton${this.props.pageNumber}` ===
          `pageButton${this.props.currentPage}`
            ? 'clickedButton'
            : ''
        }
        onClick={this._changeCurrentPage}
      >
        {this.props.pageNumber}
      </button>
    );
  }
}

export default Find_button;
