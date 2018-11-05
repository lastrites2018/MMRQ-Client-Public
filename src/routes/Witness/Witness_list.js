import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import Pagination from "react-js-pagination";

class Witness_list extends Component{ 
    constructor(props){
        super(props);
      
        this.state ={
            open: false,
            index: null,
            elementGetter: null,
            activePage: 0,
            startOffset: 0,
            endOffset: 10,
            perPageData: [],
        };
    };

    onOpenModal = (idx, element) => {
        this.setState({open: true, index: idx, elementGetter: element})
    };
    
    onCloseModal = () => {
        this.setState({open: false})
    };

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber, 
                       startOffset: pageNumber * 10 - 10, 
                       endOffset: pageNumber * 10, 
                       perPageData: this.props.lists.slice(this.state.startOffset, this.state.endOffset)
        });
    };

    componentDidMount = () =>{
        
    };

    render(){ 
        if(!this.state){
            return <div>loading..</div>
        };

         console.log('startOffset:::', this.state.startOffset);
         console.log('endOffset:::' , this.state.endOffset);
        // console.log('perPage::::', this.state.perPage);
        // console.log('listCount::::', this.props.listLength);
        // console.log('pageCount:::;', this.props.pageCounts);

    return (
        <div>
            {
                this.state.perPageData.map((element, idx) => {
                   return ( 
                                 <div className="witness-container-list" onClick={() => this.onOpenModal(idx,element)} >
                                    <img className="witness-container-img" src={element.petimage} alt='' />
                                    <div className="witness-container-contents">{element.id}</div>
                                    <div className="witness-container-contents">{element.traits}</div>
                                 </div>      
                )})
            }

            <Modal classNames='witness-modal' open={this.state.open} onClose={this.onCloseModal} center>
                            {this.state.elementGetter ? <h2>{this.state.elementGetter.title }</h2> : 'loading...' }
                                <div>
                                    {this.state.elementGetter ? <img className='witness-modal-img' src={this.state.elementGetter.petimage} alt='' /> : 'loading...'}
                                        <div>
                                            이름: 나무
                                            나이: 0살
                                            개종: 허스키
                                            잃어버린곳: 코드스테이츠
                                            사례금: 없음
                                        </div>
                                </div>
             </Modal>

            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={this.props.listLength}
                pageRangeDisplayed={this.props.pageCounts}
                onChange={this.handlePageChange} />

        </div>
    );
  };
        
};

export default Witness_list;