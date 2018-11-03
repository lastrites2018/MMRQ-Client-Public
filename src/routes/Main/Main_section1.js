import React, { Component } from "react";
import Slider from "react-slick";
import { MainSectionList1 } from "./Main_sections_list";


export default class Main_section1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2500
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.findData.map((find, idx) => {
            return( <MainSectionList1 find={find} key={idx} />
          )})}
        </Slider>
      </div>
    );
  }
}
