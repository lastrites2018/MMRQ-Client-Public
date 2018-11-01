import React, { Component } from "react";
import { Redirect,withRouter } from "react-router-dom";


import dog from "./dog.jpg";

export default class main_section2 extends Component {
  constructor(props){
    super(props)
  }
  render() {

    const handleclick=()=>{
      return <Redirect to="/home" />
      // alert('asd')
    }

    return (
      <div className="main_section2_contents">
        {/*---------------------plz_find start----------------------*/}
        <div className="main_section2_plzfind_line" >
          <div className="main_section2_plzfind_title" onClick={handleclick}>
              <div className="main_section2_plzfind" >우리 아이를 찾아주세요</div>
              <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
              <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>
          </div>
          {/*---------------------article start----------------------*/}
          <div className="main_section2_posts">
            {/* render section---------------------------------------------------------------------------- */}
            <article>
              <img className="main_section2_post" src={dog} alt="image" />
              <div className="post_lost_location">
                실종장소: {this.props.findData[0].location}
              </div>
              <div className="post_lost_pet_inf">종류: {this.props.findData[0].petbreed} / {this.props.findData[0].petsex}</div>
              <div className="post_lost_pet_reward">사례금: {this.props.findData[0].reward}</div>
              <div className="post_lost_pet_post_date">Date: {this.props.findData[0].postdate}</div>
            </article>
            {/* render section---------------------------------------------------------------------------- */}
          </div>
          
         {/*---------------------article end----------------------*/}            
        </div>
        {/*---------------------plz_find end----------------------*/}

        {/*---------------------rescue start----------------------*/}
        <div className="main_section2_plzfind_line">
          <div className="main_section2_plzfind_title" onClick={handleclick}>
            <div className="main_section2_plzfind" >길 잃은 아이를 목격했어요</div>
            <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
            <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>
          </div>
          {/*---------------------article start----------------------*/}
          <div className="main_section2_posts">
            <article>
              <img className="main_section2_post" src={dog} alt="image" />
              <div className="post_lost_location">
                실종장소: {this.props.findData[0].location}
              </div>
              <div className="post_lost_pet_inf">종류: {this.props.findData[0].petbreed} / {this.props.findData[0].petsex}</div>
              <div className="post_lost_pet_post_date">Date: {this.props.findData[0].postdate}</div>
            </article>     
            {/*---------------------article end----------------------*/}
          </div>
        </div>
        {/*---------------------rescue end----------------------*/}
        
      </div>
    );
  }
}

// font-family: 'Jua', sans-serif;
