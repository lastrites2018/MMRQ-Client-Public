import React, { Component } from 'react';
import Modal from "./Modal"
import { Link } from "react-router-dom";


class Find_section1 extends Component {
  state = {
    modalOpen: true,
  }
  render() {
    return <div>
        {this.state.modalOpen ? <Modal /> : null}

        <div className="find_section2_posts">
          {this.props.findData.map((find, idx) => <div>
              <Link to={`/find/?=${idx}`}>
                <article className="find_article" key={idx}>
                  <img className="find_section2_post" src={`${find.petimage}`} alt="" />
                  <div className="article_title">
                    {find.title.length > 24
                      ? `${find.title.slice(0, 24)} ...`
                      : find.title}
                  </div>
                  <div className="article_location">
                    실종장소: {find.location}
                  </div>
                  <div className="article_pet_inf">
                    종류: {find.species} / {find.sex}
                  </div>
                  <div className="article_pet_reward">
                    사례금: {find.reward}
                  </div>
                  <div className="article_pet_post_date">
                    Date: {find.postdate}
                  </div>
                </article>
              </Link>
            </div>)}
        </div>
      </div>;
  }
}

export default Find_section1;

