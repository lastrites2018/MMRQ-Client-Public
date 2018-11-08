import React, { Component } from "react";
import { Link } from "react-router-dom";


class MainSectionList1 extends Component {
  render() {
    return (
      <div>
        <div className="main_section1_post" >
        <div className="notice_contents">
        <div className="notice_contents_back">
        <div className="main_section1_post_back">
          <p className="pet_name">{this.props.find.petname}<br /> 찾아주세요!!</p>
        </div>
        <p className="pet_breed">{`${this.props.find.species} / ${this.props.find.sex}`}</p>
        <p className="pet_lost_location">{this.props.find.location}</p>
        <p className="pet_post_contents">
              {
                this.props.find.contents.length > 130 ? 
                `${this.props.find.contents.slice(0,130)} ...` : this.props.find.contents
              }
        </p>
        </div>
        </div>
        <img src={this.props.find.petimage} className="main_pet_notice" alt=""/>
        </div>
      </div>
    );
  }
}



class MainSectionList2 extends Component {
  
  pageChange = (e) => {
    console.log(this.props)
    // console.log("e.target.id",Number(e.target.id[e.target.id.length-1]))
    var page = Number(e.target.id[e.target.id.length - 1]) || 0
    this.props.modalPageChange(page)
    this.props.modalOpenSet()
  }

  render() {
    return (
      <article className="mainAticle">
        <img className="main_section2_post" src={`${this.props.find.petimage}`}/>
        <div className="article_title"key={this.props.idx}>
        {
          this.props.find.title.length > 24 ? 
          `${this.props.find.title.slice(0,24)} ...` : this.props.find.title
        }
        </div>
        <div className="article_location" key={this.props.idx}>실종장소: {this.props.find.location}</div>
        <div className="article_pet_inf" key={this.props.idx}>종류: {this.props.find.species} / {this.props.find.sex}</div>
        <div className="article_pet_reward" key={this.props.idx}>사례금: {this.props.find.reward}</div>
        <div className="article_pet_post_date" key={this.props.idx}>Date: {this.props.find.postdate}</div>
      </article>
      )}
}


class MainSectionList3 extends Component {
  render() {
    // console.log(this.props.witness)
    // console.log(this.props.witness.title);
    return (
      <Link to="/find">
        <article>
            <img className="main_section2_post" src={`${this.props.witness.petimage}`} alt="idx" />
            {/* <div className="article_title">{this.props.witness.title}</div> */}
            <div className="article_title">{
              this.props.witness.title.length > 24 ? 
              `${this.props.witness.title.slice(0,24)} ...` : this.props.witness.title
            }
            </div>
            <div className="article_location">목격장소: {this.props.witness.location}</div>
            <div className="article_pet_inf">종류: {this.props.witness.species} / {this.props.witness.sex}</div>
            <div className="article_pet_post_date">Date: {this.props.witness.postdate}</div>
        </article>
      </Link>
    );
  }
}

export {
  MainSectionList1, 
  MainSectionList2, 
  MainSectionList3
}