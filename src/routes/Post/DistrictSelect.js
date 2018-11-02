import React, { Component } from "react";
import { Form, Select, Option } from "informed";

class DistrictSelect extends Component {
  render() {
    return (
      <Form
        id="districtSelect"
        onChange={e => {
          this.setState({
            currentDistrict: this.state.district[`${this.state.currentCity}`]
          });
          console.log(this.state.currentDistrict);
        }}
      >
        <Select field="status" id="select-status2">
          <Option value="" disabled>
            Select One...
          </Option>
        </Select>
      </Form>
    );
  }
}

export default DistrictSelect;
