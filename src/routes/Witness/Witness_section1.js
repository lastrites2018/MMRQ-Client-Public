import React, { Component } from 'react';
import Modal from "./Modal"
import { Link } from "react-router-dom";


class WitnessSection1 extends Component {
  state = {
    modalOpen: true,
  }
  render() {
    return <div>
        {this.state.modalOpen ? <Modal /> : null}

        <div className="witness_section2_posts">
          {this.props.witnessData.map((witness, idx) => <div>
              <Link to={`/witness/?=${idx}`}>
                <article className="witness_article" key={idx}>
                  <img className="witness_section2_post" src={`${witness.petimage}`} alt="" />
                  <div className="article_title">
                    {witness.title.length > 24
                      ? `${witness.title.slice(0, 24)} ...`
                      : witness.title}
                  </div>
                  <div className="article_location">
                    실종장소: {witness.location}
                  </div>
                  <div className="article_pet_inf">
                    종류: {witness.species} / {witness.sex}
                  </div>
                  <div className="article_pet_reward">
                    사례금: {witness.reward}
                  </div>
                  <div className="article_pet_post_date">
                    Date: {witness.postdate}
                  </div>
                </article>
              </Link>
            </div>)}
        </div>
      </div>;
  }
}

export default WitnessSection1;

