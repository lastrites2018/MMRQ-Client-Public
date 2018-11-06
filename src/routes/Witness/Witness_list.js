import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Pagination from "react-js-pagination";

class Witness_list extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      index: null,
      elementGetter: null,
      activePage: 0,
      perPageData: this.props.lists
    };
  }

  onOpenModal = (idx, element) => {
    this.setState({ open: true, index: idx, elementGetter: element });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handlePageChange = pageNumber => {
    let startIndex = pageNumber * 15 - 15;
    let endIndex = pageNumber * 15;
    this.setState({
      activePage: pageNumber,
      perPageData: this.props.lists.slice(startIndex, endIndex)
    });
  };

  componentDidMount = () => {
    this.setState({ perPageData: this.props.lists.slice(0, 15) });
  };

  render() {
    if (this.state.perPageData.length === 0) {
      return <div>loading..</div>;
    }

    return (
      <div className="witness-container-outline">
        {this.state.perPageData.map((element, idx) => {
          return (
            <div
              className="witness-container-list"
              onClick={() => this.onOpenModal(idx, element)}
            >
              <img
                className="witness-container-img"
                src={element.petimage}
                alt=""
              />
              <div className="witness-container-contents">{element.id}</div>
              <div className="witness-container-title">{element.title}</div>
              {/* <div className="witness-container-contents">{element.feature}</div> */}
            </div>
          );
        })}

        <Modal
          className="witness-modal"
          open={this.state.open}
          onClose={this.onCloseModal}
          center
        >
          {this.state.elementGetter ? (
            <h2>{this.state.elementGetter.title}</h2>
          ) : (
            "loading..."
          )}
          <div>
            <div className="witness-modal-info">
              기본정보
              {this.state.elementGetter ? (
                <div>
                  {" "}
                  목격장소: {this.state.elementGetter.citylocation}{" "}
                  {this.state.elementGetter.districtlocation}{" "}
                </div>
              ) : (
                "loading..."
              )}
              {this.state.elementGetter ? (
                <div> 이름: {this.state.elementGetter.petname} </div>
              ) : (
                "loading..."
              )}
              {this.state.elementGetter ? (
                <div> 견종: {this.state.elementGetter.petbreed} </div>
              ) : (
                "loading..."
              )}
              {this.state.elementGetter ? (
                <div> 성별: {this.state.elementGetter.petsex} </div>
              ) : (
                "loading..."
              )}
              {this.state.elementGetter ? (
                <div> 작성자: {this.state.elementGetter.writer} </div>
              ) : (
                "loading..."
              )}
              {this.state.elementGetter ? (
                <div> 연락처: {this.state.elementGetter.handphone} </div>
              ) : (
                "loading..."
              )}
            </div>
            {this.state.elementGetter ? (
              <img
                className="witness-modal-img"
                src={this.state.elementGetter.petimage}
                alt=""
              />
            ) : (
              "loading..."
            )}
            {this.state.elementGetter ? (
              <div> 상세정보: {this.state.elementGetter.contents} </div>
            ) : (
              "loading..."
            )}
          </div>
        </Modal>

        <Pagination
          activePage={this.state.activePage}
          totalItemsCount={this.props.listLength}
          pageRangeDisplayed={this.props.pageCounts}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Witness_list;
