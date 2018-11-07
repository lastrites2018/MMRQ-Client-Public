import React, { Component } from 'react';

import Modal_section from "../Modal_section";



class Witness_section1 extends Component {
  
  render() {
    return ( 
      <div>
        {
        this.props.modalStatus ?
        <Modal_section 
        modalStatus={this.props.modalStatus}
        modalOpenChange={this.props.modalOpenChange}
        modalDataChange={this.props.modalDataChange}
        modalData={this.props.modalData}
        />
        :
        null
        }
          <div className="witness_section2_posts">
            {this.props.witnessData.map((witness, idx) => <div >
                <article className="witness_article" id={idx} onClick={()=>this.props.modalDataChange(witness)}>
                  <img className="witness_section2_post" src={`${witness.petimage}`} alt="" />
                  <div className="article_title">
                    {witness.title.length > 24
                      ? `${witness.title.slice(0, 24)} ...`
                      : witness.title}
                  </div>
                  <div className="article_location"> 실종장소: {witness.location}</div>
                  <div className="article_pet_inf">종류: {witness.species} / {witness.sex}</div>
                  <div className="article_pet_reward">사례금: {witness.reward}</div>
                  <div className="article_pet_post_date">Date: {witness.postdate}</div>
                </article>
            </div>)}
          </div>
      </div>)
  }
}

export default Witness_section1;


