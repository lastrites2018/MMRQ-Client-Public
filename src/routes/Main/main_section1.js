import React, { Component } from 'react'
import { Main_section1_list } from "./Main_sections_list";


import dog from "./dog.jpg"

export default class main_section1 extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.findData[0].petimage)
    return(
      <div>

          {this.props.findData.map((find, idx) => {
            return <Main_section1_list find={find} key={idx} />;
          })}

      </div>
    )
  }
}

    //   return(
    //   <div>
    //     <div className="main_section1_post">
    //       >{this.props.findData.map((find, idx) => {
    //         return <Main_section1_list find={find} key={idx} />;
    //       })}
    //     </div>
    //   </div>
    // )
    

    // return <div>
        // <div className="main_section1_post">
        //   <div className="notice_contents">
        //     <div className="notice_contents_back">
        //       <p className="pet_name">
        //         <a>{this.props.findData[0].petname}</a> 찾아주세요!!
        //       </p>
        //       <p className="pet_breed">{`${this.props.findData[0].petbreed} / ${this.props.findData[0].petsex}`}</p>
        //       <p className="pet_lost_location">
        //         <a style={{ borderBottom: "2px solid" }}>
        //           {this.props.findData[0].location}
        //         </a>
        //       </p>
        //       <p className="pet_post_contents">
        //         {this.props.findData[0].contents}
        //       </p>
        //     </div>
        //   </div>
        //   <img src={`${this.props.findData[0].petimage}`} className="main_pet_notice" alt="image" />
        // </div>
    //   </div>;