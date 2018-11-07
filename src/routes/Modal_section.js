import React, { Component } from 'react';
import Modal from "react-responsive-modal";


class Modal_section extends Component {

  openModal = () => {
    this.props.modalDataChange()
  }

  closeModal = () => {
    this.props.modalOpenChange()
  }

  render() {
    return (
      <div>
        <Modal className='find-modal' open={this.props.modalStatus} onClose={this.closeModal} center>
          {this.props.modalData ? <h2>{this.props.modalData.title}</h2> : 'loading...'}
          <div>
            <div className="find-modal-info">
              기본정보
              <div> 목격장소: {this.props.modalData.citylocation}  {this.props.modalData.districtlocation} </div>
              <div> 이름: {this.props.modalData.petname} </div>
              <div> 견종: {this.props.modalData.species} </div>
              <div> 성별: {this.props.modalData.sex} </div>
              <div> 작성자: {this.props.modalData.writer} </div>
              <div> 연락처: {this.props.modalData.handphone} </div>
            </div>
            <img className='find-modal-img' src={this.props.modalData.petimage} alt='' />
            <div> 상세정보: {this.props.modalData.contents} </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Modal_section;