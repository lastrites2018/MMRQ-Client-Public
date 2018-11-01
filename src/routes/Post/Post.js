import React, { Component } from "react";
import "./Post.css";
import AddressSelect from "./AddressSelect";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClassification: ""
    };
  }
  classificationSelect = event => {
    this.setState({ currentClassification: event.target.value });
  };
  render() {
    return (
      <div className="post_body">
        <div className="classificationButton">
          <select
            id="classificationSelect"
            onChange={this.classificationSelect.bind(this)}
          >
            <option value="">Select One...</option>
            <option value="찾아주세요">찾아주세요</option>
            <option value="목격했어요">목격했어요</option>
          </select>
        </div>
        <div className="post_picture">사진</div>
        <div className="missingPlace">실종장소</div>
        <AddressSelect />
        <div className="exactLocation">
          <input type="text" name="exactLocation" value="상세 주소" />
        </div>
        <div className="dogInfo">
          <span className="species">
            종류: <select className="speciesSelect" />
          </span>
          <span className="sex">
            성별: <select className="sexSelect" />{" "}
          </span>
          <span className="reward">
            사례금: <input type="text" name="reward" value="사례금" />
          </span>
        </div>
        <div className="explanation">
          <input type="text" name="explanation" value="상세 설명" />
        </div>
      </div>
    );
  }
}

export default Post;
