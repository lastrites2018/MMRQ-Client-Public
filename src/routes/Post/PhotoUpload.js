import React, { Component } from "react";
import axios from "axios";
import base64Img from "base64-img";

class PhotoUpload extends Component {
  state = {
    selectedFile: null,
    base64Img: null
  };

  fileSelectHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  fileUploadHandler = () => {};
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default PhotoUpload;
