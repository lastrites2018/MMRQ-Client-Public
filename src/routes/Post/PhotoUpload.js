import React, { Component } from "react";
import axios from "axios";

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
  makeBaseImg = () => {
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        this.setState({
          base64Img: reader.result
        });
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  fileUploadHandler = () => {};
  render() {
    return (
      <div>
        <input
          type="file"
          onChange={async e => {
            await this.fileSelectHandler(e);
            await this.makeBaseImg();
          }}
        />
        {console.log(this.state.base64Img)}
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default PhotoUpload;
