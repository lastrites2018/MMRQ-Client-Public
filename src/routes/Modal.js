import React, { Component } from 'react';

class modal_section extends Component {
  constructor() {
    super();

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }


  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.modalOpenSet()
    }
  }


  render() {
    // console.log(this.props.findData[this.props.findData[this.props.modalPage+1]])
    // console.log(this.props.findData[this.props.modalPage])
    return (
      <div>
      <div className="modalBack">
        <div className="modal" ref={this.setWrapperRef}>
          <button className="modalClose" onClick={this.props.modalOpenSet}>
            ╳
          </button>
            <div>{this.props.findData[this.props.modalPage].title}</div>
            <div>
            {this.props.findData[this.props.modalPage].citylocation}
            {this.props.findData[this.props.modalPage].districlocation}
            {this.props.findData[this.props.modalPage].detaillocation}
            </div>
            <div>
            {this.props.findData[this.props.modalPage].species} / 
            {this.props.findData[this.props.modalPage].sex}
            </div>
            <div>{this.props.findData[this.props.modalPage].postdate}</div>
            <div>{this.props.findData[this.props.modalPage].petimage}</div>
            <div>{this.props.findData[this.props.modalPage].feature}</div>
            <div>{this.props.findData[this.props.modalPage].contents}</div>
            <div>
            {this.props.findData[this.props.modalPage].writer} / 
            {this.props.findData[this.props.modalPage].email}

            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default modal_section;