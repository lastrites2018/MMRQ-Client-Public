import React, { Component } from "react";
import "./Post.css";
import AddressSelect from "./AddressSelect";

class Post extends Component {
  state = {
    currentClassification: "",
    dogSpecies: [
      "골든 두들",
      "골든 리트리버",
      "그레이 하운드",
      "그레이트 데인",
      "그레이트 스위스 마운틴 도그",
      "그레이트 피레니즈",
      "그린란드견",
      "그리스 헤어하운드",
      "기슈견",
      "까나리오",
      "코통 드 튈레아르",
      "나폴리탄 마스티프",
      "노르위치 테리어",
      "노포크 테리어",
      "뉴펀들랜드",
      "닥스훈트",
      "달마시안",
      "도베르만",
      "도사견",
      "라사압소",
      "래브라도 리트리버",
      "마스티프",
      "말티즈",
      "맨체스터 테리어",
      "미니어처 불테리어",
      "미니어처 핀셔",
      "믹스견",
      "바셋 하운드",
      "버니즈 마운틴 독",
      "버들링턴 테리어",
      "보더콜리",
      "보스턴 테리어",
      "복서",
      "불도그",
      "불테리어",
      "비글",
      "비숑 프리제",
      "빠삐용",
      "사모예드",
      "삽살개",
      "샤페이",
      "세인트 버나드",
      "셔틀랜드 쉽독",
      "셰퍼드",
      "슈나우저",
      "스피츠",
      "시바견",
      "시베리안 허스키",
      "시추",
      "실키 테리어",
      "아메리칸 불리",
      "아키타견",
      "요크셔 테리어",
      "웰시 코기",
      "진돗개",
      "차우차우",
      "치와와",
      "코카 스파니엘",
      "콜리",
      "퍼그",
      "페키니즈",
      "포메라니안",
      "푸들, 풍산개",
      "프렌치 불도그",
      "핏 불 테리어"
    ]
  };
  classificationSelect = event => {
    this.setState({ currentClassification: event.target.value });
  };
  missingOrFoundPlace = () => {
    if (this.state.currentClassification === "찾아주세요") {
      return <div className="missngPlace">실종장소</div>;
    } else if (this.state.currentClassification === "목격했어요") {
      return <div className="iFound">목격장소</div>;
    } else if (this.state.currentClassification === "") {
      return <div className="no">장소</div>;
    }
  };
  reward = () => {
    if (this.state.currentClassification === "찾아주세요") {
      return (
        <span className="reward">
          사례금:{" "}
          <input type="text" name="reward" placeholder="금액" size="8" /> 만 원
        </span>
      );
    }
  };

  render() {
    return (
      <div className="postBody">
        <div className="classificationButton">
          <span>유형을 선택해주세요</span>
          <select
            id="classificationSelect"
            onChange={this.classificationSelect}
          >
            <option value="">Select One...</option>
            <option value="찾아주세요">찾아주세요</option>
            <option value="목격했어요">목격했어요</option>
          </select>
        </div>
        <div className="postPictureBody" />
        {this.missingOrFoundPlace()}
        <AddressSelect />
        <div className="exactLocation">
          <input type="text" name="exactLocation" size="100" />
        </div>
        <div className="dogInfo">
          <span className="species">
            견종:
            <select className="speciesSelect">
              <option value="">Select One...</option>
              {this.state.dogSpecies.map((dog, index) => {
                return (
                  <option value={dog} key={index}>
                    {dog}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="sex">
            성별:
            <select className="sexSelect">
              <option value="">Select One...</option>
              <option value="male">남</option>
              <option value="female">여</option>
            </select>
          </span>
          {this.reward()}
        </div>
        <div className="explanation">
          <input type="text" name="explanation" size="100" />
        </div>
      </div>
    );
  }
}

export default Post;
