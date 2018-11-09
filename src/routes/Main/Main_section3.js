import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MainSectionList3 } from "./Main_sections_list";


export default class Main_section3 extends Component {
  
  render() {
    return (
      <div className="main_section2_contents">
        <div className="main_section2_plzfind_line" >
        
          <div className="main_section2_plzfind_title">
            <Link to ="/find">
              <div className="main_section2_plzfind">길 잃은 아이를 목격했습니다</div>
              <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
              <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>
            </Link>
          </div>
        
          <div className="main_section2_posts">
           {this.props.witnessData.map((witness, idx)=>{
             return <MainSectionList3 witness={witness} key={idx} />;
           })}
          </div>
           
        </div>
      </div>
    );
  }
}

