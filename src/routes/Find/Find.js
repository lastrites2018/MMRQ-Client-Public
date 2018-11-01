import React, { Component } from 'react'

class Find extends Component {

  render(){
    //src='https://ezanga-cdn.cdnedge.bluemix.net/images/icons/sem.png'
    const urlOne = 'https://images.unsplash.com/photo-1531263939119-4022c6cf273b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb9b96e25a0ac2b2891c106e43eb93b5&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb';
    //const urlTwo = "https://images.unsplash.com/photo-1530579807716-d82c0991629a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c708171e9cdb8ae7ed04f8e37e2808c&auto=format&fit=crop&w=668&q=80";

    return(
        <div className='witness' >
          
        <div className="witness-header">
            <div>부제: 우리 아이를 찾아주세요</div>
            <input className="witness-header-searchbar" type='text' placeholder='Search Here' />
            <input className="witness-header-button" type='image' src='https://ezanga-cdn.cdnedge.bluemix.net/images/icons/sem.png'></input>
            <button className="witness-header-write">글쓰기</button>
        </div> 

            <div class="witness-container row">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(value => 
                    <div className="witness-container-outer col-md-3" >
                            <div className="witness-container-inner">
                                <img className="witness-container-img" src={urlOne}  />
                            </div>
                    </div>)
                }
            </div>

            <br></br>

            {/* <div class="photoContainer2 row">
                {
                    [5,6,7,8].map(value => 
                    <div class="SecondRow col-md-3" style={{backgroundColor: 'white'}}>
                            <div style={{backgroundColor: 'skyblue', padding: '10px' }}>
                                <img src={urlTwo} style={{ width: '100%', height: 'auto'}} />
                            </div>
                    </div>)
                }
            </div> */}

        </div>

    )
  }
}

export default Find;
