import React, { Component } from "react";

class PhotoUpload extends Component {
  state = {
    selectedFile: null,
    base64Img: null
  };

  makeBaseImg = () => {
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        this.setState({
          base64Img: reader.result
        });
        this.props.makingImage(reader.result);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  sendImageToPost = () => {
    this.props.makingImage(this.state.base64Img);
  };
  selectOrDeleteImg = () => {
    if (!this.props.photoSelectedOrNot) {
      return (
        <div>
          <input type="file" onChange={this.makeBaseImg} />
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <input type="file" onChange={this.makeBaseImg} />
          </div>
          <div>
            <button className="cancelPhoto" onClick={this.props.cancelPhoto}>
              취소
            </button>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div className="photoInput">{this.selectOrDeleteImg()}</div>;
  }
}

export default PhotoUpload;
