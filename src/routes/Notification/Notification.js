import React, {Component} from 'react';
import './Notification.css';

class Notification extends Component{
    // constructor(){
    //     super();
    // }
    render(){
        //src='https://ezanga-cdn.cdnedge.bluemix.net/images/icons/sem.png'
        const urlOne = 'https://picsum.photos/200/300';
        const urlTwo = "https://images.unsplash.com/photo-1530579807716-d82c0991629a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c708171e9cdb8ae7ed04f8e37e2808c&auto=format&fit=crop&w=668&q=80";

        return(
            <div className='notification' >
              
            <div className="notification-header">
                <input className="notification-header-searchbar" type='text' placeholder='Search Here' />
                <input className="notification-header-button" type='image' src='https://ezanga-cdn.cdnedge.bluemix.net/images/icons/sem.png'></input>
                <span>목격했어요</span>
            </div> 

                <div class="notification-container row">
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(value => 
                        <div className="notification-container-outer col-md-3" >
                                <div className="notification-container-inner">
                                    <img className="notification-container-img" src={urlOne}  />
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

export default Notification;