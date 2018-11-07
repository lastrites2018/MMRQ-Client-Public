import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MainSectionList2 } from "./Main_sections_list"

import Modal_section from "../Modal_section";


export default class Main_section2 extends Component {

  render() {

    return (
      <div className="main_section2_contents">
        <div className="main_section2_plzfind_line" >

        {/*---------------------plz_find_title start----------------------*/}
          <div className="main_section2_plzfind_title">
            <Link to ="/find">
              <div className="main_section2_plzfind">우리 아이를 찾아주세요</div>
              <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
              <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>
            </Link>
          </div>
        {/*---------------------plz_find_title start----------------------*/}
        
        {/*---------------------article start----------------------*/}
          <div className="main_section2_posts">
           {this.props.findData.map((find, idx)=>{
             return (
               <Link to={"/find"} onClick={() =>this.props.modalDataChange(find)}>
                {/* <Modal_section 
                  modalData={this.props.modalData}
                  modalStatus={this.props.modalStatus}
                  modalOpenChange={this.props.modalOpenChange}
                  modalDataChange={this.props.modalDataChange}
                /> */}
                 <MainSectionList2 find={find} key={idx}/>
              </Link>  
             )})}
          </div>
        {/*---------------------article end----------------------*/}            
        </div>
      </div>
    );
  }
}

// font-family: 'Jua', sans-serif;
