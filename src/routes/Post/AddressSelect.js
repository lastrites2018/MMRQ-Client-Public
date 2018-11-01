import { Form, Select, Option } from "informed";

import React, { Component } from "react";

class AddressSelect extends Component {
  render() {
    return (
      <div>
        <Form id="text-form">
          <label htmlFor="select-status">Relationship status:</label>
          <Select field="status" id="select-status">
            <Option value="" disabled>
              Select One...
            </Option>
            <Option value="single">Single</Option>
            <Option value="relationship">Relationship</Option>
            <Option value="complicated">Complicated</Option>
          </Select>
          <button type="submit">Submit</button>
        </Form>
        ;
      </div>
    );
  }
}

export default AddressSelect;
