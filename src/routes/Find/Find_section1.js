import React, { Component } from 'react';

import Modal_Section from "../Modal/Modal_section";



class Find_section1 extends Component {
  
  render() {
    return ( 
      <div>
        {
        this.props.modalStatus ?
        <Modal_Section 
        modalStatus={this.props.modalStatus}
        modalOpenChange={this.props.modalOpenChange}
        modalDataChange={this.props.modalDataChange}
        modalData={this.props.modalData}
        />
        :
        null
        }
          <div className="find_section2_posts">
            {this.props.findData.map((find, idx) => <div >
                <article className="find_article" id={idx} onClick={()=>this.props.modalDataChange(find)}>
                  <img className="find_section2_post" src={`${find.petimage}`} alt="" />
                  <div className="find_Article_Title">
                    {find.title.length > 24
                      ? `${find.title.slice(0, 24)} ...`
                      : find.title}
                  </div>
                  <div className="article_location"> 실종장소: {find.location}</div>
                  <div className="article_pet_inf">종류: {find.species} / {find.sex}</div>
                  <div className="article_pet_reward">사례금: {find.reward}</div>
                  <div className="article_pet_post_date">Date: {find.postdate}</div>
                </article>
            </div>)}
          </div>
      </div>)
  }
}

export default Find_section1;


