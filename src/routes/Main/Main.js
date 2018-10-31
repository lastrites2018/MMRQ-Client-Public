import React, { Component } from "react";
import "./main.css";
import MainSection1 from "./main_section1"
import MainSection2 from "./main_section2"


export default class Main extends Component {
  render() {
    return (
      <div>
      <MainSection1 />
      <MainSection2 />
      </div>
    );
  }
}


