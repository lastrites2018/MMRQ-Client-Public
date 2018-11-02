import React, { Component } from "react";

class FileUploadTool extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input
              ref={ref => {
                this.uploadInput = ref;
              }}
              type="file"
            />
          </div>
          <div>
            <input
              ref={ref => {
                this.fileName = ref;
              }}
              type="text"
              placeholder="Enter the desired name of file"
            />
          </div>
          <br />
          <div>
            <button>Upload</button>
          </div>
          <img src={this.state.imageURL} alt="img" />
        </form>
      </div>
    );
  }
}

export default FileUploadTool;
