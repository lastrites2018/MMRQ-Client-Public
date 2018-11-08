import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import "./Modal.css"


class Modal_section extends Component {

  openModal = () => {
    this.props.modalDataChange()
  }

  closeModal = () => {
    this.props.modalOpenChange()
  }

  render() {
    console.log(this.props.modalData)
    return (
      <div>
        <Modal className='modalContainer' open={this.props.modalStatus} onClose={this.closeModal} center>
          <div className="modalContents">
            <div className="modalInfo">
              {/* <div className="modalInfoTitle"><h2>{`[${this.props.modalData.citylocation}] ${this.props.modalData.title}`}</h2></div> */}
              <div className="modalInfoTitle"><h2><span className="locationInTitle">{`[${this.props.modalData.citylocation}]`}</span>{this.props.modalData.title}</h2></div>
              <div className="modalInfo">
              <table>
                <tr>
                  <td className="infoTitle">이름</td>
                  <td className="infoContents">{this.props.modalData.petname}</td>
                  <td className="infoTitle">장소</td>
                  <td className="infoContents">{this.props.modalData.citylocation} {this.props.modalData.districtlocation}</td>
                </tr>
                <tr></tr>
                <tr>
                  <td className="infoTitle">견종</td>
                  <td className="infoContents">{this.props.modalData.species}</td>
                  <td className="infoTitle">날짜</td>
                  <td className="infoContents">{this.props.modalData.postdate.slice(0,10)}</td>
                </tr>
                <tr></tr>
                <tr>
                  <td className="infoTitle">성별</td>
                  <td className="infoContents">{this.props.modalData.sex}</td>
                  <td className="infoTitle">연락처</td>
                  <td className="infoContents">{this.props.modalData.handphone}</td>
                </tr>
                <tr></tr>
                <tr>
                  <td className="infoTitle">상세 주소</td>
                  <td colspan="3" className="infoContents">{this.props.modalData.citylocation} {this.props.modalData.districtlocation} {this.props.modalData.detaillocation}</td>
                </tr>
              </table>
                <img className='infoModalImg' src={this.props.modalData.petimage} alt='' />
                <div className="modalInfoDescribe"> {this.props.modalData.contents} </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Modal_section;