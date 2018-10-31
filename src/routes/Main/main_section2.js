import React, { Component } from "react";
import dog from "./dog.jpg";

export default class main_section2 extends Component {
  render() {
    return (
      <div className="main_section2_contents">
        {/*-------------plz_find start--------------*/}
        <div className="main_section2_plzfind_Line">
            <div className="main_section2_plzfind">찾아주세요</div>
            <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
            <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>
          
          {/*-------------article start--------------*/}
          <div className="main_section2_posts">
            <article>
              <img className="main_section2_post" src={dog} alt="image" />
              <div className="post_lost_location">
                서울특별시 은평구 구산동 구산치안센터앞
              </div>
              <div className="post_lost_pet_inf">푸들/수컷</div>
              <div className="post_lost_pet_reward">사례:200,000</div>
              <div className="post_lost_pet_post_date">Date: 2018.10.10</div>
            </article>            
          </div>
         {/*-------------article end--------------*/}            
        </div>
        {/*-------------plz_find end--------------*/}

        {/*-------------plz_rescue start--------------*/}
        <div className="main_section2_plzfind_Line">
          <div className="main_section2_plzfind">주인을 찾습니다</div>
          <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
          <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>

          {/*-------------article start--------------*/}
          <div className="main_section2_posts">
            <article>
              <img className="main_section2_post" src={dog} alt="image" />
              <div className="post_lost_location">
                서울특별시 은평구 구산동 구산치안센터앞
              </div>
              <div className="post_lost_pet_inf">푸들/수컷</div>
              <div className="post_lost_pet_reward">사례:200,000</div>
              <div className="post_lost_pet_post_date">Date: 2018.10.10</div>
            </article>
            {/*-------------article end--------------*/}
          </div>
        </div>
        {/*-------------plz_rescue end--------------*/}
        
      </div>
    );
  }
}

// font-family: 'Jua', sans-serif;
