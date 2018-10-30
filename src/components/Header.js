import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/main/MMresQ" className="item" activeClassName="active">메인</NavLink>
      <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
      <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink>
      <NavLink to="/mypage" className="item" activeClassName="active">마이페이지</NavLink>
      <NavLink to="/search" className="item" activeClassName="active">검색</NavLink>
      <NavLink to="/signup" className="item" activeClassName="active">회원가입</NavLink>
    </div>
  );
};

export default Header;