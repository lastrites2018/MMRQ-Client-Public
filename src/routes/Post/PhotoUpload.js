import React, { Component } from "react";

class PhotoUpload extends Component {
  fileSelectHandler = event => {
    console.log(event.target.files[0]);
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectHandler} />
      </div>
    );
  }
}

export default PhotoUpload;
