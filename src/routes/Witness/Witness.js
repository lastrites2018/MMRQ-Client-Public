import React, { Component } from 'react';
import Witness_list from './Witness_list';
//import { Form, Select, Option} from 'informed';
import axios from 'axios';

import './Witness.css';

class Witness extends Component {
  constructor(props){ 
    super(props);

    this.state={
      witnessData: [],
      pageCount: 0,
     
    };
  };

  componentDidMount(){
    axios.get('http://localhost:5000/witness')
    .then( res => {
      this.setState({witnessData: res.data, pageCount: res.data.length / 10 })
    })
    .catch(err => console.log('에러났어 :::', err))
  };

  render(){
    return(
        <div className='witness' >
          
        <div className="witness-header">
            <h1 className="witness-header-subtitle">길 잃은 아이를 목격했어요</h1>
            <div>

              <form className="witness-header-form">
                <select>
                  <option value="울산">울산</option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                </select>

                <select>
                  <option value>a</option>
                  <option value>a</option>
                  <option value>a</option>
                  <option value>a</option>
                </select>

                <input className="witness-header-searchbar" type='text' placeholder='Search Here' />
                <input className="witness-header-button" type='image' src='https://ezanga-cdn.cdnedge.bluemix.net/images/icons/sem.png' alt=''></input>
                <button className="witness-header-write">글쓰기</button>
              </form>

            </div>
            
            
        </div> 

            <div className="witness-container">
                {
                    <Witness_list 
                      lists={this.state.witnessData} 
                      pageCounts={this.state.pageCount} 
                      listLength={this.state.witnessData.length} 
                      
                      />
                }
            </div>
            <br></br>

        </div>

    )
  }
}

export default Witness;
