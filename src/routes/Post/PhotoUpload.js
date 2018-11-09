import React, { Component } from "react";
import axios from "axios";

class PhotoUpload extends Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
    // this.props.makingImage(event.target.files[0]);
  };
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("profile", this.state.selectedFile, this.state.selectedFile.name); //"profile" 이 부분은, 저장소에서 받기로 한 명칭과 같아야함
    axios
      .post("http://34.217.9.241/fileupload", fd, {
        onUploadProgress: progressEvent => {
          console.log(
            "Upload Progress: " +
              (progressEvent.loaded / progressEvent.total) * 100 +
              "%"
          );
        }
      })
      .then(res => {
        console.log(res.data, "resssponsive successs");
        this.props.makingImage(res.data.url);
      });
  };

  render() {
    return (
      <div className="photoUpload">
        <input type="file" onChange={this.fileSelectedHandler} name="profile" />
        <button onClick={this.fileUploadHandler}>사진 업로드</button>
      </div>
    );
  }
}

export default PhotoUpload;
