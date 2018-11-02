import React, { Component } from "react";
import Slider from "react-slick";
import { Main_section1_list } from "./main_sections_list";


export default class Main_slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.findData.map((find, idx) => {
            return <Main_section1_list find={find} key={idx} />;
          })}
        </Slider>
      </div>
    );
  }
}
