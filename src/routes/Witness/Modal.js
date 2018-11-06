import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  // modalOff = () => {
  //   this.props.modalOpenSet()
  //   this.props.backGroundSet()
  // }

  render() {
    // {console.log(this.props.backGroundSet)}
    // {console.log(this.props.modalOpenSet)}
    // if (this.props === 0 ) {
    //   return <div>loding....</div>;
    // }
    return <div className="modalBack" />;
  }
}

export default Modal;
