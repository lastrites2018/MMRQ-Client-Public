import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import logo from './MMREQ_logo.png'
import { withCookies, Cookies } from 'react-cookie'
import { instanceOf } from 'prop-types'

class Header extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props)
    const { cookies } = props
    cookies.get('test')
      ? (this.state = { login: true })
      : (this.state = { login: false })
  }

  moveMain = () => {
    this.props.history.push('./main')
  }

  loginchange = () => {
    return this.props.login ? (
      <div>
        <NavLink
          to="/main"
          className="item"
          activeClassName="active"
          onClick={this.props.logout}
        >
          로그아웃
        </NavLink>
        <NavLink to="/Mypage" className="item" activeClassName="active">
          마이페이지
        </NavLink>
      </div>
    ) : (
      <div>
        <NavLink to="/login" className="item" activeClassName="active">
          로그인
        </NavLink>
        <NavLink to="/signup" className="item" activeClassName="active">
          회원가입
        </NavLink>
      </div>
    )
  }

  render() {
    return (
      <div className="header_line">
        <div>
          <Link to="./main">
            <img src={logo} alt="" />
          </Link>
          {/* <span className="title_mm">멍멍</span> <span className="title_req">레스Q</span> */}

          <div className="header">
            <NavLink to="/post" className="item" activeClassName="active">
              신고/제보 등록하기
            </NavLink>
            <NavLink to="/main" className="item" activeClassName="active">
              HOME
            </NavLink>
            <NavLink to="/find" className="item" activeClassName="active">
              찾아주세요
            </NavLink>
            <NavLink to="/witness" className="item" activeClassName="active">
              목격했어요
            </NavLink>
            {this.loginchange()}
          </div>
        </div>
      </div>
    )
  }
}

export default withCookies(Header)
