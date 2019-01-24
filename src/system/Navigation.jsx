import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.1);
`;

const NavMiddler = styled.div`
  width: 1180px;
  margin: 0 auto;
`;

export default function Navigation() {
  return (
    <NavContainer>
      <NavMiddler>
        <Link to="/"><img src={logo} alt="highthon logo" /></Link>
        <Link to="/team">팀빌딩 신청</Link>
        <Link to="/notice">공지사항</Link>
        <Link to="/score">채점 기준</Link>
        <Link to="/song">노래 신청</Link>
      </NavMiddler>
    </NavContainer>
  );
}
