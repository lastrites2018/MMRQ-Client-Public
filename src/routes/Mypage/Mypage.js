import React, { Component } from 'react'
import axios from 'axios'
import MyPageSection1 from './Mypage_section1'
import MyPageSection2 from './Mypage_section2'
import Api from '../../util/Api'

import _ from 'lodash'
import './Mypage.css'

class Mypage extends Component {
  state = {
    userInfo: this.props.userInfo,
    personalFindData: [],
    personalWitnessData: []
  }

  componentDidMount() {
    console.log(this.state.userInfo)
    axios
      .get(Api.find)
      .then(res => {
        const reversedData = _.reverse(res.data)
        console.log('reversedData', reversedData)
        const userData = []
        reversedData.map(data => {
          if (data.email === this.state.userInfo.email) {
            userData.push(data)
          }
        })
        this.setState({
          personalFindData: userData
        })
      })
      .catch(err => console.log(err))

    axios
      .get(Api.witness)
      .then(res => {
        const reversedData = _.reverse(res.data)
        const userData = []
        reversedData.map(data => {
          if (data.email === this.state.userInfo.email) {
            userData.push(data)
          }
        })
        this.setState({
          personalWitnessData: userData
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.userInfo) {
      return <div>loading...</div>
    }
    return (
      <div className="mypage">
        <MyPageSection1 userInfo={this.state.userInfo} />
        <div>
          <MyPageSection2
            personalFindData={this.state.personalFindData}
            personalWitnessData={this.state.personalWitnessData}
            userInfo={this.state.userInfo}
            modalDataChange={this.props.modalDataChange}
          />
        </div>
      </div>
    )
  }
}

export default Mypage
