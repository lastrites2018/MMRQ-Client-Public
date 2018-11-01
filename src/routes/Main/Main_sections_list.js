import React, { Component } from 'react';

class Main_section1_list extends Component {
  render() {
    return (
      <div>
        asdasdasdasd
      </div>
    );
  }
}


class Main_section2_list1 extends Component {
  render() {
    return (
      <article>
          <img className="main_section2_post" src={dog} alt="image" />
          <div className="post_lost_location">
            실종장소: {this.props.findData[0].location}
          </div>
          <div className="post_lost_pet_inf">종류: {this.props.findData[0].petbreed} / {this.props.findData[0].petsex}</div>
          <div className="post_lost_pet_reward">사례금: {this.props.findData[0].reward}</div>
          <div className="post_lost_pet_post_date">Date: {this.props.findData[0].postdate}</div>
      </article>
    );
  }
}


class Main_section2_list2 extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export {
  Main_section1_list, 
  Main_section2_list1, 
  Main_section2_list2
}