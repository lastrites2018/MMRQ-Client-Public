import React, { Component } from 'react'
import dog from "./dog.jpg"

export default class main_section1 extends Component {
  render() {
    return (
        <div className="main_section1_post">
        <div className="notice_contents">
        <div>
        <p>멍멍이</p>
        <p>찾아주쇼</p>
        </div>
        </div>
        <img src={dog} className="main_pet_notice" alt="image" />
        </div>
    )
  }
}
