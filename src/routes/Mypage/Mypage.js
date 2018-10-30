import React, { Component } from 'react'

import { Redirect } from 'react-router-dom';

export default class Mypage extends Component {
  render() {
    const logged = false;
    return (
      <div>
          {
            !logged && <Redirect to="/login" />
          }
      </div>
    )
  }
}
