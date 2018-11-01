import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Form, Select, Option} from 'informed';
import axios from 'axios';

import './Witness.css';

class Witness extends Component {
  constructor(props){ 
    super(props);

    this.state={
      open: false,
      serverData: [],
    };
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  componentDidMount(){
    axios.get('http://localhost:3000/witness')
    .then( res => {
      console.log('check check check data', res);
      this.setState({serverData: res.data})
    })
    .catch(err => console.log('에러났쭁', err))
  }

  render(){
    // const urlOne = 'https://picsum.photos/200/300';
    // const tempImg = 'https://images.unsplash.com/photo-1528113513525-92e3d53bc9ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16d58d12bcc952da16c4b4d670638202&auto=format&fit=crop&w=2734&q=80';

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

            <div className="witness-container row">
                {
                    this.state.serverData.map((element, idx) => 
                    <div className="witness-container-outer col-md-4" >
                            <div className="witness-container-inner" onClick={this.onOpenModal} >
                                <img className="witness-container-img" src={element.url} alt='' />
                            </div>
                              <Modal classNames='witness-modal' open={this.state.open} onClose={this.onCloseModal} center>
                                <h2>{element.title}</h2>
                                <div>
                                  <img className='witness-modal-img' src={element.url} alt='' /> 
                                  <p>
                                    이름: 뚝섬
                                    나이: 0살
                                    개종: 허스키
                                    잃어버린곳: 코드스테이츠
                                    사례금: 없음
                                  </p>
                                </div>
                              </Modal>
                    </div>)
                }
            </div>

            <br></br>

        </div>

    )
  }
}

export default Witness;
