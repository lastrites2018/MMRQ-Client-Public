import React, { Component } from "react";
import Witness_list from "./Witness_list";
import WitnessHeader from "./Witness_header";
import axios from "axios";

import "./Witness.css";

class Witness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      witnessData: [],
      pageCount: 0
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/witness")
      .then(res => {
        this.setState({
          witnessData: res.data,
          pageCount: res.data.length / 15
        });
      })
      .catch(err => console.log("error description:::", err));
  }

  filterSearch = (city, district) => {
    let onlyCityURL = `http://localhost:5000/witness?citylocation=${city}`;
    let cityDistrictURL = `http://localhost:5000/witness?citylocation=${city}&districtlocation=${district}`;

    if (!district) {
      axios
        .get(onlyCityURL)
        .then(res => {
          this.setState(prevState => ({
            witnessData: res.data,
            pageCount: res.data.length / 15
          }));
        })
        .catch(err => console.log("error description:::", err));
    } else {
      axios
        .get(cityDistrictURL)
        .then(res => {
          console.log(res);
          this.setState(prevState => ({
            ...prevState,
            witnessData: res.data,
            pageCount: res.data.length / 15
          }));
        })
        .catch(err => console.log("error description:::", err));
    }
  };

  render() {
    if (this.state.witnessData.length === 0) {
      return <div>loading...</div>;
    }
    console.log(this.state.witnessData);
    return (
      <div className="witness">
        <div className="witness-header">
          <WitnessHeader filterSearch={this.filterSearch} />
        </div>

        <div className="witness-container">
          {
            <Witness_list
              lists={this.state.witnessData}
              pageCounts={Math.ceil(this.state.pageCount)}
              listLength={this.state.witnessData.length}
            />
          }
        </div>
        <br />
      </div>
    );
  }
}

export default Witness;
