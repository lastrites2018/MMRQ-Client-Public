import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className="header_line">
      <div className="header">
        <NavLink to="/post" className="item" activeClassName="active">신고/제보 등록하기</NavLink> {/*post*/}
        <NavLink to="/main" className="item" activeClassName="active">HOME</NavLink> {/*main*/}
        <NavLink to="/find" className="item" activeClassName="active">찾아주세요</NavLink> {/*find*/}
        <NavLink to="/witness" className="item" activeClassName="active">목격했어요</NavLink> {/*witness*/}
        <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink> {/*login*/}
        <NavLink to="/signup" className="item" activeClassName="active">회원가입</NavLink> {/*signup*/}
        {/* <NavLink to="/mypage" className="item" activeClassName="active">마이페이지</NavLink> {/*mypage */}
      </div>
    </div>
  );
};

export default Header;